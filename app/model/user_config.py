# 用户配置表
from sqlalchemy import Integer, String, DateTime,BigInteger
from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy.sql import func
from .conn import Base
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime

class UserConfigModel(Base):
    __tablename__ = "zp_user_config"
    __table_args__ = (
        {"comment": "用户配置表"},
    )

    id:Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    uid: Mapped[str] = mapped_column(String(32), unique=True, index=True, nullable=False, comment="用户唯一UID")
    compress:Mapped[bool] = mapped_column(nullable=False,default=True, comment="是否启用图片压缩")
    # 用户不可设置，只能由管理员开启
    watermark_enabled:Mapped[bool] = mapped_column(nullable=False,default=False, comment="是否启用水印")
    # 用户不可设置，只能由管理员开启
    watermark_text:Mapped[str] = mapped_column(String(20), nullable=True, comment="水印文字")
    # 用户上传总量，保留用，可能前期通过redis计算，而不是用这个字段
    upload_count:Mapped[int] = mapped_column(BigInteger, default=0, nullable=False, comment="用户上传总量")
    # 用户总上传大小统计
    storage_bytes:Mapped[int] = mapped_column(BigInteger, default=0, nullable=False, comment="用户存储总字节数")
    # 用户使用的存储，默认用订阅表里面的存储，所以这里不再需要
    # storage_slug:Mapped[str] = mapped_column(String(64), nullable=False, comment="用户默认存储slug")
    # 用户存储域名，对应订阅里面的那个存储，如果为空，则使用存储里面的默认域名。
    storage_domains:Mapped[dict] = mapped_column(JSONB, nullable=False,default={}, comment="用户默认存储域名")
    # 创建时间
    created_at:Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now(), comment="创建时间")
    # 更新时间
    updated_at:Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now(), onupdate=func.now(), comment="更新时间")
    ext :Mapped[dict|None] = mapped_column(JSONB,default={},nullable=True, comment="扩展参数，保留用")