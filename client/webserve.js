var express = require('express')
var path = require('path')
var app  = express()
var resolvePath = (realPath) => path.join(__dirname,realPath)
app.use(express.static(resolvePath('../client')))
app.listen(4001,()=>{
  console.log(`web serve listen port:${4001}`)
})
