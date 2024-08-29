function indexOf(arr, value,  fromIndex=0) {
    for (let i=fromIndex; i < arr.length; i++){
        if (arr[i] === value){
            return i;
        }  
    }
    return -1;
}

function lastIndexOf(arr, value, fromIndex=arr.length -1){
    for (let i = fromIndex; i >= 0; i--){
        if (arr[i] === value){
            return i;
        }
    }
    return -1;
}

function includes(arr, value){
    return indexOf(arr, value) !== -1;
}

// const arr = ['t', 0, 0, 't'];

// console.log(indexOf(arr, 2, fromIndex = 0))
// console.log(lastIndefOf(arr, 2))
// console.log(includes(arr, 9))
// console.log(lastIndexOf(arr, 't', 2))