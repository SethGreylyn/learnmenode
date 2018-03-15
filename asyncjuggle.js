const http = require('http');

const firstUrl = process.argv[2];
const secondUrl = process.argv[3];
const thirdUrl = process.argv[4];

let firstResults = '';
let secondResults = '';
let thirdResults = '';

let firstBack = false;
let secondBack = false;
let thirdBack = false;

function onEnd() {
    if (firstBack && secondBack && thirdBack) {
        console.log(firstResults);
        console.log(secondResults);
        console.log(thirdResults);
    }
}

http.get(firstUrl, res => {
    res.on('data', chunk => {
        firstResults += chunk.toString();
    });
    res.on('end', () => {
        firstBack = true;
        onEnd();
    });
});

http.get(secondUrl, res => {
    res.on('data', chunk => {
        secondResults += chunk.toString();
    });
    res.on('end', () => {
        secondBack = true;
        onEnd();
    });
});

http.get(thirdUrl, res => {
    res.on('data', chunk => {
        thirdResults += chunk.toString();
    });
    res.on('end', () => {
        thirdBack = true;
        onEnd();
    });
});