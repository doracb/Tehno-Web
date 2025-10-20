function expoGen() {
    const cache = {} // a ^ b
    const exp = (a, b) => {

        const key = `${a},${b}`

        if (key in cache) {
            console.log('found ', key)
            return cache[key]
        }
        console.log('calculated ', key)
        if (b === 0) {
            cache[key] = 1
        }
        else if (b === 1) {
            cache[key] = a
        }
        else if (b % 2 === 0) {
            cache[key] = exp(a, b / 2) * exp(a, b / 2)
        }
        else {
            cache[key] = a * exp(a, b - 1)
        }

        return cache[key]
    }

    return exp
}

const expo = expoGen()
console.log(expo(2, 4))
console.log(expo(3, 2))
console.log(expo(2, 3))
console.log(expo(2, 4))