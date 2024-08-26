const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
};  

let clone1 = {...person};
let clone2 = {...person};
let samePerson = person;

person.age = 78;
person.country = 'FR';

console.log(clone1.age)
console.log(clone2.age)
console.log(person.age)
console.log(samePerson.country)