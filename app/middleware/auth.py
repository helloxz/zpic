from app.utils.redis import get_redis_client
from fastapi import Request, HTTPException
from app.utils.helper import show_json
from typing import Callable
from fastapi.responses import JSONResponse
from app.utils.verify import is_valid_token

# 统一认证中间件
async def auth(request: Request, call_next: Callable):
    # 获取请求路径
    path = request.url.path
    # 只对 /api/admin和/api/user开头的路径进行鉴权
    if not path.startswith("/api/admin") and not path.startswith("/api/user"):
        return await call_next(request)

    # 获取请求头中的token
    auth = request.headers.get("Authorization")
    if not auth:
        
        return JSONResponse(status_code=401, content={"code": 401, "msg": "The token is invalid."})
    
    # token的格式是Bearer xxx
    parts = auth.split()
    if len(parts) != 2 or parts[0].lower() != "bearer":
        return JSONResponse(status_code=401, content={"code": 401, "msg": "The token is invalid."})
    token = parts[1]
    # 验证token格式是否合法
    if not is_valid_token(token):
        # print("here")
        return JSONResponse(status_code=401, content={"code": 401, "msg": "The token is invalid."})
    
    redis = await get_redis_client()
    key = f"auth:session:{token}"
    # 从redis中取出对应的token
    value = await redis.get(key)
    # 不存在token
    if not value:
        return JSONResponse(status_code=401, content={"code": 401, "msg": "The token is invalid."})
    
    # 解析value中的json字符串
    import json
    try:
        session_data = json.loads(value)
    except json.JSONDecodeError:
        return JSONResponse(status_code=401, content={"code": 401, "msg": "The token is invalid."})
    
    uid = session_data.get("uid")
    role = session_data.get("role")
    # 如果不存在uid或role
    if not uid or not role:
        return JSONResponse(status_code=401, content={"code": 401, "msg": "The token is invalid."})
    # 如果路由包括/api/admin，则必须是管理员角色
    if path.startswith("/api/admin") and role != "admin":
        return JSONResponse(status_code=403, content={"code": 403, "msg": "You do not have permission to access this resource."})
    # request.state中保存用户信息，方便后续使用
    request.state.uid = uid
    request.state.role = role
    # 鉴权通过，放行
    response = await call_next(request)
    return response
