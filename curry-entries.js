const defaultCurry = (obj1) => (obj2) => {
    return {...obj1,...obj2 };
}

const mapCurry = (fn) => (obj) => { 
    const result = {};
    for (let [key, value] of Object.entries(obj)) {
        const [nwKey, nwValue] = fn([key, value]);
        result[nwKey] = nwValue;
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


const reduceScore = (attr) => reduceCurry((acc, [key, value]) => {
    if(value.isForceUser) {
        return acc + value[attr];
    }
    return acc;
})(personnel, 0);


const filterForce = filterCurry(([k, v]) => v.isForceUser && v.shootingScore >= 80);

const mapAverage = mapCurry(([k, v]) => {
    return {
        [k]: {
           ...v,
            averageScore: (v.pilotingScore + v.shootingScore) / 2
        }
    };
});

