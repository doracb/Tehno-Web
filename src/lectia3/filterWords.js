const words = [
    "fox",
    "crocodile",
    "owl",
    "panda",
    "axolotl",
    "owl",
    "crocodile",
    "lion",
    "panda"
];

const forbiddenWord = "crocodile";
const minLength = 4;

const filterWords = (words, forbiddenWord, minLength) => {
    const result = words.filter((word) => {
        if (word !== forbiddenWord && word.length >= minLength) {
            return true;
        }
        return false;
    });
    return result;
};

console.log(filterWords(words, forbiddenWord, minLength));