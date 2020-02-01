const Router = require('koa-router')
const md5 = require('md5-node')
const axios = require('axios')
const querystring = require('querystring')
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
  // console.log(username,password)
  password = md5(password)

  let data = await ctx.db.query(`SELECT user FROM admin WHERE user = '${username}' AND password = '${password}' LIMIT 1`)

  if(data.length > 0 && data.user ){
    return ctx.body = {
      code: 100,
      message: '用户名已经存在'
    }
  }

  // 注册操作
  let rst = await ctx.db.query(`INSERT INTO admin VALUES (0,'${username}','${password}')`)
  // console.log(rst)
  if (rst.affectedRows > 0){
    ctx.body = {
      code: 200,
      message:'注册成功'
    }
  }
})

// 中间层,包装下返回的接口，使得接口可读性更强，对前端更友好
router.post('/reg', async ctx =>{
  let {username,password} = ctx.request.body
  console.log(username,password)
  if(!username || !password){
    return ctx.body = {
      code:3,
      message:'请输入用户名和密码'
    }
  }

  let {data} = await axios({
    url: "http://106.54.210.212/api/v1/user/register.php",
    method:"post",
    data:{
      username,
      password
    },
    transformRequest:[
      data =>{
        return querystring.stringify(data)
      }
    ]
  })

  if (data.code === 0) {
    return ctx.body = {
      code: 0,
      message: '用户名已经存在'
    }
  }

  if (data.code === 1) {
    return ctx.body = {
      code: 1,
      message: '注册成功'
    }
  }

})



module.exports = router.routes()
