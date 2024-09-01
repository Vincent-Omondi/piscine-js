const vowels = /[aeiou]/gi;

function vowelDots(str){
    return str.replace(vowels, '$&.');
}

// console.log(vowelDots('example'));
console.log(vowelDots('Algorithm'))