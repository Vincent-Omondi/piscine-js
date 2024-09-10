const filterValues = (obj, fn) => {
    const result = {}
    for (let key in obj) {
        if (fn(obj[key])){
            result[key] = obj[key]
        }
    }
    return result;
}

const mapValues = (obj, fn) => {
    const result = {}
    for (let key in  obj){
        result[key] = fn(obj[key])
    }
    return result;
}

const reduceValues = (obj, fn, initial = 0) => {
    let acc = initial
    for (let key in obj){
        acc = fn(acc, obj[key])
    }
    return acc;
}


// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))


// console.log(mapValues(nutrients, (v) => v+1))

// console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
