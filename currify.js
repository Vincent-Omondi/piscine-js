const currify = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...rest) => curried(...args, ...rest);
    }
  };
};


// const mult2 = (el1, el2) => el1 * el2;
// console.log(mult2(2, 2)); // result expected 4

// const mult2Curried = currify(mult2);
// console.log(mult2Curried(2)(2)); // result expected 4