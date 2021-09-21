var express = require('express')
// var {api} = require('./middleware')
var app = express()
app.get('/getapi',(req,res)=>{
  var data = {name:'tongyuxing',age: 18}
  var query = req.query.callback+`(${JSON.stringify(data)})` //jsonP
  // res.setHeader('Access-Control-Allow-Origin','*') // cors 解决跨域
  res.send(query);
})
app.listen(4002,()=>{
  console.log(`serve start port ${4002}`)
})