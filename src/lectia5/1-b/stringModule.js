const a = "hello everybody, my name is markiplier!";

function capitalizeWords(str) {
    return str.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
}

export { a, capitalizeWords };