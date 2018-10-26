var express = require('express');

//setup express app
var app = express();

//set ejs as view engine
app.set('view engine', 'ejs');

//respond to get request
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});

//adding a dynamic route
app.get('/profile/:name', function(req, res){
  //render view
  var data = {age:26, job: 'Botanist'};
  res.render('profile',{person: req.params.name, data: data});//set property person to output object of profile
});


//listen to port
app.listen(3000);
