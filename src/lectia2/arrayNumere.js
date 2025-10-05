let arrayNumere = (...numere) => numere;

function arrayDinLista(lista){
    return Array.from(lista);
}

console.log(arrayNumere(1, 2, 3, 4)); // [1, 2, 3, 4]
console.log(arrayDinLista([10, 20, 30])); // [10, 20, 30]