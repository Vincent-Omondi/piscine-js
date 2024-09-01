function letterSpaceNumber(str){
    const regex = /[a-zA-Z] \d\b(?![a-zA-Z])/g;
    return str.match(regex) || [];
}

// console.log(letterSpaceNumber('example 1, example 20, example 2')); 