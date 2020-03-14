const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res)=>{
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  const query = querystring.parse(url.split('?')[1])

  // 设置返回格式为JSON
  res.setHeader('Content-type', 'application/json')
  // 返回的数据
  const resData = {
    method,
    url,
    path,
    query
  }

  // 返回
  if (method === 'GET') {
    res.end(
      JSON.stringify(resData)
    )
  }

  if (method === 'POST') {
    let postData = ''
    // 监听传递数据
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    // 监听数据传递完毕，自动执行
    req.on('end', () => {
      resData.postData = postData
      res.end(JSON.stringify(resData))
    })
  }
})

server.listen(4000, ()=>{
  console.log('监听端口4000成功')
})