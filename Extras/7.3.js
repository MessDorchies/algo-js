const readLine = require("readline-sync");
function AllDivider(){
    let number = parseInt(readLine.question("Enter a number "));
    let alldivider = [];
    let divider = 2;
    while(divider<number){
        if(Number.isInteger(number/divider)){
            alldivider.push(divider);
        }
        divider++;
    }
    if(alldivider.length === 0){
        console.log("This number is prime");
    }
    return alldivider;
}
console.log(AllDivider());
