var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){
  console.log('request was made from: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');//without uf8 it will just give buffer data
  //can only pipe from a reable stream
  myReadStream.pipe(res);// res obj is a writeable stream
  // res.end('Hello World');
});

//sepecify port for request
server.listen(3000, '127.0.0.1');
console.log('Server now listening on port 3000');
