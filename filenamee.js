const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Data transferred using HTTP module");
    res.end();
});

server.listen(3000);