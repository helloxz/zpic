# AGENTS.md - ZPIC 图片托管平台

## 项目概述

ZPIC 是一个基于 FastAPI（Python）后端 + Vue.js 3（TypeScript）前端的图片托管平台。使用 PostgreSQL 数据库、Redis 缓存，包含用户管理、订阅、图片上传处理、支付集成等功能。

---

## 构建、代码检查和测试命令

### 后端 (Python)

```bash
# 安装依赖
python3 -m venv myenv
source myenv/bin/activate
pip install -r app/requirements.txt

# 运行开发服务器
bash run.sh dev

# 运行生产服务器
bash run.sh

# 数据库迁移
alembic revision --autogenerate -m "migration description"
alembic upgrade head

# 自定义 workers 数量运行
WORKERS=4 bash run.sh
```

### 前端 (Vue.js 3 + TypeScript)

```bash
cd frontend

# 安装依赖（优先使用 pnpm）
pnpm install

# 开发服务器
pnpm dev

# 类型检查
pnpm type-check

# 生产构建
pnpm build

# 预览生产构建
pnpm preview
```

### 测试

**目前未配置测试框架。** 后续如需添加测试：
- Python: 使用 `pytest` + `pytest-asyncio` 处理异步代码
- 前端: 使用 `vitest` 或 `jest`

---

## 代码风格指南

### Python 后端

#### 导入顺序
- 标准库导入放最前
- 第三方库导入放第二
- 本地应用导入放第三
- 每组之间用空行分隔
- 每组内按字母顺序排序

```python
# 正确顺序
from datetime import datetime, timedelta
from ipaddress import ip_address, IPv4Address

from fastapi import Request, Header
from sqlalchemy import select, func

from app.model.user import UserModel
from app.utils.helper import show_json
```

#### 命名规范
- **文件**: snake_case（如 `user_config.py`, `helper.py`）
- **类**: PascalCase，API 类以 `Handler` 结尾，数据库模型以 `Model` 结尾
  - 示例: `UserHandler`, `UserModel`, `SubscriptionModel`
- **函数/变量**: snake_case
- **常量**: UPPER_SNAKE_CASE

#### 类型注解
- 使用 Python 3.12+ 语法，用 `| None` 而非 `Optional[]`
- 使用 `Mapped[type]` 和 `mapped_column()` 定义 SQLAlchemy 模型

```python
from sqlalchemy.orm import Mapped, mapped_column

class UserModel(Base):
    __tablename__ = "zp_user"
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    email: Mapped[str | None] = mapped_column(String(100))
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
```

#### 错误处理
- 使用自定义错误码配合 i18n key
- 使用 `show_json(code, message, data=None)` 返回 JSON 响应

```python
from app.utils.helper import show_json

# 成功响应
return show_json(200, "success", data={"uid": uid})

# 错误响应
return show_json(-1000, "user.not.found")
```

#### 异步编程
- 所有数据库操作必须使用 `async with get_db() as db:`
- 使用 `await db.scalar()`, `await db.execute()` 等

```python
async with get_db() as db:
    result = await db.execute(select(UserModel).where(UserModel.uid == uid))
    user = result.scalar_one_or_none()
```

#### 数据库模型
- 所有模型继承 `app.model.conn` 中的 `Base`
- 使用 `__table_args__` 设置表级选项（如注释）
- 使用 `comment` 参数为列添加注释

```python
class ImageModel(Base):
    __tablename__ = "zp_image"
    __table_args__ = {"comment": "图片表"}
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True, comment="主键ID")
```

### 前端 (Vue.js 3 + TypeScript)

#### 目录结构
```
src/
├── components/     # 可复用组件
│   ├── account/
│   ├── dashboard/
│   └── adsense/
├── views/          # 页面组件（路由视图）
├── stores/         # Pinia 状态管理
├── router/         # Vue Router 配置
├── utils/          # 工具函数
├── types/          # TypeScript 类型定义
├── i18n/           # 国际化
└── assets/         # 静态资源
```

#### 组件命名
- 文件名使用 PascalCase：`UserSettings.vue`、`ImageUpload.vue`
- 子目录中的组件使用 `@/` 别名导入

#### Script Setup 语法
所有 Vue 组件使用 `<script setup lang="ts">`：

```vue
<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useMessage, type FormInst, type FormRules } from 'naive-ui';
import req from '@/utils/req';
import { useUserStore } from '@/stores/user';

const router = useRouter();
const message = useMessage();
const userStore = useUserStore();
</script>
```

#### TypeScript
- 为响应式表单和 API 响应定义类型
- 使用 TypeScript 严格模式
- 对象类型优先用 `interface`，联合类型/别名用 `type`

```typescript
interface LoginForm {
  email: string;
  password: string;
  captchaValue: string;
}

interface ApiResponse<T = any> {
  code: number;
  msg: string;
  data: T;
}
```

#### API 请求
使用统一的 `req` 工具（axios 封装）：

```typescript
import req from '@/utils/req';

const { data } = await req.get('/api/user/info');
const response = await req.post('/api/upload', formData);
```

后端响应格式：
{
  "code":200,
  "msg":"",
  "data":""
}

* code:200视为成功，其余一律为失败
* msg：错误消息
* data：可变，可能为[]{}或字符串

#### 样式
- Vue 组件使用 scoped CSS
- 遵循 `开发文档.md` 中的配色方案：
  - 主色: `#3b82f6`
  - 导航栏背景: `#1e293b`
  - 卡片边框: `1px solid #e2e8f0`
  - 圆角: `8px`

#### 国际化
- 使用 `vue-i18n`
- 通过 `useI18n()` hook 访问
- key 使用点号分隔的描述性命名

```typescript
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
message.error(t('login.failed'));
```

---

## 常见模式

### Redis Key 命名（来自 `开发文档.md`）
- `email:code:{email}` - 邮箱验证码
- `email:code`（前缀）- 邮箱验证码每日限制次数
- `auth:session:{token}` - 用户 token 会话
- `SYS:OPTION:{key}` - 系统设置
- `USER:CONFIG:{uid}` - 用户设置
- `USER:UPLOAD:DAILY:{uid}:{date}` - 用户每日上传数量限制

### 中间件取值
- `request.state.uid` - 当前用户 ID
- `request.state.role` - 当前用户角色（user/admin）

### 日志
使用自定义 logger：

```python
from app.utils.logger import logger

logger.info(f"用户 {uid} 登录成功")
logger.error(f"上传失败: {e}")
```

---

## 开发流程

1. **新建 API 端点**: 在 `app/api/filename.py` 中添加 handler（类名以 `Handler` 结尾）
2. **新建数据库模型**: 在 `app/model/filename.py` 中添加（类名以 `Model` 结尾）
3. **运行数据库迁移**: 模型变更后
   ```bash
   alembic revision --autogenerate -m "add new field"
   alembic upgrade head
   ```
4. **前端组件**: 添加到对应的 `frontend/src/components/` 或 `frontend/src/views/` 目录

---

## 注意事项

- 目前无正式测试套件，无需编写测试
- 未配置 linter，请遵循现有代码风格
- 项目使用 `loguru` 记录日志
- 数据库使用 SQLAlchemy 2.0 异步支持
- 前端使用 Naive UI 组件库
