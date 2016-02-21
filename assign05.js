
//call and start the express module
var express = require('express');
var app = express();

//call and connect body parser
var bodyParser = require('body-parser'); 
app.use(bodyParser.json())

//http://stackoverflow.com/questions/24543847/req-body-empty-on-posts
app.use(bodyParser.urlencoded({extended: false}));

//GET
app.get('/', function(req,res){
	
	//message console
	console.log("I received a GET request.");
	
	//res.writeHead(200, { "Content-Type": "text/plain" });
	//res.end("hello! It's me.");
	res.send("This was a GET.");
	
});

//POST
app.post('/', function(req,res){
	
	
	//message console
	console.log("I received a POST request.");
	
	res.send("This was a POST. Data was posted.");

	
	
});

//catch not found
app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
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