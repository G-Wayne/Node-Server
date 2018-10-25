var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){
  console.log('request was made from: ' + req.url);
  if (req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if (req.url === '/api/employees') {
    var employees = [{name: 'Thomas', age: 25}, {name: 'Crystal', age: 33}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    //convert to json format and send to client
    res.end(JSON.stringify(employees));
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

//sepecify port for request
server.listen(3000, '127.0.0.1');
console.log('Server now listening on port 3000');
