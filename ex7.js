var h = require('http');

var request = h.get(process.argv[2], function resp(response) {
	response.setEncoding('utf8');
	response.on("data", function (data) {
		console.log(data);
	})
	response.on("error", console.error);
})