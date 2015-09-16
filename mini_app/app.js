var express = require('express'),
   login = require('./routes/login');

var app = express();

var counter = 0;

// create a route
app.get('/login', function (req, res) {
	counter = 1;
 res.send('login');
});

var checkUser = function(req, res, next){
	console.log('...');
	//next();
	if (counter === 0)
		res.redirect('/login')
	else{
		next();
	}
};

app.get('/ships',
	checkUser,  
	function (req, res) {
		console.log('***');
 		res.send('ships');
});

app.get('/logout', function (req, res) {
	counter = 0;
 	res.send('logout');
});

//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port);

});