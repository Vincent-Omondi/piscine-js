function flat(array, depth = 1) {
    let result = [];

    function flatten(arr, currentDepth) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && currentDepth < depth) {
                flatten(arr[i], currentDepth + 1);
            } else {
                result.push(arr[i]);
            }
        }
    }

    flatten(array, 0);
    return result;
}

// console.log(flat([1, [2, 3], [4, [5, 6]], 7], 1)); 
// console.log(flat([1, [2, 3], [4, [5, 6]], 7], 2)); 
