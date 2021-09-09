//That just take the width and the length and return the multyplication...
function calcSurface(width, length){
    return width*length;
}
const readLine = require("readline-sync");
let myWidth = readLine.question("Enter the width of your rectangle ");
let mylength = readLine.question("Enter the length of your rectangle ");

console.log("The surface of your rectangle is " + calcSurface(myWidth,mylength)); 