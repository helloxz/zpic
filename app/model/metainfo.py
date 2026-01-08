from sqlalchemy import Integer, String, DateTime,Text,Boolean
from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy.sql import func
from .conn import Base
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime

class MetaInfoModel(Base):
    __tablename__ = "zp_metainfo"
    __table_args__ = (
        {"comment": "图片元信息表"},
    )

    id:Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    imgid:Mapped[str] = mapped_column(String(16), nullable=False, unique=True, index=True, comment="图片唯一ID")
    # 图片删除token，仅游客需要
    token:Mapped[str|None] = mapped_column(String(32), nullable=True, unique=True, index=True, comment="图片删除token")
    upload_ua: Mapped[str] = mapped_column(String(256), nullable=False, comment="上传者UA")
    compressed:Mapped[bool] = mapped_column(Boolean, default=False, nullable=False, comment="是否压缩")
    # 浏览量
    views:Mapped[int] = mapped_column(Integer, default=0, nullable=False, comment="图片浏览量")
    # 关键词
    keywords:Mapped[JSONB|None] = mapped_column(JSONB, nullable=True,default=None, comment="图片关键词")
    # 图片描述
    description:Mapped[str|None] = mapped_column(String(256), nullable=True, default=None, comment="图片描述")
    # 保留用字段，存储EXIF信息
    exif:Mapped[JSONB|None] = mapped_column(JSONB, nullable=True, default=None, comment="图片EXIF信息")
    