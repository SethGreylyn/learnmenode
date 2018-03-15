const net = require('net');
const port = process.argv[2];

const dateElementFormat = (elem) => {
    let elstr = elem.toString();
    if (elstr.length < 2) {
        elstr = '0'+elstr;
    }
    return elstr;
};

const server = net.createServer((socket) => {
    const date = new Date();
    const year = dateElementFormat(date.getFullYear());
    const month = dateElementFormat(date.getMonth() + 1);
    const day = dateElementFormat(date.getDate());
    const hour = dateElementFormat(date.getHours());
    const minute = dateElementFormat(date.getMinutes());

    const dateString = `${year}-${month}-${day} ${hour}:${minute}`;
    socket.end(dateString+'\n');
});
server.listen(port);