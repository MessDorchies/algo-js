const readlineSync = require("readline-sync");
let firstNumber = parseInt(readlineSync.question("Can you enter a number? "));
let secondNumber = parseInt(readlineSync.question("Can you enter a second number? "));
console.log(firstNumber%secondNumber);