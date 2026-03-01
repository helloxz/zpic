from sqlalchemy import Integer, String, DateTime,Text,Float,Index
from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy.sql import func
from .conn import Base
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime
from sqlalchemy import select
from .conn import get_db

class RedeemCode(Base):
    __tablename__ = 'zp_redeem_code'

    id:Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    # 16位唯一兑换码，只能是大写，支持字母、数字-和_
    code: Mapped[str] = mapped_column(String(16), unique=True, nullable=False)
    # 对应套餐ID
    plan_id:Mapped[int] = mapped_column(Integer, nullable=False)
    # 兑换码状态，状态 (unused, used, expired, disabled)
    status:Mapped[str] = mapped_column(String(20), nullable=False, default='unused')
    # 用户uid
    uid: Mapped[str | None] = mapped_column(String(32), index=True, nullable=True, comment="用户UID")
    # 用户邮箱
    email: Mapped[str | None] = mapped_column(String(100),index=True, nullable=True, comment="用户邮箱")
    # 使用者IP地址
    use_ip: Mapped[str | None] = mapped_column(String(45), nullable=True, comment="IP地址")
    # 使用者UA
    use_ua: Mapped[str | None] = mapped_column(String(256), nullable=True, comment="UA")
    # 兑换码创建时间
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False, comment="创建时间"
    )
    # 兑换码失效时间
    expires_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False, comment="失效时间")
    # 兑换码使用时间
    used_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True, comment="使用时间")
    # 备注
    remark: Mapped[str | None] = mapped_column(Text, nullable=True, comment="备注信息")