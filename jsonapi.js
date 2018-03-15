const http = require('http');
const url = require('url');
const port = Number(process.argv[2]);

const parseTime = (iso) => {
    return {
        hour: iso.getHours(),
        minute: iso.getMinutes(),
        second: iso.getSeconds()
    };
};

const unixTime = (iso) => {
    return {
        unixtime: iso.getTime()
    }
};

const server = http.createServer((req, resp) => {
    const parsedReqData = url.parse(req.url, true);
    const isoDate = new Date(parsedReqData.query['iso']);
    if (parsedReqData.pathname === '/api/parsetime') {
        resp.writeHead(200, { 'Content-Type': 'application/json' });
        const parsedTime = parseTime(isoDate);
        resp.end(JSON.stringify(parsedTime));
    }
    if (parsedReqData.pathname === '/api/unixtime') {
        resp.writeHead(200, { 'Content-Type': 'application/json' });
        const unixedTime = unixTime(isoDate);
        resp.end(JSON.stringify(unixedTime));
    }

    resp.writeHead(404);
    resp.end();
});
server.listen(port);