const http = require('http')
const url = require('url')
const fs = require('fs')

let server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html;charset=UTF8"})
  let path = null,
    get = {},
    post = {}

  if (request.method === 'GET') {
    let { pathname, query } = url.parse(request.url, true)
    path = pathname
    get = query
    console.log(path)
    complete()
  } else {
    // POST请求
    let arr = []


  }
  function complete(){
    if (path === 'register'){
      console.log('注册')
    } else if(path === 'login'){
      console.log('登录')
    } else {
      let url = request.url
      fs.readFile(`client${url}.html`, (err, buffer) => {
        if (err) {
          response.write('没有这个页面')
          response.end()
        } else {
          response.write(buffer);
          response.end()
        }
      })
    }

  }

})

server.listen(3000)