from sqlalchemy import Integer, String, DateTime,Text,Float,Index
from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy.sql import func
from .conn import Base
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime
from sqlalchemy import select
from .conn import get_db

class PageModel(Base):
    __tablename__ = "zp_page"
    __table_args__ = (
        {"comment": "页面表"},
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    slug:Mapped[str] = mapped_column(String(64), nullable=False, unique=True, index=True, comment="页面别名")
    title: Mapped[str] = mapped_column(String(512), nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now())
    # 页面状态，0-草稿，1-已发布
    status: Mapped[int] = mapped_column(Integer, nullable=False, default=1, comment="页面状态")