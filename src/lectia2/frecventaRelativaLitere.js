const sampleString = "the bunny ate a strawberry";

const getCounts = (text) => {
    const letters = text.split("").filter(ch => /[a-zA-Z]/.test(ch));
    const result = {}; //obiect gol
    for(let letter of letters){
        if(letter in result){
            result[letter]++; //daca deja e in obiect, incrementeaza valoarea
        }
        else{
            result[letter] = 1;
        }
    }
    for(let letter in result){
        result[letter] /= letters.length; //obtine frecventa relativa a fiecarui caracter
    }
    return result;
}

console.log(getCounts(sampleString));