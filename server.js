var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
    var path = request.url.replace(/\/?(\?.*)?$/, '');
    console.log(path);
    switch (path){
        case '': 
            getRes(response, '/public/home.html', 'text/html');
            break;
        case '/about':
            getRes(response, '/public/about.html', 'text/html');
            break;
        case './public/logo.jpg':
            getRes(response, '/public/logo,jpg', 'image/jpeg')
        default: 
            getRes(response, '404', 'text/html', 404);
    }
}).listen(3000);

function getRes(res, path, contentType, responseCode){
    fs.readFile(path, (err, data) => {
        if(err){
            res.writeHead(500, {'Content-type': 'text/plain'});
            res.end('500 - Internal Error');
        } else {
            if(!responseCode){
                res.writeHead(200, {'Content-type': contentType});
            } else {
                res.writeHead(responseCode, {'Content-type': contentType});
            }
            res.end(data);
        }
    })
}
console.log('Server started in localhost:3000; press "Ctrl-C" to terminating');
