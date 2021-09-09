const readline = require("readline-sync");
let min = parseInt(readline.question("Enter a number min. "));
let max = parseInt(readline.question("Enter a number max. "));
let current = parseInt(readline.question("Enter a current number. "));
if(current > min && current < max){
    console.log("Congrat ! You can read an exercice!");
}
else{
    console.log("Sorry it seems that you don't understand that exercice...");
}