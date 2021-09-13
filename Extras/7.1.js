const readLine = require("readline-sync");
function GuessGame(){
    let number = Math.floor(Math.random() * 101);
    let numberDiscovered = false;
    let numberOfTry = 1;
    while(!numberDiscovered){
        let numberGuess = parseInt(readLine.question("Guess the number "));
        if(number === numberGuess){
            if(numberOfTry === 1){
                console.log("Congrat you had it first try !");
            }
            else{
                console.log("Congrat that's the number !");
            }
            numberDiscovered = true;
        }
        else if(number < numberGuess){
            console.log("Too hight try again !");
            numberOfTry++;
        }
        else{
            console.log("too low try again !");
            numberOfTry++;
        }
    }
    return console.log("You guessed it in " + numberOfTry + " try.");
}
console.log(GuessGame());
