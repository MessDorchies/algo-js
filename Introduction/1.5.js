const readlineSync = require("readline-sync");
let firstNumber = parseInt(readlineSync.question("Can you enter a decimal number? "));
let secondNumber = parseFloat(readlineSync.question("Can you enter a second decimal number? "));
console.log(firstNumber*secondNumber);
