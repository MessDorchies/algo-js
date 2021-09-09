const readlineSync = require("readline-sync");
let shoeSize = parseFloat(readlineSync.question("Can you enter your shoes size? "));
let birthDate = parseInt(readlineSync.question("Can you enter your year of birth? "));
let newNumber = shoeSize *= 2;
newNumber += 5;
newNumber *= 50;
newNumber -= birthDate;
newNumber += 1766;
console.log(newNumber);