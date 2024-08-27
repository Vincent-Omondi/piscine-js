const is = {
    num: function(value){
        return typeof value === 'number';
    },
    nan: function(value){
        return Number.isNaN(value);
    },
    str: function(value){
        return typeof value === 'string';
    },
    bool: function(value){
        return  typeof value === 'boolean';
    },
    undef: function(value){
        return typeof value === 'undefined';
    },
    def: function(value){
        return typeof value !== 'undefined';
    },
    arr: function(value){
        return Array.isArray(value);
    },
    obj: function(value){
        return typeof value === 'object' && typeof value !== null;
    },
    fun: function(value){
        return  typeof value === 'function';;
    },
    truthy: function(value){
        return Boolean(value) === true;
    },
    falsy: function(value){
        return Boolean(value) === false;
    }
}

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

