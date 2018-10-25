var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){
  console.log('request was made from: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name:'William',
    job: 'Biologist',
    age: 24
  };
  //convert to json format and send to client
  res.end(JSON.stringify(myObj));
});

//sepecify port for request
server.listen(3000, '127.0.0.1');
console.log('Server now listening on port 3000');
