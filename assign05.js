//Gunnar Martin
//CS290
//Winter 2015
//Assign05: GET and POST checker

//call and start the express module
var express = require('express');
var app = express();

//call and connect body parser for post requests
var bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: false })); //form data from URLs
app.use(bodyParser.json()); //json data

//call and build handlebars
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

//set handlebars engine
app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');

//GET request
app.get('/', function(req,res){
	
	//declare empty array for query string
	var qsArray = [];
	
	//fill array with query params
	for (var p in req.query){
		
		//fill array with objects
		qsArray.push({'field':p,'data-value':req.query[p]})
	}
	
	//set up object to pass and set qsArray
	var obj = {};
	obj.qsArray = qsArray;
	obj.reqType = "GET";
	res.render('assign05.handlebars',obj);
	
});

//POST
app.post('/', function(req,res){
	
	//declare empty array
	var qsArray = [];
	
	//fill array with query params
	for (var p in req.query){
		
		//fill array with objects
		qsArray.push({'field':p,'data-value':req.query[p]})
	}
	
	//declare empty array
	var pdArray = [];
	
	//fill array with body data
	for (var p in req.body){
		
		//fill array with objects
		pdArray.push({'field':p,'data-value':req.body[p]})
	}
	
	//set up object to pass and set qsArray
	var obj = {};
	obj.qsArray = qsArray;
	obj.pdArray = pdArray;
	obj.reqType = "POST";
	obj.postParams = "Posted Fields and Values";
	res.render('assign05.handlebars',obj);
	
});

//catch not found
app.use(function(req,res){
  
	res.status(404);

	res.type('text/plain');
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