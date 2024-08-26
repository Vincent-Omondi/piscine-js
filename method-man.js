function split(str){
    return str.split(' ');
}

function sentence(arr){
    return arr.join(' ');
}

function yell(str){
    return str.toUpperCase();
}

function whisper(str){
    return `*${str.toLowerCase()}*`;
}

function capitalize(str){
    if (str.length === 0) return '';
    return String(str[0].toUpperCase()) + String(str.slice(1).toLowerCase());
}


// console.log(split("Hello this is awesome"));
// console.log(sentence(["Hello", "world!"]));
// console.log(yell("Hello this is awesome"));
// console.log(whisper("Hello this is awesome"));
// console.log(capitalize("hello"));