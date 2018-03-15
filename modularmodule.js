let fs = require('fs');
let path = require('path');

module.exports = function (dirName, extString, callback) {
    fs.readdir(dirName, (err, files) => {
        if (err) {
           return callback(err);
        }
        const ls = files.filter(file => {
            return path.extname(file) === '.' + extString;
        });
        return callback(null, ls);
    });
}