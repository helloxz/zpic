# from app.config import config
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from contextlib import asynccontextmanager
import os

DB_USER = os.environ.get("DB_USER","postgres")
DB_PASSWORD = os.environ.get("DB_PASSWORD","password")
DB_HOST = os.environ.get("DB_HOST","localhost")
DB_PORT = os.environ.get("DB_PORT","5432")
DB_NAME = os.environ.get("DB_NAME","zpic")

# 使用 asyncpg 驱动
SQLALCHEMY_DATABASE_URL = f"postgresql+asyncpg://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = create_async_engine(SQLALCHEMY_DATABASE_URL)
# 保持变量名不变以减少改动范围
SessionLocal = async_sessionmaker(bind=engine, class_=AsyncSession, expire_on_commit=False, autoflush=False)
Base = declarative_base()

# 异步数据库会话管理器
@asynccontextmanager
async def get_db():
    """异步数据库会话上下文管理器，自动提交/回滚和关闭连接"""
    db: AsyncSession = SessionLocal()
    try:
        yield db
        await db.commit()
    except Exception:
        await db.rollback()
        raise
    finally:
        await db.close()

'''后续使用示例（异步）：
from sqlalchemy import select

# 查询示例
async def get_user(user_id: int):
    async with get_db() as db:
        result = await db.execute(select(User).where(User.id == user_id))
        return result.scalar_one_or_none()

# 写入示例（上下文退出时自动提交）
async def create_user(user: User):
    async with get_db() as db:
        db.add(user)

# 注意：需要安装 asyncpg
# pip install asyncpg
'''