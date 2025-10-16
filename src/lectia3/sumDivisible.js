const sumDivisible = (array, divisor) => {
    return array.reduce((sum, n) => sum + (n % divisor === 0 ? n : 0), 0);
}

const numbers = [10, 15, 20, 3, 30, 60, 8, 7];

console.log(sumDivisible(numbers, 5));