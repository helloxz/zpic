from app.utils.helper import get_client_ip
from app.utils.redis import get_redis_client

# 统一返回相同的show_json结构
class APIException(Exception):
    def __init__(self, code: int, msg: str, data=None):
        self.code = code
        self.msg = msg
        self.data = data


# 每日通用限流设置
async def rate_base_limit(request,prefix:str,limit=5):
    # 获取客户端IP
    ip = get_client_ip(request)
    # 设置一个KEY，包含当前日期，这样就不用每天手动去清理
    from datetime import datetime
    date_str = datetime.now().strftime("%Y%m%d")
    redis_key = prefix + f"limit:{ip}:{date_str}"
    # 获取key的值，然后转为int判断
    redis_client = await get_redis_client()
    count = await redis_client.get(redis_key)
    # 如果存在，且大于等于limit，直接拦截
    if count and int(count) >= limit:
        return False
    
    # 否则，返回空响应，放行请求
    return True

# 指定前缀，次数安全+1
async def incr_base(request,prefix:str):
    ip = get_client_ip(request)
    from datetime import datetime, timedelta
    date_str = datetime.now().strftime("%Y%m%d")
    redis_key = prefix + f"limit:{ip}:{date_str}"
    redis_client = await get_redis_client()
    # 使用incr命令进行自增
    count = await redis_client.incr(redis_key)
    # 如果是第一次设置，设置过期时间为24小时
    if count == 1:
        await redis_client.expire(redis_key, timedelta(hours=24))
    return None

# 针对用户ID的每日通用限流，prefix中已经包含用户ID
async def rate_user_limit(prefix:str,limit=5):
    # 设置一个KEY，包含当前日期，这样就不用每天手动去清理
    from datetime import datetime
    date_str = datetime.now().strftime("%Y%m%d")
    redis_key = prefix + f"limit:{date_str}"
    # 获取key的值，然后转为int判断
    redis_client = await get_redis_client()
    count = await redis_client.get(redis_key)
    # 如果存在，且大于等于limit，直接拦截
    if count and int(count) >= limit:
        return False
    
    # 否则，返回空响应，放行请求
    return True

# 指定前缀，针对用户ID的次数安全+1
async def incr_user_limit(prefix:str):
    from datetime import datetime, timedelta
    date_str = datetime.now().strftime("%Y%m%d")
    redis_key = prefix + f"limit:{date_str}"
    redis_client = await get_redis_client()
    # 使用incr命令进行自增
    count = await redis_client.incr(redis_key)
    # 如果是第一次设置，设置过期时间为24小时
    if count == 1:
        await redis_client.expire(redis_key, timedelta(hours=24))
    return None

# 安全的上传限制
async def rate_upload_limit(uid: str, limit: int = 90) -> bool:
    from datetime import datetime, timezone
    """
    原子化每分钟限流：入口调用一次即可，无需再调 incr。
    返回 True 表示允许请求，False 表示超限。
    """
    # 生成带分钟时间戳的 key（UTC 时间，避免时区问题）
    minute = datetime.now(timezone.utc).strftime("%Y%m%d%H%M")
    redis_key = f"LIMIT:UPLOAD:{uid}:{minute}"
    
    redis_client = await get_redis_client()
    
    # 原子自增并获取新值
    new_count = await redis_client.incr(redis_key)
    
    # 首次访问时设置过期（70秒足够覆盖当前分钟+缓冲）
    if new_count == 1:
        await redis_client.expire(redis_key, 70)
    
    # 立即判断是否超限
    return new_count <= limit