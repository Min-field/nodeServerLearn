var http = require('http');

http.createServer(function(request, response){
    var path = request.url.replace(/\/?(\?.*)?$/, '');
    console.log(path);
    switch (path){
        case '': 
            getRes(response, 'home');
            break;
        case '/about':
            getRes(response, 'about');
            break;
        case '/404':
            getRes(response, '404');
            break;
        default: 
            getRes(response, '404');
    }
}).listen(3000);

function getRes(res, str){
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end(str);
}
console.log('Server started in localhost:3000; press "Ctrl-C" to terminating');
