const vowels = /[aeiou]/g;

function vowelDots(str){
    return str.replace(vowels, '$&.');
}

// console.log(vowelDots('example'));