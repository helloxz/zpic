from sqlalchemy import Integer, String, DateTime, Text, Numeric
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.sql import func
from .conn import Base
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime
# 新增导入
from sqlalchemy import select
from .conn import get_db

class PlanModel(Base):
    __tablename__ = "zp_plan"
    __table_args__ = (
        {"comment": "套餐计划表"},
    )
    id:Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    tier:Mapped[str] = mapped_column(String(32), nullable=False, comment="订阅等级：free/trial/paid")
    name:Mapped[str] = mapped_column(String(128), nullable=False, comment="订阅名称")
    daily_limit:Mapped[int] = mapped_column(Integer, nullable=False, comment="每日上传限制")
    monthly_limit:Mapped[int] = mapped_column(Integer, nullable=False, comment="每月上传限制")
    size_limit_mb:Mapped[int] = mapped_column(Integer, nullable=False, comment="单文件上传大小限制，MB")
    storage_limit_mb:Mapped[int] = mapped_column(Integer, nullable=False, comment="总存储容量限制，MB")
    price:Mapped[float] = mapped_column(Numeric(6, 2), nullable=False, comment="价格，单位分")
    original_price:Mapped[float] = mapped_column(Numeric(6, 2), nullable=False, comment="原价，单位分")
    # 创建时间
    created_at:Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now(), comment="创建时间")
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False, comment="更新时间"
    )
    # 存储策略
    storage_slug:Mapped[str | None] = mapped_column(String(64), nullable=False, comment="存储策略slug")
    # 套餐描述
    description:Mapped[str | None] = mapped_column(Text, nullable=True, comment="套餐描述")
    # 有效期天数
    valid_days:Mapped[int] = mapped_column(Integer, nullable=False, comment="有效期天数")
    # 排序字段，越小越靠前
    sort_order:Mapped[int] = mapped_column(Integer, nullable=False, default=0, comment="排序字段，越小越靠前")
    # 状态，1启用，0禁用
    status:Mapped[int] = mapped_column(Integer, nullable=False, default=1, comment="状态，1启用，0禁用")