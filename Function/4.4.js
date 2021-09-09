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

function average(array){
    //I declare a variable tampon for add all my number
    let sum = 0;
    let avg = 0;
    //for all the cell of the array I will add every number
    for(let i = 0; i< array.length; i++){
        sum += array[i];
    }
    //I divise the sum by the number of cells in the array
    avg = sum / array.length;
    return avg;
}

function min(array){
    //I apply math.min in my array to find the min number
    return Math.min.apply(Math,array);
}

function max(array){
    //I apply math.max in my array to find the max number 
    return Math.max.apply(Math,array);
}

let userArray = multiRand(n);

console.log(average(userArray));
console.log(min(userArray));
console.log(max(userArray));