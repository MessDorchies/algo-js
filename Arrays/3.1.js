let firstArray = [1, 2, 3, 4, 5];
let secondArray = [100, 101, 102];

function ArraySum(array){
    let sum = 0;
    for(let i=0; i< array.length; i++){
    sum += array[i]
    }
    return sum;
}
console.log(ArraySum(firstArray));
console.log(ArraySum(secondArray));

