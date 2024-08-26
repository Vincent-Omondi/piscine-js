const orbirtualPeriod = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
};

function dogYears(name, age){
    const earthYears = age/31557600;
    const period = orbirtualPeriod[name.toLowerCase()];
    if (period){
        const planetYears = earthYears/period;
        const dogYearsOnPlanet = planetYears*7;
        return parseFloat(dogYearsOnPlanet.toFixed(2))
    } else {
        throw new Error("Invalid planet name")
    }
}

console.log(dogYears("earth", 20000000))