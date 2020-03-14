const http = require('http')

const server = http.createServer((req,res)=>{
  res.writeHead(200, {'content-type': 'text/html'})
  res.write('<h1>hello oralx</h1>')
  res.end()
})

server.listen(3000, ()=>{
  console.log('监听成功')
})





