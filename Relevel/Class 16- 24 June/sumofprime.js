function isprime(N){
    if(N===1) return false;
    for(let i=2;i<=Math.sqrt(N);i++){  //sqrt bcoz reduces time.
        if(N%i==0){
            return false;
        }
    }
    return true;
}

function sump(N){
    
    

}



console.log(isprime(5));