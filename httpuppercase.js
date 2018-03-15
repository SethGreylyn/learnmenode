const fs = require('fs');
const http = require('http');
const port = Number(process.argv[2]);

const server = http.createServer((req, resp) => {

});

server.listen(port);