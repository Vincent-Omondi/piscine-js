const deepCopy = (value) => {
    if (value === null || typeof value!== 'object') {
        return value;
    }
    if (Array.isArray(value)) {
        return value.map(deepCopy);
    }

    const copy = {};
    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            copy[key] = deepCopy(value[key]);
        }
    }
    return copy;
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