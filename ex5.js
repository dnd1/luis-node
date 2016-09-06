var fs = require('fs');
var files = undefined;

fs.readdir(process.argv[2], function read(err, list) {
	if (err) return console.error(err);
	for (var i = 0; i < list.length; i++) {
		if (list[i].split('.'+process.argv[3]).length > 1) {
			console.log(list[i]);
		}
	}
});