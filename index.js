// Dependencies
var express = require('express');
var app = express();

// Express configuration
app.set('view engine', 'jade');

// 3rd party middlewares
app.use('/static', express.static('bower_components/'));
app.use('/static', express.static('public/'));

// Our wares
app.get('/', function(req, res){
	res.render('index', {});
});

// Gogogo!
app.listen(3000, function(){
	console.log('Listening on port 3000');
});
