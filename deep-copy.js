const deepCopy = (value) => {
    if (typeof value === 'object' && value!== null) {
        if (Array.isArray(value)) {
            return value.map(deepCopy);
        } else {
            const copiedObj = {};
            for (const key in value) {
                copiedObj[key] = deepCopy(value[key]);
            }
            return copiedObj;
        }
    } else {
        return value;
    }
    
}

// // Example usage:
// const original = {
//     name: 'Luke',
//     scores: [98, 56],
//     details: {
//         age: 25,
//         isForceUser: true,
//     }
// };

// const copied = deepCopy(original);

// console.log(copied);
// console.log(copied !== original); // true, they are different objects
// console.log(copied.details !== original.details); // true, nested objects are also copied