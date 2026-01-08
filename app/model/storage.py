# 省控线模型
from sqlalchemy import Integer, String, DateTime,Text
from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy.sql import func
from .conn import Base
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime
from sqlalchemy import CheckConstraint

class StorageModel(Base):
    __tablename__ = "zp_storage"
    __table_args__ = (
        CheckConstraint("status IN (0, 1)", name="check_status"),
        {"comment": "存储配置表"},
    )

    id:Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    slug:Mapped[str] = mapped_column(String(64), nullable=False, unique=True, index=True, comment="存储键")
    name:Mapped[str] = mapped_column(String(64), nullable=False, comment="存储名称")
    bucket:Mapped[str|None] = mapped_column(String(128), nullable=True, comment="存储桶名称")
    endpoint:Mapped[str|None] = mapped_column(String(256), nullable=True, comment="存储服务地址")
    access_key:Mapped[str|None] = mapped_column(String(512), nullable=True, comment="访问密钥")
    secret_key:Mapped[str|None] = mapped_column(String(512), nullable=True, comment="密钥")
    region:Mapped[str | None] = mapped_column(String(64), nullable=True, comment="存储区域")
    # 创建类型，如s3
    storage_type:Mapped[str] = mapped_column(String(32), nullable=False, comment="存储类型，如s3、minio等")
    domain :Mapped[str] = mapped_column(String(256), nullable=False, comment="存储访问域名")
    extra_domains:Mapped[list|None] = mapped_column(JSONB,default=[], nullable=True, comment="额外访问域名列表")
    is_default:Mapped[bool] = mapped_column(Integer, default=0, nullable=False, comment="是否默认存储，0否，1是")
    status:Mapped[int] = mapped_column(Integer, default=1, nullable=False, comment="存储状态，0禁用，1启用")
    config:Mapped[dict|None] = mapped_column(JSONB, nullable=True, comment="扩展参数，保留用")
    # 创建时间
    created_at:Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now(), comment="创建时间")
    # 更新时间
    updated_at:Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, server_default=func.now(), onupdate=func.now(), comment="更新时间")
    remark:Mapped[str | None] = mapped_column(Text, nullable=True, comment="备注信息")