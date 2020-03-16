const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const serverHandler = (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF8')
  const url = req.url
  req.path = url.split('?')[0]

  const blogData = handleBlogRouter(req, res)
  if(blogData){
    res.end(
      JSON.stringify(blogData)
    )
    return
  }

  const userData = handleUserRouter(req, res)
  if(userData){
    res.end(
      JSON.stringify(userData)
    )
    return
  }

  res.writeHead(404, {'Content-type': 'text/plain;charset=UTF8'})
  res.write('404，没有找到页面')
  res.end()
}

module.exports = serverHandler