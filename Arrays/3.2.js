let myfirstArray = [1, 2, 3, 4, 5];
let mysecondArray = [100, 101, 102];

function AvgArray(array){
    let sum = 0;
    let avg = 0;
    for(let i = 0; i< array.length; i++){
        sum += array[i];
    }
    avg = sum / array.length;
    return avg;
}
console.log(AvgArray(myfirstArray));
console.log(AvgArray(mysecondArray));