var mymodule = require('./moduletest.js');

function logArray(err, array) {
	for (var i = 0; i < array.length; i ++) {
		console.log(array[i]);
	}
}

mymodule(process.argv[2], process.argv[3], logArray);