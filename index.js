// Dependencies
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// SerialPort handling
/*
var serialPort = require('serialport');
serialPort.list(function(err, ports){
	ports.forEach(function(port){
		console.log(port.comName);
		console.log(port.pnpId);
		console.log(port.manufacturer);
	});
});
*/

// var SerialPort = require('serialport').SerialPort;
// var cereal = new SerialPort('', {
// 	baudrate: 57600
// });

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
	socket.emit('lol', {lol: 'lol'});
})

// Gogogo!
server.listen(3000, function(){
	console.log('Listening on port 3000');
});
