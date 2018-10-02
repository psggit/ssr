const express = require('express'),
app = express();

app.use((req, res, next) => {
  //console.log("request", req)
  //console.log("response", res)
  if(req) 
  next()
})
app.get('/',(request,response)=>{
  response.send('Hello world');
});

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

//Binding the server to a port(3000)
app.listen(3000,()=>console.log('express server started at port 300'));