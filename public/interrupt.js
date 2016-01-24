// Gogogo!
$(function(){
	var socket = io('http://localhost:3000');

	$('.lightA').on('click', function(e){
		e.preventDefault();
		socket.emit('lightTransition', 'A');
	});

	$('.lightB').on('click', function(e){
		e.preventDefault();
		socket.emit('lightTransition', 'B');
	});

	$('.status').on('click', function(e){
		e.preventDefault();
		socket.emit('getLightStatus');
	});

	socket.on('lightStatus', function (data) {
		console.log(data);
	});
});
