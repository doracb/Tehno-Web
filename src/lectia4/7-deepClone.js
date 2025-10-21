const person = {
    name: 'Jack Sparrow',
    age: 45,
    address: {
        country: 'England',
        city: 'London'
    }
};

const clonedPerson = structuredClone(person)

clonedPerson.address.city = "Manchester";
console.log(person.address.city);
console.log(clonedPerson.address.city);