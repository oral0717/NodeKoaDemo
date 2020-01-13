const Koa = require('koa')
const Router = require('koa-router')
const ejs = require('koa-ejs')
const path = require('path')
const config = require('./config')
const static = require('koa-static')
const body = require('koa-bodyparser')
const error = require('./middleware/error');

const app = new Koa()
const router = new Router()
app.use(error)
app.use(body())

ejs(app,{
  root:path.resolve(__dirname,'template'),
  layout:false,
  viewExt:'ejs',
  cache:false,
  debug:false
})

app.context.config = config
app.context.db = require('./libs/database')

router.get('/data', async ctx => {
  let data = await ctx.db.query('SELECT id,user,password FROM admin')
  ctx.body = data
})

router.use('/admin',require('./router/admin'))

app.use(static(path.resolve(__dirname, './public')))
app.use(router.routes())
app.listen(3000)




