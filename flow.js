function flow(funcs) {
    return function flowedFunction(...args){
        let result = funcs[0](...args);
        for (let i = 1; i < funcs.length; i++) {
            result = funcs[i](result);
        }
        return result;
    };
}

// const square = (nbr) => nbr * nbr;
// const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2;

// const flowedFunctions = flow([add2Numbers, square]);
// console.log(flowedFunctions(2, 3)); // Output: 25