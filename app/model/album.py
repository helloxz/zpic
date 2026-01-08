from sqlalchemy import Integer, String, DateTime,Text,Float,Index,UniqueConstraint
from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy.sql import func
from .conn import Base
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime
from sqlalchemy import select
from .conn import get_db

class AlbumModel(Base):
    __tablename__ = "zp_album"
    __table_args__ = (
        Index("idx_uid_status", "uid", "status"),
        UniqueConstraint("uid", "name", name="uq_uid_name"),
        {"comment": "相册表"},
    )

    album_id:Mapped[int] = mapped_column(Integer, primary_key=True,index=True, autoincrement=True)
    uid:Mapped[str|None] = mapped_column(String(32), nullable=False, index=True, comment="用户ID")
    name:Mapped[str] = mapped_column(String(128), nullable=False, comment="相册名称")
    description:Mapped[str|None] = mapped_column(Text, nullable=True, comment="相册描述")
    
    cover:Mapped[str|None] = mapped_column(String(255), nullable=True, comment="相册封面URL")
    # 相册状态，0：软删除，1：正常
    status:Mapped[int] = mapped_column(Integer, default=1, nullable=False, comment="相册状态")
    # 相册下的图片数量，保留用
    image_count:Mapped[int] = mapped_column(Integer, default=0, nullable=False, comment="相册图片数量")
    # 相册标识，创建的时候默认8位随机数
    slug:Mapped[str|None] = mapped_column(String(64), nullable=False, unique=True, index=True, comment="相册唯一标识符")
    # 如 public/private/password/link_only
    privacy:Mapped[str] = mapped_column(String(16), default="private", nullable=False, comment="相册隐私设置")
    # 访问密码
    access_password:Mapped[str|None] = mapped_column(String(32), nullable=True, comment="相册访问密码")
    # 排序字段，越小越靠前
    sort_order:Mapped[int] = mapped_column(Integer, default=9999, nullable=False, comment="相册排序字段")
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False, comment="创建时间"
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False, comment="更新时间"
    )