const hasCity = (country, city) => {
    return () => cities.includes(city)? `${city} is a city from ${country}` :
         `${city} is not a city from ${country}`;
}

// const cities = ['New York', 'London', 'Tokyo', 'Sydney'];


// const isNewYorkCity = hasCity('USA', 'New York');
// console.log(isNewYorkCity()); 
// const isLondonCity = hasCity('UK', 'London');
// console.log(isLondonCity()); 
// const isTokyoCity = hasCity('Japan', 'Tokyo');
// console.log(isTokyoCity()); 
// const isNairobiCity = hasCity('Australia', 'Nairobi');
// console.log(isNairobiCity()); 