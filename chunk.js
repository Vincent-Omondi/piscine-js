function chunk(arr, size){
    if (size <= 0) return [];

    const result = [];
    for (let i = 0; i < arr.length; i+=size){
        let end  = i + size;
        if (end > arr.length) end = arr.length;

        const  chunk = [];

        for (j = i; j< end; j++){
            chunk.push(arr[j])
        }
        result.push(chunk);
    }
    return result
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9,7];
console.log(chunk(array, 0)); 