var express = require('express');

//setup express app
var app = express();

//respond to get request
app.get('/', function(req, res){
  res.send('This is the homepage');
});

app.get('/contact', function(req, res){
  res.send('This is the contact page');
});


//listen to port
app.listen(3000);
