function factorial(Num){
    let fac=1;
    for(let i=Num;i>0;i--){
        fac=i*fac;
    }
    console.log(fac);
}


function combination(n,k){
    let BC=factorial(n)/(factorial(k)*factorial(n-k));
    console.log(BC);
}

combination(7,3)