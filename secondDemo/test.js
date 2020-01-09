// 初级demo文件
const Koa = require('koa')
const Router = require('koa-router')
// koa是去调用各种中间件去实现功能
// axios 发送请求
const axios = require('axios')

const app = new Koa()
const router = new Router()

router.get('/user', ctx => {
  ctx.body = '用户中心'
})

// 实际开发中，中间件是个匿名函数，中间件的作用是实现某种功能
// koa只可以指向第一个中间件，下面的中间件需要手动next()指向执行
// next()指向下一个中间件
// app.use((ctx, next)=>{
//   console.log('我是第1个中间件')
//   next()
// })
// app.use((ctx, next)=>{
//   console.log('我是第2个中间件')
//   next()
// })
// app.use((ctx, next)=>{
//   console.log('我是第3个中间件')
//   next();
// })

// 执行结果1342，洋葱模型,当遇到中间件错误或没有next()时，到达洋葱中心，然后返回继续执行
// app.use((ctx,next)=>{
//   console.log(1)
//   next()
//   console.log(2)
// })
// app.use((ctx,next)=>{
//   console.log(3)
//   next()
//   console.log(4)
// })

// app.use(router.routes())//启动路由

// async,await作用管理异步功能
// await功能1：求值
// await功能2：阻塞线程（阻塞线程的有读取资源，文件，http,操作数据库）
app.use(async (ctx, next)=>{
  let a = await axios.get('https://api.github.com/users/github')
  console.log(a)
})
app.listen(3000,()=>{
  console.log('The Server is running in port 3000')
})

// 中间件是一个函数,实现