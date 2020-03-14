// 处理post请求
const http = require('http')

const server = http.createServer((req, res)=>{
  console.log(req)
  if(req.method === 'POST'){
    console.log('content-type', req.headers['content-type'])
    let postData = ''
    req.on('data', chunk =>{
      postData+=chunk.toString()
    })
    req.on('end',()=>{
      console.log(postData)
      res.end('hello world')
    })
  }
})
server.listen(3000, ()=>{
  console.log('监听成功')
})



