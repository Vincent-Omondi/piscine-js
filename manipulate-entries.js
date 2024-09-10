const filterEntries = (cart, filterFn) => {
    const result = {};
    for (let [key, value] of Object.entries(cart)){
        if (filterFn([key, value])) {
            result[key] = value;
        }
    }
    return result;
}

const mapEntries = (cart, mapFn) => {
    const result = {}
    for (let [key, value] of Object.entries(cart)){
        const [nwKey, nwValue] = mapFn([key, value])
        result[nwKey] = nwValue;
    }
    return result;
}

const reduceEntries = (cart, reduceFn, initial) => {
    let acc = initial;
    for (let [key, value] of Object.entries(cart)){
        acc = reduceFn(acc, [key, value]);
    }
    return acc;
}

const totalCalories = (cart) => {
    return Math.round(reduceEntries(cart, (acc, [key, grams]) => {
        if (nutritionDB[key]){
            return acc + (nutritionDB[key].calories * grams) / 100;
        }
        return acc;
    }, 0) * 10)/10;
}

const lowCarbs = (cart) => {
    return filterEntries(cart, ([key, grams]) => {
        if (nutritionDB[key]) {
            const totalCarbs = (nutritionDB[key].carbs * grams) / 100;
            return totalCarbs < 50;
        }
        return false;
    });
}

const cartTotal = (cart) => {
 return mapEntries(cart, ([key, grams]) => {
    if (nutritionDB[key]) {
        const nutrition = nutritionDB[key];
        const adjustedNutrition = {};
        for (let [nutrient, value] of Object.entries(nutrition)){
            adjustedNutrition[nutrient] = (value * grams) / 100;
        }
        return [key, adjustedNutrition];
    }
    return [key, {}]
 });
}


// small database with nutrition facts, per 100 grams
// prettier-ignore
// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
// }

// const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

// console.log('Total calories:')
// console.log(totalCalories(groceriesCart))
// console.log('Items with low carbs:')
// console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutritional facts:')
// console.log(cartTotal(groceriesCart))


  