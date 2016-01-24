var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.use('/static', express.static('bower_components/'));
app.use('/static', express.static('public/'));

app.get('/', function(req, res){
	res.render('index', {});
});

app.listen(3000, function(){
	console.log('Listening on port 3000');
});
