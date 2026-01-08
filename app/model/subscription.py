from sqlalchemy import Integer, String, DateTime, Text
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.sql import func
from .conn import Base
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime
# 新增导入
from sqlalchemy import select
from .conn import get_db

class SubscriptionModel(Base):
    __tablename__ = "zp_subscription"
    __table_args__ = (
        {"comment": "订阅表"},
    )

    id:Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    uid:Mapped[str] = mapped_column(String(32), nullable=False, index=True, comment="用户ID")
    name:Mapped[str] = mapped_column(String(128), nullable=False, comment="订阅名称")
    tier:Mapped[str] = mapped_column(String(32), nullable=False, comment="订阅等级：free/trial/paid")
    daily_limit:Mapped[int] = mapped_column(Integer, nullable=False, comment="每日上传限制")
    monthly_limit:Mapped[int] = mapped_column(Integer, nullable=False, comment="每月上传限制")
    size_limit_mb:Mapped[int] = mapped_column(Integer, nullable=False, comment="单文件上传大小限制，MB")
    storage_limit_mb:Mapped[int] = mapped_column(Integer, nullable=False, comment="总存储容量限制，MB")
    order_id:Mapped[str | None] = mapped_column(String(32), nullable=True, comment="关联订单ID")
    # 创建时间
    created_at:Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now(), comment="创建时间")
    start_at:Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now(), comment="开始时间")
    # 存储策略
    storage_slug:Mapped[str | None] = mapped_column(String(64), nullable=False, comment="存储策略slug")
    end_at:Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, comment="结束时间")
    remark:Mapped[str | None] = mapped_column(Text, nullable=True, comment="备注信息")

    # 新增：类方法形式的查询函数，后续注意添加redis缓存
    @classmethod
    async def get_user_subscription(cls, uid: str):
        """
        获取用户当前有效订阅。
        cls 是类方法的第一个参数，指向 SubscriptionModel 类本身。
        调用示例：
            sub = await SubscriptionModel.get_user_subscription(uid)
        """
        import datetime
        current_time = datetime.datetime.now()
        async with get_db() as db:
            stmt = (
                select(cls)
                .where(
                    cls.uid == uid,
                    cls.end_at > current_time
                )
                .order_by(cls.id.desc())
            )
            result = await db.execute(stmt)
            subscriptions = result.scalars().all()

            count = len(subscriptions)
            if count >= 2:
                return subscriptions[0]
            elif count == 1:
                return subscriptions[0]
            else:
                return None