const forEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

// const testArray = [10, 20, 30];
// forEach(testArray, (item, index, array) => {
//     console.log(`Item: ${item}, Index: ${index}, Array: [${array}]`);
// });