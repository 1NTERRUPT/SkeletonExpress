// Gogogo!
$(function(){
	$('.red').on('click', function(e){
		e.preventDefault();
	});

	$('.green').on('click', function(e){
		e.preventDefault();
	});

	$('.blue').on('click', function(e){
		e.preventDefault();
	});

	var socket = io('http://localhost:3000');

	socket.on('lol', function (data) {
		console.log(data);
	});
});
