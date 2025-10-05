function occurences(text, character) {
    return text.split(character).length - 1;
}

console.log(occurences("Halloween day", "a")); // 2
