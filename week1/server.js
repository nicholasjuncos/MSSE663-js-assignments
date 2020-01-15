let http = require('http');

function serve(req, res) {
    let body = 'Hello World!';

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': body.length
    });

    res.end(body);
}

let server = http.createServer(serve);
server.listen(8000);

console.log('Running server...');
