const readlineSync = require("readline-sync");
// let rl = readline.createInterface({
//     input : process.stdin,
//     output: process.stdout
// });
let firstName = readlineSync.question("What's your firstName? ");
let lastName = readlineSync.question("What's your lastName? ");
let city = readlineSync.question("Where do you live? ");
console.log("Your name is " + firstName + " " + lastName + " and you live in " + city);