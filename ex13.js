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