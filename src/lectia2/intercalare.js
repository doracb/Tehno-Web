function intercalare(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return -1;
    }
    let rez=[];
    for(let i=0;i<arr1.length;i++){
        rez.push(arr1[i],arr2[i]);
    }
    return rez;
}

console.log(intercalare([1,2,3],['a','b','c'])); // [1, 'a', 2, 'b', 3, 'c']