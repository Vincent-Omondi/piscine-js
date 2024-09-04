const mult2 = (arg1) => {
    return (arg2) =>{
        return arg1 * arg2;
    };
};

const add3 = (arg1) => {
    return (arg2) =>{
        return  (arg3) => {
            return arg1 + arg2 + arg3;
        }
    };
}

const sub4 = (arg1) => {
    return (arg2) =>{
        return  (arg3) => {
            return (arg4) => {
                return arg1 - arg2 - arg3 - arg4;
            }
        }
    }
}



console.log(mult2(5)(3)); // Outputs: 15
console.log(add3(2)(3)(4)); // Outputs: 9
console.log(sub4(14)(3)(4)(2)); // Outputs: 9