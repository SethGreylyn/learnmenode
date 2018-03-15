let fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
    if (err) {
        throw err;
    }
    const strArr = data.toString().split('\n');
    console.log(strArr.length - 1); // The test file doesn't end with a newline, so splitting overcounts by 1.
});