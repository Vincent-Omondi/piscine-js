function indexOf(arr, value,  fromIndex=0) {
    for (let i=fromIndex; i < arr.length; i++){
        if (arr[i] === value){
            return i;
        }  
    }
    return -1;
}

function lastIndexOf(arr, value){
    for (let i = arr.length -1; i >= 0; i--){
        if (arr[i] === value){
            return i;
        }
    }
    return -1;
}

function includes(arr, value){
    return indexOf(arr, value) !== -1;
}

// const arr = [1, 2, 3, 4, 2,0,9, 5];

// console.log(indexOf(arr, 2, fromIndex = 0))
// console.log(lastIndefOf(arr, 2))
// console.log(includes(arr, 9))