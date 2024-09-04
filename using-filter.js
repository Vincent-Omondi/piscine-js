const filterShortStateName = (arr) => {
    return arr.filter(states => states.length < 7);
}

const filterStartVowel = (arr) => {
    return arr.filter(states => /^[aeiou]/i.test(states))
}

const filter5Vowels = (arr) => {
    return arr.filter(states => (states.match(/[aeiou]/gi) || []).length >=5);
}

const filter1DistinctVowel = (arr) => {
    return arr.filter(states => {
        const vowels = ['a','e','i','o','u'];
        const distinct = new Set();
        for (let char of states.toLowerCase()){
            if (vowels.includes(char)){
                distinct.add(char);
            }
        }
        return distinct.size === 1;
    })
}

const multiFilter = (arr) => {
    const vowels = ['a','e','i','o','u'];
    return arr.filter(obj => 
        obj.capital.length >= 8 &&
        !vowels.includes(obj.name[0].toLowerCase()) &&
        obj.tag.toLowerCase().split('').some(char => vowels.includes(char)) &&
        obj.region !== "South"
    );
}

// const states = ['California', 'Alabama', 'Florida', 'Texas',
//  'Ohio', 'New York', 'Maine'];

//  const regions = [
//     { capital: 'Montgomery', name: 'Alabama', tag: 'Sweet Home', region: 'South' },
//     { capital: 'Sacramento', name: 'California', tag: 'Golden State', region: 'West' },
//     { capital: 'Austin', name: 'Texas', tag: 'Lone Star', region: 'South' },
//     { capital: 'Albany', name: 'New York', tag: 'Empire State', region: 'North East' },
// ];

//  console.log(filterShortStateName(states));
//  console.log(filterStartVowel(states));
//  console.log(filter5Vowels(states))
//  console.log(filter1DistinctVowel(states))
//  console.log(multiFilter(regions));