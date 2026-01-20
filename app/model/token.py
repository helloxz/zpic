from sqlalchemy import Integer, String, DateTime,Text,Float,Index,UniqueConstraint
from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy.sql import func
from .conn import Base
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime
from sqlalchemy import select
from .conn import get_db

class TokenModel(Base):
    __tablename__ = "zp_token"
    __table_args__ = (
        Index("idx_token_uid_status", "uid", "status"),  # 按用户查有效 token
        {"comment": "API Tokens表"},
    )
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, comment="主键ID")
    uid:Mapped[str] = mapped_column(String(32), nullable=False, index=True, comment="用户ID")
    # Token名称，允许为空
    name:Mapped[str] = mapped_column(String(64), nullable=False,default='Default Token', comment="Token名称")
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False, comment="创建时间"
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False, comment="更新时间"
    )
    # 过期时间，NULL表示永不过期
    expires_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=True, comment="过期时间（NULL=永不过期）")
    # 类型，imgurl接口：legacy，zpic新接口：api
    token_type:Mapped[str] = mapped_column(String(32), nullable=False, default='api', comment="Token类型")
    # Token值，新的token为sk-开头
    token:Mapped[str] = mapped_column(String(128), nullable=False,index=True,unique=True, comment="Token值")
    # Token状态，active：有效，disabled：禁用
    status:Mapped[str] = mapped_column(String(16), nullable=False, default='active', comment="Token状态")
    # 备注
    remark:Mapped[str] = mapped_column(Text, nullable=True, comment="备注")