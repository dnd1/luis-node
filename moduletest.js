module.exports = function (dir, filext, callback) {
	var fs = require('fs');
	fs.readdir(dir, function read(err, data) {
		if (err) return callback(err);
		var array = [];
		for (var i = 0; i < data.length; i++) {
			if (data[i].split('.'+filext).length > 1) {
				array.push(data[i]);
			}
		}
		callback(null, array);
	});
}