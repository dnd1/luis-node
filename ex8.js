var http = require('http');
var bl = require('bl');

var request = http.get(process.argv[2], function resp (response) {
	//response.setEncoding('utf8');
	response.pipe(bl(function (err, data) {
		console.log(data.toString().length);
		console.log(data.toString());
	}))
})