function nfibonacci(N){


    if(N===0)return false;

    let array=[];
    let a=0;
    let b=1;
    let c=a+b;
    let p=3;


    if(N==1){
        array.push(a);
    }
    if(N>=2){
        array.push(a);
        array.push(b);
    }

    while(p<=N){
        array.push(c);
        a=b;
        b=c;
        c=a+b;
        p+=1;
    }

console.log(array[N-1]);

}

nfibonacci(2);