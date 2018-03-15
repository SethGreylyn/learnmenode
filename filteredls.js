const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const filter = '.' + process.argv[3];

fs.readdir(filePath, (err, files) => {
    if (err) {
        throw err;
    }
    files.forEach(file => {
        if (path.extname(file) === filter) {
            console.log(file);
        }
    });
});