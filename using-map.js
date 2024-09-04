function citiesOnly(cities){
    return cities.map(cityObj => cityObj.city)
}

function upperCasingStates(arrStr){
    return arrStr.map(str => 
        str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        );
}

function fahrenheitToCelsius(arrF){
    return arrF.map(fahrenheit => 
        `${Math.floor((parseFloat(fahrenheit) - 32) * (5/9))}°C`);
}

function trimTemp(arrObj){
    return arrObj.map(obj => ({
        city: obj.city,
        temperature: obj.temperature.trim()
    }));
}

function tempForecasts(arrObj){
    return  arrObj.map(str => {
        const fahrenheit = parseFloat(str.temperature);
        const celsius = Math.floor((fahrenheit - 32)*5/9);
        const capitalizedcity = str.state
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
                ;

        return `${celsius}°Celsius in ${str.city},${capitalizedcity}`
    });
}





// console.log(citiesOnly([
//     {
//       city: 'Los Angeles',
//       temperature: '  101 °F   ',
//     },
//     {
//       city: 'San Francisco',
//       temperature: ' 84 ° F   ',
//     },
// ]));

// console.log(upperCasingStates(['alabama', 'new jersey'])) // -> ['Alabama', 'New Jersey'])

// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']))

// console.log(trimTemp([
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ]));

// console.log(tempForecasts([
//     {
//       city: 'Pasadena',
//       temperature: ' 101 °F',
//       state: 'new york',
//       region: 'West',
//     },
// ]));

// const states = ['alabama', 'new jersey', 'alaska', 'new york', 'california', 'new hampshire', 'ohio', 'texas', 'west virginia'];
// const capitalizedStates = upperCasingStates(states);
// console.log(capitalizedStates);