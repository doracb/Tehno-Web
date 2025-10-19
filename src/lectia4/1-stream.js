class Stream {
    #value
    #nextValue
    static #count = 0;
    constructor(value, nextValue) {
        this.#value = value;
        this.#nextValue = nextValue;
        Stream.#count++;
    }
    get value() {
        return this.#value;
    }
    get next() {
        this.#value = this.#nextValue(this.#value);
        return this.#value;
    }
    static get count() {
        return Stream.#count;
    }
}

class ConstantStream extends Stream {
    constructor(value) {
        super(value, value => value);
    }
}

class NextIntegerStream extends Stream {
    constructor() {
        super(0, value => value + 1);
    }
}

class EvenStream extends Stream {
    constructor(value) {
        if (value % 2 === 1) {
            value++;
        }
        super(value, val => val + 2);
    }
}

const constant = new ConstantStream(1);
const nextInteger = new NextIntegerStream();
const even = new EvenStream(3);
for (let i = 0; i < 5; i++) {
    console.log(`constant[${i}] = ${constant.next}`);
}
for (let i = 0; i < 5; i++) {
    console.log(`nextInteger[${i}] = ${nextInteger.next}`);
}
for (let i = 0; i < 5; i++) {
    console.log(`even[${i}] = ${even.next}`)
}
console.log(Stream.count);