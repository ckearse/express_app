const express = require('express');
const fs =require('fs');
const app = express();

app.get('/', function(req, res){
  fs.readFile('index.html', 'utf8', function(err, contents){
    res.writeHead(200, {'content_type': '.html'});
    res.write(contents);
    res.end();
  })
}).listen(7777, function(){
  console.log('Express app listening on server 7777');
});