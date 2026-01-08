from sqlalchemy import Integer, String, Text, DateTime
from sqlalchemy.sql import func
from .conn import Base
from sqlalchemy.orm import Mapped,mapped_column
from datetime import datetime

class UserModel(Base):
    # 表名称
    __tablename__ = "zp_user"
    # 备注信息
    __table_args__ = {"comment": "用户表"}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True, comment="主键ID")
    uid: Mapped[str] = mapped_column(String(32), unique=True, index=True, nullable=False, comment="用户唯一UID")
    nickname: Mapped[str] = mapped_column(String(50), nullable=True, comment="用户昵称，保留用")
    email: Mapped[str | None] = mapped_column(String(100), unique=True,index=True, nullable=True, comment="用户邮箱，唯一")
    password: Mapped[str | None] = mapped_column(String(32), nullable=True, comment="用户密码，MD5加密存储")
    reg_ip: Mapped[str] = mapped_column(String(45), nullable=False, comment="注册IP地址")
    reg_ua: Mapped[str] = mapped_column(String(256), nullable=False, comment="注册时的UA")
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False, comment="创建时间"
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False, comment="更新时间"
    )
    status: Mapped[int] = mapped_column(Integer, default=1, nullable=False, comment="用户状态，0禁用，1启用")
    role: Mapped[str] = mapped_column(String(20), default="user", nullable=False, comment="用户角色，user普通用户，admin管理员")
    # 用户头像
    avatar: Mapped[str | None] = mapped_column(String(255), nullable=True, comment="用户头像URL")
    # 备注
    remark: Mapped[str | None] = mapped_column(Text, nullable=True, comment="备注信息")