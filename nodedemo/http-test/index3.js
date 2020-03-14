// 处理get请求
const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req,res)=>{
  const url = req.url
  req.query = querystring.parse(url.split('?')[1])
  res.writeHead(200, {'content-type': 'text/html'})
  res.end(JSON.stringify(req.query))
})

server.listen(3000, ()=>{
  console.log('监听成功')
})





