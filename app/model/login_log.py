from sqlalchemy import Integer, String, DateTime,Text,Float,Index
from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy.sql import func
from .conn import Base
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime
from sqlalchemy import select
from .conn import get_db

class LoginLogModel(Base):
    __tablename__ = "zp_login_log"
    # 备注信息
    __table_args__ = (
        Index("idx_uid_login_at", "uid", "login_at"),
        {"comment": "用户日志表"}
    )

    id:Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    uid:Mapped[str] = mapped_column(String(32), nullable=False, index=True, comment="用户ID")
    email: Mapped[str | None] = mapped_column(String(100),index=True, nullable=True, comment="用户邮箱")
    login_ip: Mapped[str] = mapped_column(String(45), nullable=False, comment="登录IP地址")
    login_ua: Mapped[str] = mapped_column(String(256), nullable=False, comment="登录时的UA")
    login_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False, comment="登录时间"
    )
    token: Mapped[str] = mapped_column(String(64), nullable=False,unique=True, comment="登录token")
    # 登录状态，1成功，0失败，-1已退出
    status: Mapped[int] = mapped_column(Integer, nullable=False, default=1, comment="登录状态，1成功，0失败")
    login_location: Mapped[str|None] = mapped_column(String(100), nullable=True, comment="登录位置")
    # 登录失败原因，如'密码错误'、'账户锁定'等
    fail_reason: Mapped[str | None] = mapped_column(String(100), nullable=True, comment="登录失败原因")