const readlineSync = require("readline-sync");
let dayOfTheWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let dayNumber = parseInt(readlineSync.question("Enter the number of this week day "));
dayNumber -=1;
console.log("So today we are " + dayOfTheWeek[dayNumber] + "!");

