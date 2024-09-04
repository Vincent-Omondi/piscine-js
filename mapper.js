const map = (arr, fn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(fn(arr[i]));
    }
    return result;
};

const flatMap = (arr, fn) => {
    // return map(arr, fn).reduce((acc, val) => acc.concat(val), []);
    const result = [];
    for (let i = 0; i < arr.length; i++){
        const val = fn(arr[i]);
        if(Array.isArray(val)){
            result.push(...val);
        } else {
            result.push(val);
        }
    }
    return result;
};
// console.log(flatMap([1, 2, 3], x => [x, x * 2]));
// console.log(map([1, 2, 3], x => x * 2));
