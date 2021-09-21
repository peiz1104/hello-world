var nodemon = require('nodemon');
var path = require('path');
var resolvePath = (realpath)=> path.join(__dirname,realpath);

var script = nodemon({
  script:resolvePath('./serve.js'),
  ignore:[],
  delay:100
})
script.on('start',function(){
  console.log('serve start')
})
script.on('restart',function(){
  console.log('serve restart')
})
script.on('exit',function(){
  console.log('serve exit')
})
script.on('quit',function(){
  console.log('serve quit')
})
script.on('error',function(){
  console.log('serve error')
})