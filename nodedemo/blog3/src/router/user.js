const handleUserRouter = ((req, res) => {
  if (req.method === 'POST' && req.path === '/api/user/login') {
    return {
      msg: '登录下'
    }
  }
})
module.exports = handleUserRouter