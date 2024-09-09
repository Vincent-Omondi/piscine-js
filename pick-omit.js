const pick = (obj, keys) => {
    const pickedObj = {};
    const keysArray = Array.isArray(keys)? keys : [keys];

    for (let key in obj) {
        if (keysArray.includes(key)) {
            pickedObj[key] = obj[key];
        }

        // uncomment this if you want to handle nested objects
        // if (typeof obj[key] === 'object' && obj[key] !== null) {
        //     pickedObj[key] = pick(obj[key], keysArray);
        // }
    }
    return pickedObj;
}

const omit = (obj, keys) => {
    const omittedObj = {...obj };
    const keysArray = Array.isArray(keys)? keys : [keys];

    for (let key in obj) {
        if (keysArray.includes(key)) {
            delete omittedObj[key];
        }
        // uncomment this if you want to handle nested objects
        // if (typeof obj[key] === 'object' && obj[key] !== null) {
        //     omittedObj[key] = omit(obj[key], keysArray);
        // }
    }
    return omittedObj;
}

// const obj1 = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// }

// const obj = { a: 1, b: 2, c: 3, d: 4 };

// const picked = pick(obj, ['a', 'c']);
// console.log(picked); // { a: 1, c: 3 }

// const omitted = omit(obj1, 'b');
// console.log(omitted);