const sortObjects = (array, key) => {
    return array.sort((a, b) => {
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {
            return a[key] - b[key];
        }
        if (typeof a[key] === 'string' && typeof b[key] === 'string') {
            return a[key].localeCompare(b[key]); // compară alfabetic
        }
        return 0;
    })
}

const laptops = [
    {
        brand: 'HP',
        processor: 'i5',
        ram: 8
    },
    {
        brand: 'Lenovo',
        processor: 'i5',
        ram: 16
    },
    {
        brand: 'Acer',
        processor: 'i5',
        ram: 32
    },
    {
        brand: 'Asus',
        processor: 'i7',
        ram: 8
    },
];

console.log("Sortare dupa RAM:");
console.log(sortObjects(laptops, "ram"));

console.log("Sortare dupa brand:");
console.log(sortObjects(laptops, "brand"));