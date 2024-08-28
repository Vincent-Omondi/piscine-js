function multiply(a, b){
    let result = 0;

    for (let i=0; i < Math.abs(b); i++){
        result = result + a;
    }
    return b < 0 ? -result : result;
}

function divide(a,b){
    if (b==0){
        throw new Error("No division by 0")
    }

    let result = 0;
    let sum = 0;

    while (Math.abs(a) >= (sum + Math.abs(b))) {
        sum += Math.abs(b);
        result++;
    }

    return (a < 0 && b > 0) || (a > 0 && b < 0) ? -result : result;
}

function modulo(a, b) {
    if (b === 0) {
        throw new Error("No division by 0"); 
    }

    const quotient = divide(a, b);
    return a - multiply(quotient, b);
}


// console.log(multiply(3,-4))
// console.log(divide(24,6))
// console.log(modulo(9,-4))