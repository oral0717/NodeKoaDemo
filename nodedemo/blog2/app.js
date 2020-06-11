const serverHandle = (req, res) => {
  console.log('serverHandle')
  // 设置返回格式 JSON
  res.setHeader('Content-type', 'application/json')


}

module.exports = serverHandle