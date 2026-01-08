from fastapi import APIRouter
from app.api.index import IndexHandler
from app.api.user import UserHandler
from app.api.admin.storage import StorageHandler
from app.api.upload import UploadHandler
from app.api.admin.sys_option import SysOptionHandler
from app.api.admin.image import ImageHandler
from app.api.album import AlbumHandler
from app.api.admin.delete_image import DeleteImageHandler
from app.api.user_config import UserConfigHandler
from app.api.admin.subscription import SubscriptionHandler
from app.api.admin.plan import PlanHandler
from app.api.pay import PayHandler
from app.api.admin.order import OrderHandler
from app.api.html import HtmlHandler
from app.api.test import TestHandler

index_handler = IndexHandler()
user_handler = UserHandler()
storage_handler = StorageHandler()
upload_handler = UploadHandler()
sys_option_handler = SysOptionHandler()
image_handler = ImageHandler()
album_handler = AlbumHandler()
delete_image_handler = DeleteImageHandler()
user_config_handler = UserConfigHandler()
subscription_handler = SubscriptionHandler()
plan_handler = PlanHandler()
pay_handler = PayHandler()
order_handler = OrderHandler()
html_andler = HtmlHandler()
test_handler = TestHandler()
router = APIRouter()

router.get("/test/en")(test_handler.en)
router.get("/test/de")(sys_option_handler.get_license_info)

# 用户请求邮箱验证码
router.post("/api/get_email_code")(user_handler.get_email_code)
# 用户注册
router.post("/api/register")(user_handler.register)
# 用户邮箱登录
router.post("/api/email_login")(user_handler.email_login)
# 用户重置密码
router.post("/api/reset_password")(user_handler.reset_password)
# 用户获取图形验证码
router.get("/api/captcha")(user_handler.captcha)
# 获取套餐列表
router.get("/api/get_plans")(plan_handler.get_available_plans)
# 支付回调通知
router.get("/api/pay/notify")(pay_handler.notify)
router.post("/api/pay/notify")(pay_handler.notify)
# 管理员初始化
router.post("/api/init_admin")(user_handler.init_admin)
# 获取站点信息
router.get("/api/site_info")(sys_option_handler.get_site_info)
'''
管理员相关API
'''
# 添加存储或更新存储
router.post("/api/admin/add_storage")(storage_handler.add_storage)
# 获取存储列表
router.get("/api/admin/list_storages")(storage_handler.list_storages)
# 添加或更新系统选项
router.post("/api/admin/set_sys_option")(sys_option_handler.set_api)
# 获取系统选项
router.get("/api/admin/get_sys_option")(sys_option_handler.get_api)
# 管理员获取图片列表
router.post("/api/admin/image_list")(image_handler.admin_image_list)
# 批量删除图片
router.post("/api/admin/delete_images")(delete_image_handler.delete_images)
# 获取用户列表
router.post("/api/admin/user_list")(user_handler.user_list)
# 获取删除列表
router.post("/api/admin/delete_list")(delete_image_handler.delete_list)
# 更新删除列表状态
router.post("/api/admin/update_delete_status")(delete_image_handler.update_delete_status)
# 获取用户设置
router.get("/api/admin/get_user_config")(user_config_handler.admin_get_user_config)
# 更新用户设置
router.post("/api/admin/update_user_config")(user_config_handler.admin_update_user_config)
# 修改用户状态
router.post("/api/admin/set_user_status")(user_handler.set_user_status)
# 获取订阅列表
router.post("/api/admin/subscription_list")(subscription_handler.get_subscription_list)
# 更新订阅
router.post("/api/admin/update_subscription")(subscription_handler.update_subscription)
# 获取套餐列表
router.get("/api/admin/get_plans")(plan_handler.get_plans)
# 添加或更新套餐
router.post("/api/admin/set_plan")(plan_handler.set_plan)
# 获取订单列表
router.post("/api/admin/order_list")(order_handler.get_all_orders)
# 清理订单
router.post("/api/admin/clear_orders")(order_handler.clear_orders)
# 获取授权信息
router.get("/api/admin/get_license")(sys_option_handler.get_license_info)
# 保存授权信息
router.post("/api/admin/save_license")(sys_option_handler.save_license_info)
# 移除授权信息
router.post("/api/admin/remove_license")(sys_option_handler.remove_license_info)
'''管理员相关API END'''


# 测试上传
router.post("/api/user/upload")(upload_handler.upload)

# 前端页面
router.get("/")(html_andler.home)
router.get("/user/{name:path}")(html_andler.home)
router.get("/dashboard/{name:path}")(html_andler.home)
router.get("/account/{name:path}")(html_andler.home)
router.get("/upload")(html_andler.home)
router.get("/pricing")(html_andler.home)
router.get("/pay/success")(html_andler.home)

'''
用户相关API
'''
# 检查用户是否登录
router.get("/api/user/is_login")(user_handler.is_login)
# 创建相册
router.post("/api/user/create_album")(album_handler.create_album)
# 获取相册列表
router.get("/api/user/album_list")(album_handler.get_album_list)
# 更新相册
router.post("/api/user/update_album")(album_handler.update_album)
# 删除相册
router.post("/api/user/delete_album")(album_handler.delete_album)
router.get("/api/testdel")(upload_handler.testdel)
# 用户下单
router.post("/api/user/create_order")(pay_handler.create_order)
# 获取用户信息
router.get("/api/user/info")(user_handler.get_user_info)
# 获取订阅信息
router.get("/api/user/subscription")(subscription_handler.get_own_sub)
# 获取订单列表
router.get("/api/user/order_list")(order_handler.get_user_orders)
# 获取图片列表
router.post("/api/user/image_list")(image_handler.user_image_list)
# 批量删除图片
router.post("/api/user/delete_images")(delete_image_handler.delete_images)
# 用户修改密码
router.post("/api/user/change_password")(user_handler.change_password)
# 用户退出登录
router.get("/api/user/logout")(user_handler.logout)
# 用户获取所有可设置的存储域名
router.get("/api/user/storage_domains")(storage_handler.user_storage_domains)
# 获取自身配置
router.get("/api/user/get_own_config")(user_config_handler.user_get_own_config)
# 用户更新自身配置
router.post("/api/user/update_own_config")(user_config_handler.user_update_own_config)
# 导出表格数据
router.post("/api/user/export_images")(image_handler.export_image_xlsx)