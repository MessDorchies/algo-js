function factorial(a){
    let count = 0;
    let firstnumber = 1;
    let secondnumber = 1;
    let lastnumber = 0;

    while(count < a){
        firstnumber *= secondnumber;
        lastnumber = secondnumber;
        secondnumber ++;
        count++;
    }

    return firstnumber;
}

console.log(factorial(12));