const birthYears = [
    2002,
    2006,
    2010,
    2001,
    1996,
    2011,
    2005,
    2002,
    1992,
    2014
];

const currentYear = new Date().getFullYear();

const filterAges = (birthYears, currentYear) => {
    const result = birthYears.filter(y => y > 0 && y < currentYear).map(y => currentYear - y).filter(age => age >= 18);
    return result;
}

console.log(filterAges(birthYears, currentYear));