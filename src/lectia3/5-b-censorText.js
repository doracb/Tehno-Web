const censorText = (text, dictionary) => {
    return text
        .split(', ')
        .map(word => {
            if (dictionary.includes(word)) {
                if (word.length > 2) {
                    return word[0] + '*'.repeat(word.length - 2) + word[word.length - 1];
                }
            }
            return word;
        })
        .join(' ');
}

console.log(censorText("javascript, este, minunat", ["este"]));