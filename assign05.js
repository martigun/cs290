
//call and start the express module
var express = require('express');
var app = express();

//call and connect body parser
var bodyParser = require('body-parser'); 
app.use(bodyParser.json())

//call and build handlebars
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

//set handlebars engine
app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');


//http://stackoverflow.com/questions/24543847/req-body-empty-on-posts
app.use(bodyParser.urlencoded({extended: false}));

//GET
app.get('/', function(req,res){
	
	//message console
	console.log("I received a GET request.");
	
	//res.type("text/plain");
	//res.send("This was a GET.");
	
	res.render('get.handlebars');
	
});

//POST
app.post('/', function(req,res){
	
	
	//message console
	console.log("I received a POST request.");
	
	//res.type("text/plain");
	//res.send("This was a POST. Data was posted.");
	
	res.render('post.handlebars');

	
	
});

//catch not found
app.use(function(req,res){
  
  res.status(404);
  
  //res.type('text/plain');
  //res.send('404 - Not Found');
  
  res.render('post.handlebars');
});


//catch error
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});


//listen on port
console.log("Listening on port 3100...");
app.listen(3100);