const http = require('http')
const url = require('url')
const fs = require('fs')
const querystring = require('querystring')

let server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html;charset=UTF8"})
  let path = null,
    get = {},
    post = {}
  let { pathname, query } = url.parse(request.url, true)
  path = pathname

  if (request.method === 'GET') {
    get = query
    complete()
  } else if(request.method === 'POST'){
    // POST请求
    let arr = []

    request.on('data', (data) => {
      arr.push(data);
    })

    request.on('end', () => {
      let buffer = Buffer.concat(arr);
      post = querystring.parse(buffer.toString());
      complete();
    })
  }
  function complete(){
    if (path === '/register'){
      console.log('注册')
    } else if(path === '/login'){
      console.log('登录')
    } else {
      let url = request.url

      fs.readFile(`client${url}`, (err, buffer) => {
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