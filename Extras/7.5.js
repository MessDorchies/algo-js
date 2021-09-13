function SortArray(array){
    let temp = 0;
    for(let i = 0; i < array.length ; i++) {
        for(let j = 0; j < array.length ; j++){
            if(array[i] < array[j]){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    };
    return array;
}
let arraytest1 = [2,5,3,8,4,6];
let arraytest2 = [12,65,3,95,41,75,32,118,2];
console.log(SortArray(arraytest1));
console.log(SortArray(arraytest2));