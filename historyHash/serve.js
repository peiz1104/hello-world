var express = require('express')
var path = require('path')
var app  = express()
var resolvePath = (realPath) => path.join(__dirname,realPath)
app.use(express.static(resolvePath('../historyHash')))
app.get('/apage',(req,res)=>{
  console.log(res,req)
  res.redirect('./index.html')
})
app.listen(4002,()=>{
  console.log(`web serve listen port:${4002}`)
})
