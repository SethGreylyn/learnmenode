//console.log(process.argv);
const arr = process.argv.slice(2);
let sum = 0;
arr.forEach(element => {
    const num = parseInt(element);
    if (isNaN(num)) {
        throw new Error(element + ' is not a number!');
    }
    sum += num;
});
console.log(sum);
