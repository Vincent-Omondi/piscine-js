function round(num) {
    if (num < 0) {
        return -trunc(-num + 0.5); 
    } else {
        return trunc(num + 0.5); 
    }
}

function floor(num) {
  
    if (num < 0 && num !== trunc(num)) {
        return trunc(num) - 1; 
    }
    return trunc(num); 
}

function trunc(num) {

    if (num < 0) {
        return -trunc(-num);
    }

    let intPart = 0;
    let multiplier = 1;

    while (num >= 1) {
        intPart += multiplier; 
        num -= 1;
    }

    return intPart;
}


function ceil(num) {
    if (num < 0) {
        return trunc(num); 
    } else {
        if (num !== trunc(num)) {
            return trunc(num) + 1; 
        }
    }
    return trunc(num);
}

// const nums = [3.7, -3.7, 3.1, -3.1];

// console.log(nums.map(round)); // [ 4, -4, 3, -3 ]
// console.log(nums.map(floor)); // [ 3, -4, 3, -4 ]
// console.log(nums.map(trunc)); // [ 3, -3, 3, -3 ]
// console.log(nums.map(ceil));  // [ 4, -3, 4, -3 ]