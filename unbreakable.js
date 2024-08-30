function split(str, del = ''){
    let result = [];
    let word = '';
    for (let i = 0; i < str.length; i++){
        
        if (str[i] !== del){
            word += str[i]
        } else {
            result.push(word);
            word = '';
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



const str = 'The quick brown fox jumps over the lazy dog.';


const words = str.split(' ');
console.log(words);

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());