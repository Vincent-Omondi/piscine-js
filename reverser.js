function reverse(input){
    if (Array.isArray(input)){
        let result = [];
        for (let i = input.length-1; i >= 0; i--){
            result.push(input[i]);
        }
        return result;
    } else {
        let result = '';
        for (let i=input.length-1; i >= 0; i--){
            result += input[i]
        }
        return result
    }
}
// const array1 = ['one', 'two', 'three'];

// console.log(reverse('hello my name'))
// console.log(reverse(array1))