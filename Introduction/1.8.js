const readline = require("readline-sync");

let myArray = [];

for(let i=0;i<3;i++){
    if(i==0){
        myArray.push(readline.question("What's the name of our protagoniste? "));
        console.log("Question remaining : 2");
    }
    else if(i==1){
        myArray.push(readline.question("Where does our protagoniste live ? "));
        console.log("Question remaining : 1");
    }
    else{
        myArray.push(readline.question("What's is his/her quest? "));
        console.log("Question remaining : 0");
    }
}

let story = "Once upon a time in " + myArray[1] + ", a hero know by the name of " + myArray[0] + ", was about to begin a journey for " + myArray[2] + "!";
console.log(story);
