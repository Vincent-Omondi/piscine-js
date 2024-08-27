function getAcceleration(properties){
    const {f, m,  Δv, Δt, t, d} = properties;

    if (f!==undefined && m!== undefined){
        return  f/m;
    }

    if (Δv !== undefined && Δt !== undefined){
        return Δv/Δt;
    }

    if (d !== undefined && t !== undefined){
        return (2*d)/(t*t);
    }

    return "impossible";
}

// const properties1 = {
//     f: 10,
//     m: 5,
//     Δv: 100,
//     Δt: 50,
//     t: 1,
//     d: 10
// };

// console.log(getAcceleration(properties1));