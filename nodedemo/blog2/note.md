# 搭建博客技术方案
1. 数据存储
  博客数据
  用户数据
2. 接口设计
  博客列表 /api/blog/list    get
  博客详情 /api/blog/detail  get
  新增  /api/blog/new     post
  更新  /api/blog/update  post
  删除  /api/blog/del    post
  登录  /api/user/login  post

# 开发接口，用原生node api(不用框架)
1. nodejs处理http请求
  ### 浏览器输入URL到显示页面的过程：
    1. DNS解析，建立TCP链接，发送http请求；(DNS解析成一个IP地址，IP地址对应一台服务器，建立客户端与服务端的TCP链接)
    2. server接收到http请求，处理，并返回；
    3. 客户端接收到返回数据，处理数据（如渲染页面，执行js)；
2. 搭建开发环境
3. 开发接口（暂不连接数据库，暂不考虑登录）

# nodejs处理http请求
1. get请求和querystring
2. post请求和postdata
3. 路由
  nodejs处理路由


















