function factorial(Num){
    let fac=1;
    for(let i=Num;i>0;i--){
        fac=i*fac;
    }
    console.log(fac);
}

factorial(3)