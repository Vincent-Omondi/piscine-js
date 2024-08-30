function split(str, del = ''){

    let result = [];
    if (del === '') {
        for (let i = 0; i <str.length; i++){
            result.push(str[i])
        }
    }else {
        let word = '';
        for (let i = 0; i < str.length; i++){
            
            if (str.slice(i,i + del.length) !== del){
                word += str[i]
            } else {
                result.push(word);
                word = '';
                i += del.length -1
            }
        }
        result.push(word);
    }    
    return result
}

function join(arr, del =','){
    let result = '';

    for (let i = 0; i < arr.length; i++){
        result += arr[i]
        if (i < arr.length -1){
            result += del;
        }
    }
    return result;
}

// console.log(split('Riad', ''));

// const str = 'ggg - ddd - b';
// const splitResult = split(str, ' - ');
// console.log(splitResult); // ['ggg', 'ddd', 'b']

// const joinResult = join(splitResult, ' - ');
// console.log(joinResult); // 'ggg - ddd - b'