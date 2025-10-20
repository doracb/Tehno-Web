Number.prototype.times = function (operation) {
    for (let i = 0; i < this; i++) {
        operation(i)
    }
}

3..times(i => console.log("Executie #" + (i + 1)))