const http = require('http')
const serverHandler = require('../app.js')

const PORT = 8888
const server = http.createServer(serverHandler)
server.listen(PORT, ()=>{
  console.log(`you are listenning to ${PORT}`)
})
