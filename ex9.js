var http = require('http');
var bl = require('bl');

function logRequest3() {
	http.get(process.argv[4], function (response) {
		//if (err)
		//	return console.error(err)
		response.pipe(bl(function (err, data) {
			//results[2] = (data.toString());
			console.log(data.toString())
		}))
	})
}

function logRequest2(callback) {
	http.get(process.argv[3], function (response) {
		//if (err)
		//	return console.error(err)
		response.pipe(bl(function (err, data) {
			//results[1] = (data.toString());
			console.log(data.toString())
			callback()
		}))
	})
}

function logRequest1(callback1, callback2) {
	http.get(process.argv[2], function (response) {
		//if (err)
		//	return console.error(err)
		response.pipe(bl(function (err, data) {
			//results[0] = (data.toString());
			console.log(data.toString())
			callback1(callback2)
		}))
	})
}

logRequest1(logRequest2, logRequest3)