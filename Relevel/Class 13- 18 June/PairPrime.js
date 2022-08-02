function isPrime(N){

    if(N===1) return true;

    

    for(let i=2;i<N;i++){
        if(N%i===0) return false; 
    }

    return true;
}   



// function PairPrimes(N){
//     for(let a=2;a<N;a++){
//         let b = N-a;
//         if(isPrime(b)&& isPrime(a)){
//             return [a, b];
//         }

//     }

//     return "no Output";
// }


// console.log(PairPrimes(15));
// console.log(PairPrimes(4));
// console.log(PairPrimes(17));

console.log(isPrime(227))