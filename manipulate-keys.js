const filterKeys = (obj, fn) => {
    const result = {}

    for (let key in obj){
        if (fn(key)){
            result[key] = obj[key];
        }
    }
    return result
}

const mapKeys = (obj, fn) => {
    const result = {}
    for (let key in obj){
        result[fn(key)] = obj[key]
    }
    return result
}

const reduceKeys = (obj, fn) => {
    let keys = Object.keys(obj)

    let acc = keys[0]
    for (let key in obj) {
        acc = fn(acc, key)
    }
    return acc
}


// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

// console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }

// console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }


// console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// output: carbohydrates, protein, fat