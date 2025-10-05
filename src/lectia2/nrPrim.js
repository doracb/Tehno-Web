const checkPrime = (nr) => {
   for(let i=2; i<Math.sqrt(nr); i++){
       if(nr % i === 0){
           return false;
       }
   }
   return true;
}

if(process.argv.length<3){
    console.log("Not enough parameters!");
}
else {
    console.log(checkPrime(parseInt(process.argv[2])));
}