const readlineSync = require("readline-sync");
let n = parseInt(readlineSync.question("Enter a number "));
let sum = 0;
for(let i=0; i<n; i++){
    sum += parseInt(readlineSync.question("Enter a number "));
}
console.log(sum);