function trunc(num) {
    if (num < 0) {
        return -trunc(-num);
    }

    let result = 0;
    let power = 1;

    while (power * 10 <= num) {
        power *= 10;
    }

    while (power >= 1) {
        while (result + power <= num) {
            result += power;
        }
        power /= 10;
    }

    return result;
}

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