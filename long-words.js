const longWords = (arr) => {
    return arr.every(element => typeof element === 'string' &&
        element.length >= 5);
};

const oneLongWord = (arr) => {
    return arr.some(element => typeof element === 'string' &&
        element.length >= 10);
};

const noLongWords = (arr) => {
    return !arr.some(element => typeof element === 'string' &&
        element.length >=7);
};

// console.log(longWords(["apple", "banana", "cherry"])); 
// console.log(oneLongWord(["tiny", "longerString", "anotherOne"]));
// console.log(noLongWords(["short", "tiny", "big", "longer"]));

