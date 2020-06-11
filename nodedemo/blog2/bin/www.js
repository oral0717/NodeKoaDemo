const http = require('http')
const serverHandle = require('../app.js')

const PORT = 8888

const server = http.createServer(serverHandle)
server.listen(PORT)