from sqlalchemy import Integer, String, DateTime, Text, Numeric
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.sql import func
from .conn import Base
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime

# 新增导入
from sqlalchemy import select
from .conn import get_db

class OrderModel(Base):
    __tablename__ = "zp_order"
    __table_args__ = (
        {"comment": "订单表"},
    )
    id:Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    # 商户订单ID
    order_id:Mapped[str]= mapped_column(String(64), nullable=False, unique=True,index=True, comment="商户订单ID")
    # plan_id
    plan_id:Mapped[int]= mapped_column(Integer, nullable=True, comment="套餐ID")
    # 服务方订单ID，一般为支付宝、微信订单ID
    service_order_id :Mapped[str] = mapped_column(String(64),index=True, nullable=True, comment="服务方订单ID")
    uid: Mapped[str] = mapped_column(String(32), index=True, nullable=False, comment="用户唯一UID")
    currency: Mapped[str] = mapped_column(String(3), nullable=False, default="CNY", comment="货币类型")
    # 支付方式，如alipay、wxpay、paypal、stripe等
    payment_method :  Mapped[str]= mapped_column(String(32), nullable=False, comment="支付方式")
    # 订单名称
    order_name :  Mapped[str] = mapped_column(String(255), nullable=False, comment="订单名称")
    # 订单金额，精确到小数点后2位
    total_amount : Mapped[float] = mapped_column(Numeric(10, 2), nullable=False, comment="订单金额")
    # 创建时间
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), comment="创建时间")
    # 支付时间
    paid_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=True, comment="支付时间")
    # 订单状态，未支付(unpaid)、已支付(paid)、已取消、已退款等，默认未支付
    status: Mapped[str] = mapped_column(String(32), nullable=False, default="unpaid", comment="订单状态")
    # ip
    ip:Mapped[str] = mapped_column(String(45), nullable=False, comment="注册IP地址")
    # ua
    user_agent:Mapped[str] = mapped_column(String(256), nullable=False, comment="注册时的UA")
    plan_snapshot:Mapped[dict] = mapped_column(JSONB, nullable=False, comment="下单时套餐快照")
    # 订单备注
    remark:Mapped[str] = mapped_column(Text, nullable=True, comment="订单备注")