let evenNumberWithForLoop = [];
let evenNumberWithWhileLoop = [];
let iterator = 1;
for(let i=100; i>0; i-=2){

    if(i % 2 === 0){

        evenNumberWithForLoop.push(i);
    
    }
};
while( iterator <= 100){
    if(iterator % 2 === 0){
        evenNumberWithWhileLoop.push(iterator);
    }
    iterator++;
}
console.log(evenNumberWithWhileLoop);
console.log(evenNumberWithForLoop);