const fold = (arr, fn, acc) => {
    if (arr.length < 1){
        throw new Error('Error');
    }
    for (let i = 0; i < arr.length; i++){
        acc = fn(acc, arr[i]);
    }
    return acc;
};

const foldRight = (arr, fn, acc) => {
    if (arr.length < 1){
        throw new Error('Error');
    }
    for (let i = arr.length - 1; i >= 0; i--){
        acc = fn(acc, arr[i]);
    }
    return acc;
};

const reduce = (arr, fn) => {
    if (arr.length < 1){
        throw new Error('Error');
    }
    let acc = arr[0];
    for (let i = 1; i < arr.length; i++){
        acc = fn(acc, arr[i]);
    }  
    return acc;  
};

const reduceRight = (arr, fn) => {
    if (arr.length < 1){
        throw new Error('Error');
    }
    let acc = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--){
        acc = fn(acc, arr[i]);
    }  
    return acc;
};

// console.log(fold([1, 2, 3], adder, 2)); // Outputs: 8 (2 + 1 + 2 + 3)
// console.log(foldRight([1, 2, 3], adder, 2)); // Outputs: 8 (2 + 3 + 2 + 1)
// console.log(reduce([1, 2, 3], adder)); // Outputs: 6 (1 + 2 + 3)
// try {
//     console.log(reduce([], adder)); // Throws an error
// } catch (e) {
//     console.log(e.message); // Outputs: "Array must have at least one element"
// }
// console.log(reduceRight([1, 2, 3], adder)); // Outputs: 6 (3 + 2 + 1)
// try {
//     console.log(reduceRight([], adder)); // Throws an error
// } catch (e) {
//     console.log(e.message); // Outputs: "Array must have at least one element"
// }