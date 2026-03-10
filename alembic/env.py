from logging.config import fileConfig

from sqlalchemy import engine_from_config
from sqlalchemy import pool
from sqlalchemy import create_engine

from alembic import context

# 这里是我增加的
from app.model.conn import Base
from app.model.conn import engine
from app.model.conn import SQLALCHEMY_DATABASE_URL
# 要导入的模型，以便识别，后续也需要添加
from app.model.album import AlbumModel
from app.model.deletion_queue import DeletionQueueModel
from app.model.image import ImageModel
from app.model.metainfo import MetaInfoModel
from app.model.order import OrderModel
from app.model.plan import PlanModel
from app.model.storage import StorageModel
from app.model.subscription import SubscriptionModel
from app.model.sys_option import SysOptionModel
from app.model.user_config import UserConfigModel
from app.model.user import UserModel
from app.model.login_log import LoginLogModel
from app.model.page import PageModel
from app.model.token import TokenModel
from app.model.redeem_code import RedeemCodeModel

# 强制转为同步 URL（如果原 URL 是 async 的）
sync_database_url = SQLALCHEMY_DATABASE_URL
if sync_database_url.startswith("postgresql+asyncpg://"):
    sync_database_url = sync_database_url.replace("postgresql+asyncpg://", "postgresql://")
elif sync_database_url.startswith("mysql+aiomysql://"):
    sync_database_url = sync_database_url.replace("mysql+aiomysql://", "mysql+pymysql://")

# this is the Alembic Config object, which provides
# access to the values within the .ini file in use.
config = context.config

# Interpret the config file for Python logging.
# This line sets up loggers basically.
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# add your model's MetaData object here
# for 'autogenerate' support
# from myapp import mymodel
# target_metadata = mymodel.Base.metadata
target_metadata = Base.metadata

# other values from the config, defined by the needs of env.py,
# can be acquired:
# my_important_option = config.get_main_option("my_important_option")
# ... etc.


def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode.

    This configures the context with just a URL
    and not an Engine, though an Engine is acceptable
    here as well.  By skipping the Engine creation
    we don't even need a DBAPI to be available.

    Calls to context.execute() here emit the given string to the
    script output.

    """
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


# def run_migrations_online() -> None:
#     """Run migrations in 'online' mode.

#     In this scenario we need to create an Engine
#     and associate a connection with the context.

#     """
#     connectable = engine_from_config(
#         config.get_section(config.config_ini_section, {}),
#         prefix="sqlalchemy.",
#         poolclass=pool.NullPool,
#     )

#     with connectable.connect() as connection:
#         context.configure(
#             connection=connection, target_metadata=target_metadata
#         )

#         with context.begin_transaction():
#             context.run_migrations()
def run_migrations_online() -> None:
    connectable = create_engine(sync_database_url, poolclass=pool.NullPool)

    with connectable.connect() as connection:  # 同步 with，没问题
        context.configure(
            connection=connection,
            target_metadata=target_metadata,
            compare_type=True,
            compare_server_default=True,
        )
        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
