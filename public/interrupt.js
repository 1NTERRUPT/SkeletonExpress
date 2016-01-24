$(function(){
	console.log('Interrupt js loaded');

	$('.red').on('click', function(e){
		e.preventDefault();
	});

	$('.green').on('click', function(e){
		e.preventDefault();
	});

	$('.blue').on('click', function(e){
		e.preventDefault();
	});
});