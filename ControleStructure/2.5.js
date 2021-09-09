const readlineSync = require("readline-sync");
let favNumber = parseInt(readlineSync.question("Enter your favorite number "));
while(favNumber != 42 ){
    console.log("Are you sure ?");
    favNumber = parseInt(readlineSync.question("Enter your favorite number "));
}