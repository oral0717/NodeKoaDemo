// 20200103
// 运行于服务端的js运行平台，是对v8引擎的封装
// 作为中间层
// 做小型服务
// 构建自动化工具，webpack

// 便于前端入手，性能好，利于与前端代码整合

// node自带npm: node package manage
// yarn安装(取代npm)比较快,npm i -g yarn全局安装yarn
// cnpm也快
// 镜像，类似拷贝
// nodemon 热启动
// node基于事件驱动，内部有主线程维持事件循环，非阻塞IO（得益于node事件循环机制）,是单线程的
// 服务端部署：nginx + PM2

// node index.js运行js文件
// node http.js启动服务器，成功后可以打开浏览器localhost:3000
// control+c 停止服务器

// 服务器，处理请求，处理静态资源
// fs模块，系统模块，专门读取文件
// http模块，系统模块
// url系统模块，解析处理URL
// url.parse('string', true)
// get数据在url上，数据小
// post数据在body里，数据庞大，在node中可以分段传送

// 作业：firstExercise文件夹,听课代码firstDemo
// 用原生js实现服务端，支持get,post,处理静态资源
// koa的安装和基本使用
// 作业提交邮箱

// 20200105
// 中间件
// 洋葱模型
// koa模板ejx

// 中间件：函数,实现某个特定功能的插件；
// 特点：封装了一些处理完整时间的功能函数；非内置的中间件要安装后require进来；封装了一些或许复杂但是很通用的功能
// app.use()注册中间件，中间件是个匿名函数
// async,await处理异步
// await作用：求值
let a = await 100*100
console.log(a) // 10000

// axios，发送请求的包
axios.get(api)

// 监听程序运行时间
console.time('time1')
{程序语句}
console.timeEnd('time1')

// node.js后台，可以访问数据库
// navicat数据库软件

// 项目里路由要单独独立出一个文件

// Linux命令之 touch命令用于修改文件或者目录的时间属性，包括存取时间和更改时间。若文件不存在，系统会建立一个新的文件。
// ls -l 可以显示档案的时间记录。

// config.js里放自己的配置信息，如数据库连接信息

// koa-static koa中处理静态资源的包（中间件）
// koa-ejs koa中处理html模板引擎ejs的包
// koa-bodyparser koa解析post数据
// path,处理路径
// mysql包，
// co-mysql包，

// 操作数据库，在路由里写

// smarty模板引擎

// 作业：
// 1.完成error中间件
// 2.完成登录功能

// 20200107
// api接口实现注册
// 中间层
// 现代web架构分析

// 使用 REST Client插件(类似postman)测试接口，相关测试文件：.http;
// 中间层可以将后端给的接口结果再包一层，将结果再丰富一下给前台
