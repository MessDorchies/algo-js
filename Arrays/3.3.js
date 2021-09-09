let myArray = [1,2,3,4];

function DuplicateArray(array){
    let duplicate = [];
    array.forEach(element => {
        duplicate.push(element);
    });
    return duplicate;
}
console.log(DuplicateArray(myArray));