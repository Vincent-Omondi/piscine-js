const invert = (obj) => {
    const invertedObj = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            invertedObj[obj[key]] = key;
        }
    }

    return invertedObj;
};


// const obj = {
//     name: 'John Doe',
//     age: 30,
//     city: 'New York'
// };

// console.log(invert(obj));