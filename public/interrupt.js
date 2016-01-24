// Gogogo!
$(function(){
	var socket = io('http://localhost:3000');

	//
	$('.status').on('click', function(e){
		e.preventDefault();
		socket.emit('getLightStatus');
	});

	//
	$('.lightA').on('click', function(e){
		e.preventDefault();
		socket.emit('lightTransition', 'A');
	});

	$('.lightB').on('click', function(e){
		e.preventDefault();
		socket.emit('lightTransition', 'B');
	});

	//
	$('.setAGreen').on('click', function(e){
		e.preventDefault();
		socket.emit('lightSet', ['A', 'green']);
	});

	$('.setAYellow').on('click', function(e){
		e.preventDefault();
		socket.emit('lightSet', ['A', 'yellow']);
	});

	$('.setARed').on('click', function(e){
		e.preventDefault();
		socket.emit('lightSet', ['A', 'red']);
	});

	$('.setBGreen').on('click', function(e){
		e.preventDefault();
		socket.emit('lightSet', ['B', 'green']);
	});

	$('.setBYellow').on('click', function(e){
		e.preventDefault();
		socket.emit('lightSet', ['B', 'yellow']);
	});

	$('.setBRed').on('click', function(e){
		e.preventDefault();
		socket.emit('lightSet', ['B', 'red']);
	});

	//
	socket.on('lightStatus', function (data) {
		var message = 'Light A is ' + data[0] + '; light B is ' + data[1];
		$('.message').html(message);
	});
});
