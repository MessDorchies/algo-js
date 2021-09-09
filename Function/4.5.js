function calcDistance(x1, y1, x2, y2){

    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}

console.log(calcDistance(1,1,2,2));
console.log(calcDistance(-2,2,2,-2));