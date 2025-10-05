function nrCaractereDif(str1,str2){
    if(str1.length !== str2.length){
        return -1;
    }

    let count = 0;
    for(let i=0; i<str1.length; i++){
        if(str1[i] !== str2[i]){
            count++;
        }
    }
    return count;
}

console.log(nrCaractereDif("abcdef","abfdeg")); //1
console.log(nrCaractereDif("abc","abfde")); //-1
console.log(nrCaractereDif("abc","abc")); //0