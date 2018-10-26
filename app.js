var express = require('express');

//setup express app
var app = express();

//set ejs as view engine
app.set('view engine', 'ejs');

//use middleware
app.use('/assets', express.static('static'));//map requests from /assets to folder assets
//respond to get request
app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
  res.render('contact');
});

//adding a dynamic route
app.get('/profile/:name', function(req, res){
  //render view
  var data = {age:26, job: 'Botanist', hobbies: ['cooking', 'swiming', 'dancing', 'singing']};
  res.render('profile',{person: req.params.name, data: data});//set property person to output object of profile
});


//listen to port
app.listen(3000);
