const adder = (numbers, initial = 0) =>{
    return numbers.reduce((sum, num) => sum+num, initial);
}

const sumOrMul = (numbers, initial = 0) =>{
    return numbers.reduce((result, num) => {
        return num %2 === 0 ? result*num : result + num;
    }, initial);
}

const funcExec = (functions, initial = null) => {
    return functions.reduce((result, func) => {
        return func(result);
    }, initial);
};
// console.log(adder([1, 2, 3, 4])); 

// console.log(sumOrMul([1, 2, 3, 5, 8], 5)); 

// const functions = [
//     (x) => adder([1, 2, 3], x),
//     (x) => sumOrMul([2, 4, 6], x)
// ];

// console.log(funcExec(functions, 0));