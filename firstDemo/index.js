const fs = require('fs')

fs.readFile('./data/name.json', (err, data) => {
  if(!err){
    setTimeout(()=>{
      console.log('我要等3秒后执行')
    }, 3000)
    console.log(data.toString())
  }
})
console.log('我是最后执行')