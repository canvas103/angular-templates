
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
//res.render('index.html');
//res.send("Hurry ! We have Node With Express running..");
});


// respond with "Hello World!" on the homepage
app.get('/employees', function (req, res) {
  res.send({ "employees":[
	{
	  "name":"Raj",
	   "age": 31,
	   "class":"JQuery, AngularJS",
	   "address":"1234 Stevens street, San Jose, CA"
	}
	,
	{
	  "name":"Mr Kumar",
	   "age": 23,
	   "class":"JAVA, SQL",
	   "address":"21212 london street, San Jose, CA"
	}
	,
	{
	  "name":"Mike Smith",
	   "age": 28,
	   "class":"C++, AngularJS, HTML5, CSS3",
	   "address":"22 will wood street, Santa Clara, CA"
	}
		]
   });
});


app.listen(1336, function(){
console.log('Ready on port 1336');
});


/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
*/