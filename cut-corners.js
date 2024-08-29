function round(x) {
    if (x >= 0) {
        let floor = getFloor(x);
        return x >= floor + 0.5 ? floor + 1 : floor;
    } else {
        let floor = getFloor(x);
        return x <= floor - 0.5 ? floor - 1 : floor;
    }
}

function ceil(x) {
    let floor = getFloor(x);
    if (x >= 0) {
        return floor === x ? floor : floor + 1;
    } else {
        return floor;
    }
}


function floor(x) {
    let floor = getFloor(x);
    if (x >= 0) {
        return floor;
    } else {
        return floor === x ? floor : floor - 1;
    }
}

function trunc(x) {
    return getFloor(x);
}

function getFloor(x) {
    let floor = 0;
    if (x >= 0) {
        while (floor <= x) {
            if (floor + 1 > x) break;
            floor++;
        }
    } else {
        while (floor >= x) {
            if (floor - 1 < x) break;
            floor--;
        }
    }
    return floor;
}

// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log(nums.map(round));
// console.log(nums.map(floor));
// console.log(nums.map(trunc));
// console.log(nums.map(ceil));