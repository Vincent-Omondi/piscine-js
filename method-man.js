function split(str){
    const words = str.split(' ')
    return words
};

function sentence(arr){
    const str = arr.join(' ')
    return str
};

function yell(str){
    return str.toUpperCase()
};

function whisper(str){
    return "*" + str.toLowerCase() + "*"
};

function capitalize(str){
   
    return String(str[0].toUpperCase()) + String(str.slice(1))
};


// console.log(split("Hello this is awesome"));
// console.log('Hello', 'this', 'is', 'awesome');
// console.log(yell("Hello this is awesome"));
// console.log(whisper("Hello this is awesome"));
// console.log(capitalize("hello"));