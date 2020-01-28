let fs = require('fs');
var http = require('http');
let server = http.createServer(function(req, res){
	fs.readFile('./index.html', function(error, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
		fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
	});
});

server.listen(8080);