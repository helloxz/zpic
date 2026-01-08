from fastapi import FastAPI
from contextlib import asynccontextmanager
from .routers import router as my_router
from .utils.redis import create_redis_pool, close_redis_pool
from fastapi.middleware.cors import CORSMiddleware
from .model.conn import engine, Base
from .middleware.auth import auth
from .utils.crontab import TaskScheduler
from fastapi.staticfiles import StaticFiles
# 导入模型，确保后续可以被创建
# from .model import user
# from .model import sys_option
task_scheduler = TaskScheduler()
# 异步初始化数据库模型
async def init_models():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

# 同步创建所有数据库表，不再需要
# Base.metadata.create_all(bind=engine)

# 应用启动和关闭事件，上下文管理器
@asynccontextmanager
async def lifespan(app: FastAPI):
    # 初始化Redis连接
    await create_redis_pool()
    # 启动定时任务
    await task_scheduler.start()
    # 改成alembic执行迁移
    # await init_models()
    yield
    # 程序关闭时关闭定时任务
    task_scheduler.shutdown()
    await close_redis_pool()

app = FastAPI(lifespan=lifespan)

app.middleware("http")(auth)  # 添加新的鉴权中间件

app.mount("/static", StaticFiles(directory="app/static"), name="static")

# 全局跨域中间件
app.add_middleware(
    CORSMiddleware,
    allow_credentials=False,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
# 挂载路由
app.include_router(my_router)