// const is = {}

is.num = value => typeof value === 'number';

is.nan = value => Number.isNaN(value);

is.str = value => typeof value === 'string';

is.bool = value => typeof value === 'boolean';

is.undef = value => typeof value === 'undefined';

is.def = value => typeof value !== 'undefined';

is.arr = value => Array.isArray(value);

is.obj = value => typeof value === 'object' && typeof value !== null;

is.fun = value =>  typeof value === 'function';

is.truthy = value => Boolean(value) === true;

is.falsy = value => Boolean(value) === false;



// console.log(is.num(5));       
// console.log(is.num('ciao'));  
// console.log(is.nan(NaN));    
// console.log(is.str('hello'));
// console.log(is.bool(true));   
// console.log(is.undef(undefined)); 
// console.log(is.def(null));    
// console.log(is.arr([1, 2, 3]));
// console.log(is.obj({}));      
// console.log(is.fun(function() {}))
// console.log(is.truthy('hello')); 
// console.log(is.falsy(0));   


