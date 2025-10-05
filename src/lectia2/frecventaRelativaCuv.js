const sampleString = "the quick brown fox jumps over the lazy dog";

const getCounts = (text) => {
    const words = text.split(" ");
    const result = {}; //obiect gol
    for(let word of words){
        if(word in result){
            result[word]++; //daca deja e in obiect, incrementeaza valoarea
        }
        else{
            result[word] = 1;
        }
    }
    for(let word in result){
        result[word] /= words.length; //obtine frecventa relativa a fiecarui cuvant
    }
    return result;
}

console.log(getCounts(sampleString));