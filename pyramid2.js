//Number pyramid.
const prompt = require('prompt-sync')();

let n = prompt("Enter the number of rows: ");

let space = n - 1;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
        process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write(i + " ");
    }
    process.stdout.write("\n");
    space--;
}
