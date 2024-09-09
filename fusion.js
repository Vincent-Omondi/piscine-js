const fusion = (obj1, obj2) => {
    const result = {};

    for (const key in obj1) {
        if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
            result[key] = obj1[key].concat(obj2[key] || []);
        } else if (typeof obj1[key] ==='string' && typeof obj2[key] === 'string') {
            result[key] = obj1[key] +' ' + obj2[key];
        } else if (typeof obj1[key] === 'number' && typeof obj2[key] === 'number') {
            result[key] = obj1[key] + obj2[key];
        } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            result[key] = fusion(obj1[key], obj2[key]);
        } else {
            result[key] = obj2[key] || obj1[key];
        }
    }

    for (const key in obj2) {
        if (!(key in obj1)) {
            result[key] = obj2[key];
        }
    }

    return result;
}


// console.log(fusion({ a: "hello", b: [] }, { a: 4 }))
console.log((fusion({ a: [1, 2] }, { a: 1 })))