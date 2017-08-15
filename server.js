var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, { 'Content-type': 'text/plain'});
    response.end('Hello world');
}).listen(3000);
console.log('Server started in localhost:3000; press "Ctrl-C" to terminating');
