function api(app){
  return ()=>{
    app.get('/getapi',(req,res)=>{
      var data = {name:'tongyuxing',age: 18}
      res.send(data);
    })
  }
}

module.exports.api = api;
