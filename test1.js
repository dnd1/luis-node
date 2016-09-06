//var array = console.log(process.argv);
/*
var array = process.argv;
var suma = 0;
for (var i = 2; i < array.length; i++) {
	suma += +array[i];
}
console.log(suma);
*/

/*
var fs = require('fs');
var content = fs.readFileSync(process.argv[2]);
var str = content.toString();
var result = str.split("\n").length - 1;
console.log(result);
*/

/*
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
*/

/*
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
*/

/*
var mymodule = require('./moduletest.js');

function logArray(err, array) {
	for (var i = 0; i < array.length; i ++) {
		console.log(array[i]);
	}
}

mymodule(process.argv[2], process.argv[3], logArray);
*/


/*
var h = require('http');

var request = h.get(process.argv[2], function resp(response) {
	response.setEncoding('utf8');
	response.on("data", function (data) {
		console.log(data);
	})
	response.on("error", console.error);
})
*/

/*
var http = require('http');
var bl = require('bl');

var request = http.get(process.argv[2], function resp (response) {
	//response.setEncoding('utf8');
	response.pipe(bl(function (err, data) {
		console.log(data.toString().length);
		console.log(data.toString());
	}))
})
*/

/*
var http = require('http');
var bl = require('bl');

function logRequest3() {
	http.get(process.argv[4], function (response) {
		//if (err)
		//	return console.error(err)
		response.pipe(bl(function (err, data) {
			results[2] = (data.toString());
			console.log(data.toString())
		}))
	})
}

function logRequest2(callback) {
	http.get(process.argv[3], function (response) {
		//if (err)
		//	return console.error(err)
		response.pipe(bl(function (err, data) {
			results[1] = (data.toString());
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
			results[0] = (data.toString());
			console.log(data.toString())
			callback1(callback2)
		}))
	})
}

logRequest1(logRequest2, logRequest3)
//alternative: *//*
var http = require('http')  
     var bl = require('bl')  
     var results = []  
     var count = 0  
       
     function printResults () {  
       for (var i = 0; i < 3; i++)  
         console.log(results[i])  
     }  
       
     function httpGet (index) {  
       http.get(process.argv[2 + index], function (response) {  
         response.pipe(bl(function (err, data) {  
           if (err)  
             return console.error(err)  
       
           results[index] = data.toString()  
           count++  
       
           if (count == 3)  
             printResults()  
         }))  
       })  
     }  
       
     for (var i = 0; i < 3; i++)  
       httpGet(i)
*/

/*
var net = require('net') 
var strftime = require('strftime')

var server = net.createServer(function (socket) {
	var date = strftime('%Y-%m-%d %H:%M\n')
	socket.end(date)
})

server.listen(process.argv[2])
*/


/*
var http = require('http') 
var fs = require('fs')

var server = http.createServer(function (req, res) {
	fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(process.argv[2])
*/

/*
var http = require('http') 
var fs = require('fs')

var server = http.createServer(function (req, res) {
	if (req.method != 'POST')  
         return res.end('send me a POST\n') 

	var map = require('through2-map')
	req.pipe(map (function (chunk) {
		return chunk.toString().toUpperCase()
	})).pipe(res)
})

server.listen(process.argv[2])
*/

/*
var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
	if (req.method != 'GET')  
         return res.end('send me a GET\n') 

	res.writeHead(200, { 'Content-Type': 'application/json' })
	var obj = url.parse(req.url, true)
	var time = obj.query.iso
	
	if (obj.pathname === '/api/parsetime') {
		var array = time.split('T')
		array = array[1].split('.')
		array = array[0].split(':')
		var json = JSON.stringify({
			hour: +array[0]-4, minute: +array[1], second: +array[2]
		})
		res.end(json)
	}
	if (obj.pathname === '/api/unixtime') {
		var date = new Date(time)
		var epoch = date.getTime()
		var json = JSON.stringify({unixtime: epoch})
		res.end(json)
	}
	
	//res.end('ok')
})

server.listen(process.argv[2])
*/ /* solucion bonita

var http = require('http')  
     var url = require('url')  
       
     function parsetime (time) {  
       return {  
         hour: time.getHours(),  
         minute: time.getMinutes(),  
         second: time.getSeconds()  
       }  
     }  
       
     function unixtime (time) {  
       return { unixtime : time.getTime() }  
     }  
       
     var server = http.createServer(function (req, res) {  
       var parsedUrl = url.parse(req.url, true)  
       var time = new Date(parsedUrl.query.iso)  
       var result  
       
       if (/^\/api\/parsetime/.test(req.url))  
         result = parsetime(time)  
       else if (/^\/api\/unixtime/.test(req.url))  
         result = unixtime(time)  
       
       if (result) {  
         res.writeHead(200, { 'Content-Type': 'application/json' })  
         res.end(JSON.stringify(result))  
       } else {  
         res.writeHead(404)  
         res.end()  
       }  
     })  
     server.listen(Number(process.argv[2])) 

*/




