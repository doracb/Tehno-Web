increaseSalary = (salaries, percent) => {
    if (typeof percent !== "number") {
        throw new Error("percent has to be a number, duuh!")
    }

    if (!Array.isArray(salaries)) {
        throw new Error("you must enter an array as the first parameter!")
    }

    const newSalary = salaries.map(s => s + (s * percent / 100))
    return newSalary
}

try {
    console.log(increaseSalary([3000, 4000, 5000], 10))
    console.log(increaseSalary("meow meow", 10))
} catch (error) {
    console.warn(error)
}