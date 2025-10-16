const numere = [1, 2, 3, 4]

const reduce = (array, transformation, initialVal) => {
    let result = initialVal;
    for (let i = 0; i < array.length; i++) {
        result = transformation(result, array[i], i, array);
    }
    return result;
};

console.log(reduce(numere, (total, valoare) => total + valoare, 0));