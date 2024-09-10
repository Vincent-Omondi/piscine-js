const defaultCurry = (obj1) => (obj2) => {
    return {...obj1,...obj2 };
}

const mapCurry = (fn) => (obj) => { 
    const result = {};
    for (let [key, value] of Object.entries(obj)) {
        const transformed = fn([key, value]); 
        result[transformed[0]] = transformed[1]; 
    }
    return result;
}

const reduceCurry = (fn) => (obj, initial) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        return fn(acc, [key, value], initial);
    }, initial);
}

const filterCurry = (fn) => (obj) => {
    const result = {};
    for (let [key, value] of Object.entries(obj)) {
        if (fn([key, value])) {
            result[key] = value;
        }
    }
    return result;
}


const reduceScore = reduceCurry((acc, [key, value]) => {
    if (value.isForceUser) {
        return acc + value.pilotingScore + value.shootingScore;
    }
    return acc;
});


const filterForce = filterCurry(([k, v]) => v.isForceUser && v.shootingScore >= 80);

const mapAverage = mapCurry(([k, v]) => {
    return [
        k,
        {
            ...v,
            averageScore: (v.pilotingScore + v.shootingScore) / 2
        }
    ];
});

// prettier-ignore
// const personnel = {
//     lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//     sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//     zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//     ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//     calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
// }

// const result = mapCurry(([k, v]) => [`${k}🤙🏼`, `${v}🤙🏼`])({ emoji: 'cool' })

// console.log(result)
  