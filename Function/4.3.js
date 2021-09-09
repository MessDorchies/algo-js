const readLine = require("readline-sync");
let n = readLine.question("How much number do you want in your array? ");
function rand10(){
    return Math.floor(Math.random(1)*10);
}

function multiRand(n){
    //I declare a new array
    let array = [];
    let i = 0;
    //My function will push random number for n time
    while(i<n){
        array.push(rand10());
        i++;
    };
    //I return my array
    return array; 
}


console.log(multiRand(n));