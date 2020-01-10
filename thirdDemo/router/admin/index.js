// 存放路由信息
const Router = require('koa-router')
const router = new Router();
// 处理数据的中间件
const md5 = require('md5-node')
const error = require('../../middleware/error')

router.use(error)
router.get('/login',async ctx=>{
  ctx.body = '登录'
  // 有可能渲染不成功，用await
  await ctx.render('admin/login',{
    URL_PATH: ctx.config.URL_PATH
  })
})

router.post('/login',async ctx=>{
  // ctx.body='登录逻辑'
  let { username, password } = ctx.request.body
  // console.log(username,password)
  // 前端传过来用户名和密码后，接下来后台把用户名和密码放到数据库里去匹配，如果查询结果存在，那用户名和密码有效
  // 处理密码
console.log(username,password)
  password = md5(password)
  let data = await ctx.db.query(`SELECT user,password FROM admin WHERE user = '${username}' AND password = '${password}' LIMIT 1`)
  console.log(data)
  if (data.length > 0) {
    ctx.body = '登录成功'
  } else {
    ctx.body = '登录失败'
  }
})
module.exports = router.routes()