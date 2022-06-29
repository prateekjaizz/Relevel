function three(N){
    if(N%2==0){
        console.log("Even");
    }
    copy=N;
    rev=0;
    while(copy>0){
        dig=copy%10;
        rev=rev*10+dig;
        copy=Math.floor(copy/10);
    }
    if(rev=N) {
        console.log("Palindorme") ;
    }
    if(N%4==0){
        console.log("Div by 4") ;
    }

  
}

three(8)