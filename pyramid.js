// Write a program to print the following pattern 1 to n numbers in a pyramid form.
const prompt = require('prompt-sync')();

// Taking input from user
const n = prompt('Enter the value of n: ');

// Printing the pattern
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j + " ");
    }
    process.stdout.write("\n");
}
