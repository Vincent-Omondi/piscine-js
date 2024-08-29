function round(num) {
    const decimal = num - parseInt(num);
    if (num >= 0) {
        return decimal >= 0.5 ? parseInt(num) + 1 : parseInt(num);
    } else {
        return decimal <= -0.5 ? parseInt(num) - 1 : parseInt(num);
    }
}

function ceil(num) {
    const decimal = num - parseInt(num);
    return decimal > 0 ? parseInt(num) + 1 : parseInt(num);
}

function floor(num) {
    const decimal = num - parseInt(num);
    return decimal < 0 ? parseInt(num) - 1 : parseInt(num);
}

function trunc(num) {
    return num >= 0 ? parseInt(num) : -parseInt(-num);
}


// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log(nums.map(round));  
// console.log(nums.map(floor)); 
// console.log(nums.map(trunc));  
// console.log(nums.map(ceil));   