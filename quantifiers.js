const every = (arr, fn) =>{
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

const some = (arr, fn) => {
    for ( let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)){
            return true;
        }
    }
    return false;
}

// const none = (arr, fn) => !every(arr, fn);
const none = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)){
            return false;
        }
    }
    return true;
}

// const isEven = num => num % 2 === 0;

// const numbers = [1, 3, 5, 7, 6];

// console.log(none(numbers, isEven)); 
// console.log(some(numbers, isEven)); 
// console.log(every(numbers, isEven)); 

