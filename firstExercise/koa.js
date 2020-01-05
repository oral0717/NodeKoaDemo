const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
router.get('/user', ctx => {
  ctx.body = '这是个用户页面啦'
})

app.use(router.routes())
app.listen(4000)