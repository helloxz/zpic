# 系统配置表
from sqlalchemy import Integer, String, DateTime
from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy.sql import func
from .conn import Base
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime

class SysOptionModel(Base):
    __tablename__ = "zp_sys_option"
    __table_args__ = (
        {"comment": "系统配置表"},
    )

    id:Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    key:Mapped[str] = mapped_column(String(64), nullable=False, unique=True, index=True, comment="选项键")
    value:Mapped[dict] = mapped_column(JSONB, nullable=False, comment="选项值")
    # 创建时间
    created_at:Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now(), comment="创建时间")
    # 更新时间
    updated_at:Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now(), onupdate=func.now(), comment="更新时间")