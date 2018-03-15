const http = require('http');

const url = process.argv[2];

let totalData = "";
let bitCount = 0;
http.get(url, (res) => {
    res.on("data", (data) => {
        bitCount += data.toString().length;
        totalData += data.toString();
    });
    res.on("end", () => {
        console.log(bitCount);
        console.log(totalData);
    });
});