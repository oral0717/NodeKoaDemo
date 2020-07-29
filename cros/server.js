let express = require('express')
let app = express()

// cors
var allowCross = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*") // 源
  res.header("Access-Control-Allow-Methods", "*") // GET put delete post
  res.header("Access-Control-Allow-Headers", "*") // token
  next();
}
app.use(allowCross)
app.get('/api/user', (req, res)=>{
  res.json({name: 'xx'})
})

app.get('/user', (req, res)=>{
  res.json({name: 'yy'})
})
app.listen(3000, ()=>{
  console.log('sucess to 3000')
})