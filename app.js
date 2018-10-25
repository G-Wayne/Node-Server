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

//adding a dynamic route
app.get('/profile/:name', function(req, res){
  res.send('You requested to see a profile with the name of ' + req.params.name);
});


//listen to port
app.listen(3000);
