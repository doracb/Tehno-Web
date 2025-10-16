const arrayAverage = (array) => {
    const sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
}

const numbers = [10, 20, 30, 40, 50];
console.log(arrayAverage(numbers));