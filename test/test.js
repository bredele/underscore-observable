var obs = require('../src/underscore-observable');

obs.emit('shit', 'do it');

obs.on('shit', function(msg){
	console.log(msg);
});

obs.on('shit', function(msg){
	console.log('again ' + msg);
});

obs.emit('shit', 'do it');

obs.emit('what', 'I said do it');