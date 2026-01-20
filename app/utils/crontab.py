# import asyncio
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from app.model.image import ImageModel
from app.model.metainfo import MetaInfoModel
from app.model.deletion_queue import DeletionQueueModel
from app.model.conn import get_db
from sqlalchemy import select, func,delete
from sqlalchemy import update
from collections import defaultdict
import asyncio
from .redis import create_redis_pool, close_redis_pool
from app.utils.logger import logger
from app.model.login_log import LoginLogModel
from app.api.upload import UploadHandler

class TaskScheduler:
    def __init__(self):
        self.scheduler = AsyncIOScheduler()
        

    # 启动定时任务
    async def start(self):
        # 初始化Redis连接
        await create_redis_pool()
        # 每隔1分钟执行一次
        self.scheduler.add_job(self.delete_images, 'interval', minutes=1)
        # 每天凌晨1点执行一次清理登录日志
        self.scheduler.add_job(self.clean_login_logs, 'cron', hour=1, minute=0)
        # 关键：启动调度器
        self.scheduler.start()
        # print("🕒 调度器已启动")
        # while True:
        #     import asyncio
        #     await asyncio.sleep(1)
        

    async def shutdown(self):
        await close_redis_pool()
        self.scheduler.shutdown()
        print("🛑 调度器已关闭")

    async def _remove_objects_threadsafe(self, client, bucket, objects):
        # 在线程中执行并消费生成器，返回错误列表
        def _run():
            errors = []
            for err in client.remove_objects(bucket_name=bucket, delete_object_list=objects):  # type: ignore
                errors.append(err)
            return errors
        return await asyncio.to_thread(_run)

    async def _process_storage_group(self, storage_slug, tasks, db):
        from app.api.admin.storage import StorageHandler
        from minio import Minio
        from minio.deleteobjects import DeleteObject
        upload_handler = UploadHandler()

        try:
            storage_handler = StorageHandler()
            storage = await storage_handler.get_storage(slug=storage_slug)
            style = upload_handler.get_storage_style(storage.endpoint)  # type: ignore
            client = Minio(
                endpoint=storage.endpoint,  # type: ignore
                access_key=storage.access_key,  # type: ignore
                secret_key=storage.secret_key,  # type: ignore
                region=storage.region,  # type: ignore
                secure=True,
            )
            if style == "virtual":
                client.enable_virtual_style_endpoint()
            objects_to_delete = [DeleteObject(task.path) for task in tasks]
            # MinIO remove_objects 返回生成器，需迭代消费以发现错误
            errors = await self._remove_objects_threadsafe(client, storage.bucket, objects_to_delete)  # type: ignore
            for error in errors:
                print("error occurred when deleting object", error)

            objects_to_delete_thumb = [DeleteObject(task.thumb_path) for task in tasks if task.thumb_path]
            if objects_to_delete_thumb:
                thumb_errors = await self._remove_objects_threadsafe(client, storage.bucket, objects_to_delete_thumb)  # type: ignore
                for error in thumb_errors:
                    print("error occurred when deleting thumb object", error)

            # 成功后更新对应任务为 success
            await db.execute(
                update(DeletionQueueModel)
                .where(DeletionQueueModel.id.in_([t.id for t in tasks]))
                .values(status='success')
            )
            return len(tasks)
        except Exception as e:
            # print(f"❌ 存储 {storage_slug} 删除图片失败: {e}")
            logger.error(f"❌ 存储 {storage_slug} 删除图片失败: {e}")
            await db.rollback()
            return 0

    # 定时删除图片
    async def delete_images(self):
        # 查询出删除队列中，状态为待删除的图片
        async with get_db() as db:
            # 每次查询30条，根据ID升序排序
            result = await db.execute(
                select(DeletionQueueModel).where(DeletionQueueModel.status == 'pending').order_by(DeletionQueueModel.id.asc()).limit(30)
            )
            deletion_tasks = result.scalars().all()
            # 把查询结果批量更新status为deleting
            if not deletion_tasks:
                return
            task_ids = [task.id for task in deletion_tasks]
            await db.execute(
                update(DeletionQueueModel)
                .where(DeletionQueueModel.id.in_(task_ids))
                .values(status='deleting')
            )
            # await db.commit()
            # 根据storage_slug分组
            # 创建一个字典，其默认值是空列表。当访问一个不存在的键时，会自动创建该键，并将其值初始化为 []，避免 KeyError
            tasks_by_storage = defaultdict(list)
            for task in deletion_tasks:
                tasks_by_storage[task.storage_slug].append(task)

            # 并发处理每个存储分组
            group_coros = [
                self._process_storage_group(storage_slug, tasks, db)
                for storage_slug, tasks in tasks_by_storage.items()
            ]
            counts = await asyncio.gather(*group_coros, return_exceptions=False)

            # 提交批量更新
            await db.commit()

            total_deleted = sum(counts)
            print(f"✅ 成功删除 {total_deleted} 张图片")
    # 清理3个月以前的登录日志
    async def clean_login_logs(self):
        async with get_db() as db:
            result = await db.execute(
                delete(LoginLogModel).where(
                    LoginLogModel.login_at < func.now() - func.interval('90 days')
                )
            )
            await db.commit()
            deleted_count = result.rowcount # type: ignore
            logger.info(f"✅ 成功删除 {deleted_count} 条登录日志")
            print(f"✅ 成功删除 {deleted_count} 条登录日志")



# 全局单例
if __name__ == "__main__":
    import asyncio
    task_scheduler = TaskScheduler()
    # asyncio.run(task_scheduler.start())
    async def main():
        await task_scheduler.start()
        print("✅ 调度器已启动，每分钟执行一次删除任务。按 Ctrl+C 退出。")
        try:
            # 保持事件循环运行
            while True:
                await asyncio.sleep(10)  # 保持脚本运行
        except (KeyboardInterrupt, SystemExit):
            await task_scheduler.shutdown()

    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("🛑 程序被手动中断")

