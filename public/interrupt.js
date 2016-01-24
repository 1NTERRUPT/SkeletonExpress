// Gogogo!
$(function(){
	var socket = io('http://localhost:3000');

	$('.red').on('click', function(e){
		e.preventDefault();
	});

	$('.green').on('click', function(e){
		e.preventDefault();
	});

	$('.blue').on('click', function(e){
		e.preventDefault();
	});

	//

	$('.status').on('click', function(e){
		e.preventDefault();
		socket.emit('getLightStatus');
	});

	socket.on('lightStatus', function (data) {
		console.log(data);
	});
});
