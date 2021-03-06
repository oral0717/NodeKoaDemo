const handlerBlogRouter = require('./src/router/blog')
const handlerUserRouter = require('./src/router/user')

const serverHandler = (req, res) => {
  // const method = req.method
  const url = req.url
  req.path = url.split('?')[0]
  // 设置返回格式
  res.setHeader('Content-type', 'application/json')
  console.log(req.headers.origin)
  res.setHeader('Access-Control-Allow-Origin', 'req.headers.origin');//注意这里不能使用 *
  res.setHeader('Access-Control-Allow-Credentials', true);//告诉客户端可以在HTTP请求中带上Cookie
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');


  const blogData = handlerBlogRouter(req, res)
  if (blogData) {
    res.end(
      JSON.stringify(blogData)
    )
    return
  }

  const userData = handlerUserRouter(req, res)
  if (userData) {
    res.end(
      JSON.stringify(userData)
    )
    return
  }

  // 未命中路由处理
  res.writeHead(404, {"Content-type": "text/plain"})
  res.write("404 not found")
  res.end()
}

module.exports = serverHandler