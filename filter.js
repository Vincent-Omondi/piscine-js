const filter = (arr, fn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
};

const reject = (arr, fn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i],i,arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

const partition = (arr, fn) => {
    const trueArr = [];
    const falseArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            trueArr.push(arr[i]);
        } else {
            falseArr.push(arr[i]);
        }
    }
    return [trueArr, falseArr];
}

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = filter(numbers, num => num % 2 === 0);
// console.log(evenNumbers); // Outputs: [2, 4]

// const rejectedNumbers = reject(numbers, num => num % 2 === 0);
// console.log(rejectedNumbers); // Outputs: [1, 3, 5]

// const [even, odd] = partition(numbers, num => num % 2 === 0);
// console.log(even); // Outputs: [2, 4]
// console.log(odd);  // Outputs: [1, 3, 5]


