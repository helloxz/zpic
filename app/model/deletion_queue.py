from sqlalchemy import Integer, String, DateTime,Text,Float,Index
from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy.sql import func
from .conn import Base
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime
from sqlalchemy import select
from .conn import get_db

class DeletionQueueModel(Base):
    __tablename__ = "zp_deletion_queue"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    uid:Mapped[str|None] = mapped_column(String(32), nullable=True, index=True, comment="用户ID")
    imgid:Mapped[str] = mapped_column(String(16), nullable=False, unique=True, index=True, comment="图片唯一ID")
    path:Mapped[str] = mapped_column(String(64), nullable=False, comment="图片存储路径")
    thumb_path:Mapped[str|None] = mapped_column(String(64), nullable=True, comment="缩略图存储路径")
    storage_slug:Mapped[str] = mapped_column(String(64), nullable=False, comment="存储策略slug")
    # 图片上传时间
    upload_at:Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now(), comment="上传时间")
    # 删除请求时间
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False, comment="创建时间"
    )
    # 更新时间
    update_at:Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now(), comment="更新时间")
    # —— 关键：状态字段 ——
    status = mapped_column(
        String(16),
        nullable=False,
        default="pending",  # 状态流转：pending → deleting → success/failed
        index=True
    )
    role: Mapped[str] = mapped_column(String(20), default="user", nullable=False, comment="用户角色，user普通用户，admin管理员")
    # 删除者IP
    ip: Mapped[str] = mapped_column(String(45), nullable=False, comment="上传者IP地址")
    # 删除者UA
    ua: Mapped[str] = mapped_column(String(256), nullable=False, comment="上传者UA")


