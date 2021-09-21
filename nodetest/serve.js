var http = require('http')
var url = require('url')
var path = require('path')
var fs = require('fs')
var resolvePath = (realpath) => path.join(__dirname,realpath)
http.createServer(function(req,res){
  var urlObj = url.parse(req.url,true)
  if(req.url!=='/favicon.ico'){
   console.log(urlObj)
  }else if(req.method=='GET'&&urlObj.pathname==='/favicon.ico'){
    var Favicon = resolvePath('./favicon.ico')
    res.setHeader('Content-type','image/x-icon')
    fs.createReadStream(Favicon).pipe(res)
  }
  res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
  res.write("<head><meta charset='UTF-8'></head>")
  if(Object.keys(urlObj.query).length){
    res.write(`<h2>姓名： ${urlObj.query.name}；年龄：${urlObj.query.age}</h2>`)
  }
  res.write('<h3>你好 佟雨兴</h3>')
  res.write('<h2>node.js</h2>')
  res.end()
}).listen(3005,()=>{
  console.log(`serve start port 3005`)
})