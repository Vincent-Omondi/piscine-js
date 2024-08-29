function slice(input, start=0, end = input.length -1){
    if (start < 0) start = input.length + start;
    if (end < 0) end = input.length + end;
    if (Array.isArray(input)){
        let result = [];
        for (let i=start; i <= end;  i++){
            result.push(input[i]);
        }
        return result;
    } else {
        let result = '';
        for (let i=start; i <= end;  i++){
            result += input[i];
        }
        return result;
    }    
}

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const str = "Hello World!";

console.log(slice(fruits,2,4));
console.log(slice(str,0,5));
console.log(slice(fruits,-2));
console.log(slice(str,-2));