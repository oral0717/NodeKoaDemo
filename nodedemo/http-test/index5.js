// 处理路由请求
const http = require('http')
const server = http.createServer((req, res)=>{
  console.log(req.method)
  const url = req.url
  const path = url.split('?')[0]
  console.log(path) //没有域名的部分，默认/
})

server.listen(8000,()=>{
  console.log('listen 8000')
})



