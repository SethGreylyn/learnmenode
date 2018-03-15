const mod = require('./modularmodule');

const fileDir = process.argv[2];
const filter = process.argv[3];
const displayFilteredList = (err, data) => {
    if (err) {
        console.error(err);
    }
    data.forEach(element => {
        console.log(element);
    });
}

mod(fileDir, filter, displayFilteredList);