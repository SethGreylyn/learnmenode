let fs = require('fs');

const filePath = process.argv[2];
const strArr = fs.readFileSync(filePath).toString().split('\n');
console.log(strArr.length - 1); // The test file does not end with a newline, so splitting overcounts by 1.