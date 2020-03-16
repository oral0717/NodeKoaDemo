## nvm安装node, 多node版本可以切换
1. brew install nvm // brew是os的软件管理工具
2. nvm list // 查看当前所有node版本
3. nvm install v10.13.0 // 安装指定的版本
4. nvm use --delete-prefix 10.13.0 // 切换到指定node版本

## commonjs模块化，nodejs中默认的模块化规范
  npm init
  npm i lodash --save // nodejs中比较常用的工具库，类似前端的underscore
## nodejs debugger调试
  利用vscode的debugger工具
## server 与 前端开发的区别
  1. 服务稳定性
  2. 考虑内存和cpu(优化)
  3. 日志记录
  4. 安全
  5. 集群和服务拆分
  以上几点将如何在nodejs中解决？？
# 项目开始
  1. 目标：博客项目， 只开发server端，不关心前端，使用三种方式开发: 原生，express, koa
  2. 需求：
    首页，作者主页，博客详情页
    登录页
    管理中心，新建页，编辑页
  3. 技术方案
    数据如何存储
    如何与前端对接，即接口设计
## http请求概述，当浏览器地址栏里输入url地址以后发生了什么
  1. 浏览器进行DNS解析，建立tcp连接（三次握手），发送http请求；（DNS解析：域名解析成ip地址及端口   ）
  2. serve接受请求，处理数据，并返回数据
  3. 浏览器接受到数据，处理数据，渲染页面，执行js
## nodejs处理http请求
  1. get请求和querystring
  2. post请求和postdata
  3. 路由
## nodejs处理get请求
  1. get请求，即客户端要向server端获取数据，如查询博客列表
  2. 通过querystring来传递数据，如a.html?a=100&b=200
  3. 浏览器直接访问，就发送get请求
  const querystring = require('querystring')
  req.method // GET
  req.url
  res.writeHead()
  req.query = querystring.parse(url.split('?')[1]) // url = req.url
  res.end()
## nodejs处理post请求
  1. post请求，即客户端要像服务端传递数据，如新建博客
  2. 通过post data传递数据
  3. 浏览器无法模拟，使用postman
  req.method // POST
  req.headers['content-type']
  req.on('data',()=>{})
  req.on('end',()=>{})
## 搭建开发项目，不用框架
  1. cross-env设置环境变量， 兼容mac linux和window
  2. npm init -y // -y即yes,在init时候省去了敲回车的步骤，生成默认的package.json
## P4-4开发接口
  1. 初始化路由
  2.










