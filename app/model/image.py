from sqlalchemy import Integer, String, DateTime,Text,Float,Index,text
from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy.sql import func
from .conn import Base
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime
from sqlalchemy import select
from .conn import get_db
from app.utils.redis import get_redis_client

class ImageModel(Base):
    __tablename__ = "zp_image"
    __table_args__ = (
        # uid + hash组合索引
        Index("idx_uid_hash", "uid", "hash"),
        Index("idx_uid_album_id", "uid", "album_id"),
        Index("idx_uid_upload_at", "uid", "upload_at"),
        Index("idx_uid_is_nsfw", "uid", "is_nsfw"),
        Index("idx_uid_is_qrcode", "uid", "is_qrcode"),
        # 使用 text() 写 WHERE 条件，避免引用未定义的类属性
        Index("idx_nsfw_porn", "upload_at", postgresql_where=text("is_nsfw = 3")),
        Index("idx_qrcode_true", "upload_at", postgresql_where=text("is_qrcode = 3")),
        # 新增：专门优化 "WHERE is_nsfw = 0 ORDER BY id DESC" 的查询
        Index("idx_nsfw_id_desc", "is_nsfw", "id", postgresql_ops={"id": "desc"}),
        {"comment": "图片表"},
    )

    id:Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    uid:Mapped[str|None] = mapped_column(String(32), nullable=True, index=True, comment="用户ID")
    imgid:Mapped[str] = mapped_column(String(16), nullable=False, unique=True, index=True, comment="图片唯一ID")
    path:Mapped[str] = mapped_column(String(64), nullable=False, comment="图片存储路径")
    thumb_path:Mapped[str|None] = mapped_column(String(64), nullable=True, comment="缩略图存储路径")
    storage_slug:Mapped[str] = mapped_column(String(64), nullable=False, comment="存储策略slug")
    # 图片上传时间
    upload_at:Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False,index=True, server_default=func.now(), comment="上传时间")
    album_id:Mapped[int] = mapped_column(Integer, default=0,nullable=False, comment="相册ID")
    mime_type:Mapped[str] = mapped_column(String(32), nullable=False, comment="图片MIME类型")
    width:Mapped[int] = mapped_column(Integer, nullable=False, comment="图片宽度")
    height:Mapped[int] = mapped_column(Integer, nullable=False, comment="图片高度")
    ext:Mapped[str] = mapped_column(String(16), nullable=False, comment="图片扩展名")
    size:Mapped[int] = mapped_column(Integer, nullable=False, comment="图片大小，存储字节")
    filename:Mapped[str] = mapped_column(String(255), nullable=False, comment="图片原始文件名")
    # 是否是色情图片：0：未识别：1：识别中，2：正常图片：3：色情图片，4：不需要识别，5：识别失败
    is_nsfw:Mapped[int] = mapped_column(Integer, default=0, nullable=False, comment="是否NSFW色情图片")
    # 是否是二维码:0：未识别：1：识别中，2：无二维码：3：二维码，4：不需要识别，5：无法识别
    is_qrcode:Mapped[int] = mapped_column(Integer, default=0, nullable=False, comment="是否二维码图片")
    upload_ip: Mapped[str] = mapped_column(String(45), nullable=False, comment="上传者IP地址")
    # hash，使用xxhash.xxh3_64()算法，考虑是否移到主表
    hash:Mapped[str] = mapped_column(String(16), nullable=False, index=True, comment="图片hash值")

    # 写一个函数，根据uid和hash查询单张图片
    @classmethod
    async def get_by_uid_and_hash(cls, uid: str, hash: str):
        async with get_db() as db:
            result = await db.execute(
                select(cls).where(cls.uid == uid, cls.hash == hash)
            )
            return result.scalars().first()
        
    # 写一个函数，根据元数据查询图片总数
    # @classmethod
    # async def count_images(cls):
    #     async with get_db() as db:
    #         '''
    #         根据元数据查询，比如：
    #         SELECT reltuples::bigint AS estimate 
    #         FROM pg_class 
    #         WHERE relname = 'zp_image';
    #         '''
    #         result = await db.execute(
    #             text("SELECT reltuples::bigint AS estimate FROM pg_class WHERE relname = 'zp_image';")
    #         )
    #         return result.scalar()
    
    # 写一个函数，根查询图片总数，先从redis缓存中获取，如果没有再查询数据库，并将结果缓存到redis中，设置过期时间为4小时
    @classmethod
    async def count_images(cls):
        redis = await get_redis_client()
        key = "SYS:IMAGE:COUNT"
        # 尝试从redis缓存中获取
        count = await redis.get(key)
        if count is not None:
            # print("从redis缓存中获取图片总数")
            return int(count)
        async with get_db() as db:
            # 查询数据库获取图片总数
            query = select(func.count()).select_from(cls)
            result = await db.execute(query)
            count = result.scalar()
            # 将结果缓存到redis中，设置过期时间为4小时
            await redis.set(key, str(count), ex=4*60*60)
            return count