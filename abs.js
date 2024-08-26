function isPositive(num){
    if (num > 0)  {
        return true;
    } else {
        return false;
    }
}

function abs(num){
    if (num < 0){
       return (num = -num);
    } else {
        return num;
    }
}

// console.log(isPositive(-1));
// console.log(isPositive(7));
// console.log(abs(-5));
// console.log(abs(10));