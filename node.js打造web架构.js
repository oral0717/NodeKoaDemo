import { Http2ServerRequest } from "http2";

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



// 作业：
// 用原生js实现服务端，支持get,post,处理静态资源
// koa的安装和基本使用
// 作业提交邮箱







