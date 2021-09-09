const readLine = require("readline-sync");
function AskTvSeries(){
    let Sname = readLine.question("What's the name of your favorite serie? ");
    let date = readLine.question("When that serie start? ");
    let cast = []
    let numOfActor = readLine.question("How many actor of that serie did you know? ");
    for(let i = 0; i<numOfActor; i++){
        cast.push(readLine.question("Who are in the cast? "));
    }
    const mySerie = {
        name : Sname,
        dateDeProd : date,
        cast : cast
    };
    return mySerie;
}

console.log(JSON.stringify(AskTvSeries()));
