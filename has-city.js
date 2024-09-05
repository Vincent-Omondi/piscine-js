const hasCity = (country, cities) => {
    return (city) => cities.includes(city)? `${city} is a city from ${country}` :
         `${city} is not a city from ${country}`;
}

// const isKenyaCity = hasCity('Kenya', ['Kisumu', 'Nairobi', 'Mombasa']);

// console.log(isKenyaCity('Kisumu'));    
// console.log(isKenyaCity('London'));    

