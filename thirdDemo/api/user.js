const Router = require('koa-router')
const md5 = require('md5-node')

const router = new Router()

router.get('/index', ctx => {
  ctx.body = {
    message: '接口首页'
  }
})
// 注册接口
router.post('/register',async ctx=>{
  // 前端拿到用户名和密码后，去与数据库里的匹配是否存在，若在，则不注册，否则进行入库操作
  let { username, password } = ctx.request.body
  console.log(username,password)
  password = md5(password)

  let data = await ctx.db.query(`SELECT user FROM admin WHERE user = '${username}' AND password = '${password} LIMIT 1'`)
  console.log(data)
})
module.exports = router.routes()