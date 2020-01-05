const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')

let server = http.createServer((request,response)=>{
  // 最简单的服务器
  // response.write('hello world')
  // response.end() // 结果返回给客户端，若没有会导致客户端一直等待

  // 处理静态资源
  request.url请求url
  let rurl = request.url
  console.log(`index${rurl}`)
  fs.readFile(`index${rurl}`, (err, buffer) => {
    if(err){
      response.write('The file is not found')
      response.end()
    } else {
      response.write(buffer)
      response.end()
    }
  })

  // 处理get请求
  let {path,query} = url.parse(request.url, true)
  console.log(path,query)

  // 处理post请求
  let arr = []//传递文件，如果是字符串，可以采用字符串拼接
  // request.on()响应一个事件
  request.on('data', (data)=>{
    arr.push(data)
    console.log(arr)
  })

  request.on('end',()=>{
    let buffer = Buffer.concat(arr)// post是分段传递，传递过来的是碎片，要组装；Buffer二进制数据流
    let post = querystring.parse(buffer.toString())//解析二进制数据流为对象
    console.log(post)
  })
})
server.listen(3000)