function fibonacci(N){
    let array=[]
    let a=0
    let b=1
    let c=a+b;

    array.push(a);
    array.push(b);

    while(c<N){
        array.push(c);

        a=b;
        b=c;
        c=a+b;
    }

    console.log(array);
    

}

fibonacci(7)