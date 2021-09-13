const readLine = require("readline-sync");
function GenerateFibonacciNumber(){
    let n = parseInt(readLine.question("How many fibonacci number do you want? "));
    let fibonacciTable = [];
    let firstNumber = 0;
    let secondNumber = 1;
    let thirdNumber = 0;
    for(let i = 0; i < n; i++){
        fibonacciTable.push(thirdNumber);
        firstNumber = secondNumber;
        secondNumber = thirdNumber;
        thirdNumber = firstNumber+secondNumber;
    }
    return fibonacciTable;

}
console.log(GenerateFibonacciNumber());