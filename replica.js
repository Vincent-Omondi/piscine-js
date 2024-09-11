function replica(target, ...sources) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }
  
    function isObject(item) {
      return (item && typeof item === 'object' && !Array.isArray(item));
    }
  
    function deepMerge(target, source) {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          if (isObject(target[key]) && isObject(source[key])) {
            deepMerge(target[key], source[key]);
          } else {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
  
    for (const source of sources) {
      if (source != null) {
        deepMerge(target, source);
      }
    }
  
    return target;
  }

// const target = { a: 1, b: { c: 2 } };
// const source1 = { b: { d: 3 }, e: 4 };
// const source2 = { f: { g: 5 } };

// const result = replica(target, source1, source2);
// console.log(result);