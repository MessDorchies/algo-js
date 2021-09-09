let evenNumberDividedByTwo = [];
let oddNumberMultipliedByThree = [];
for(let i = 0; i<=100 ; i++){
    if( i % 2 === 0 ){
        evenNumberDividedByTwo.push(i/2);
    }
    else{
        oddNumberMultipliedByThree.push(i*3);
    }
}
console.log(evenNumberDividedByTwo);
console.log(oddNumberMultipliedByThree);