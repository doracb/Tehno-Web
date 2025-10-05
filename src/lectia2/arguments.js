function addToArray() {
    let args = arguments;
    let array = args[0];
    for(var i=1; i < args.length; i++){
        array.push(args[i]);
    }
    return array;
}

let array=["a"];

console.log(addToArray(array, "b", "c"));
console.log(addToArray(array, "d", "e", "f").join(', ')); 