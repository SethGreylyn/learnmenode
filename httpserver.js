const fs = require('fs');
const http = require('http');

const port = process.argv[2];
const fileDir = process.argv[3];
const server = http.createServer((req, resp) => {
    const src = fs.createReadStream(fileDir);
    src.pipe(resp);
});

server.listen(port);