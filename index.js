// Dependencies
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Replace the contents of this function with, you, know, a poll to the 'duino
function pollLightStatus(){
	console.log('Polling light status from hardware...');
	return ['red', 'green'];
}

// Replace the contents of this function with code that interacts with the 'duino
function transitionLight(whichLight){
	console.log('Transitioning light status of light ' + whichLight);
}

// Express configuration
app.set('view engine', 'jade');

// 3rd party middlewares
app.use('/static', express.static('bower_components/'));
app.use('/static', express.static('public/'));

// Our wares
app.get('/', function(req, res){
	res.render('index', {});
});

io.on('connection', function(socket){
	socket.on('getLightStatus', function(){
		socket.emit('lightStatus', pollLightStatus());
	});

	socket.on('lightTransition', function(data){
		transitionLight(data);
	});
});

// Gogogo!
server.listen(3000, function(){
	console.log('Listening on port 3000');
});
