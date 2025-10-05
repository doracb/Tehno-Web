function checkDivisible(num, divisor) {
    if(num % divisor === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkDivisible(10, 2)); // true
console.log(checkDivisible(10, 7)); // false