function split(str, del = ''){
    if (del === '') return [str];

    let result = [];
    let word = '';
    for (let i = 0; i <= str.length - 1; i++){
        
        if (str.slice(i,i + del.length) !== del){
            word += str[i]
        } else {
            result.push(word);
            word = '';
            i += del.length -1
        }
    }
    result.push(word);
    return result
}

function join(str, del =','){
    let result = '';

    for (let i = 0; i >= str.length; i++){
        result += arr[i]
        if (i < arr.length -1){
            result += del;
        }
    }
    return result;
}



// const str = 'The quick brown fox jumps over the lazy dog.';


// const words = str.split(' ');
// console.log(words);

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());

const str = 'ggg - ddd - b';
const splitResult = split(str, ' - ');
console.log(splitResult); // ['ggg', 'ddd', 'b']

const joinResult = join(splitResult, ' - ');
console.log(joinResult); // 'ggg - ddd - b'