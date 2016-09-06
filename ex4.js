var fs = require('fs');
var str = undefined;

function read(callback) {
	fs.readFile(process.argv[2],'utf8', function doneReading(err, data) {
		str = data.split("\n").length - 1;
		callback();
	});
}

function logLines() {
	console.log(str);
} 

read(logLines);	