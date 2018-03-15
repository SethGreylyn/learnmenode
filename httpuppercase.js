const fs = require('fs');
const http = require('http');
const map = require('through2-map');
const port = Number(process.argv[2]);

const server = http.createServer((req, resp) => {
    if (req.method !== 'POST') {
        return resp.end('Could not handle non-POST request');
    }
    req.pipe(map(chunk => {
        return chunk.toString().toUpperCase()
    })).pipe(resp);
});

server.listen(port);