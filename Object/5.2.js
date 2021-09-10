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


function RandomizeCast(AskTvSeries){
    let series = AskTvSeries();
    for(let i = series.cast.length -1; i > 0 ; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let tampon = series.cast[i];
        series.cast[i] = series.cast[j];
        series.cast[j] = tampon;
    }
    return series;
}


// console.log(JSON.stringify(mySerie));
console.log(JSON.stringify(RandomizeCast(AskTvSeries)));