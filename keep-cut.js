function cutFirst(str){
    return str.slice(2);
}

function cutLast(str){
    return str.slice(0, -2);
}

function cutFirstLast(str){
    return str.slice(2, -2);
}

function keepFirst(str){
    return str.slice(0, 2);
}

function keepLast(str){
    return str.slice(-2);
}

function keepFirstLast(str){
    return str.slice(0, 2) + str.slice(-2);
}

// console.log(cutFirst('awesome'))
// console.log(cutLast('awesome'))
// console.log(cutFirstLast('awesome'))
// console.log(keepFirst('awesome'))
// console.log(keepLast('awesome'))
// console.log(keepFirstLast('awesome'))


