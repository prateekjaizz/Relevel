function npal(N){
    let count=1;
    for(let i=1;i<=N;i++){
        
        if(i<=9){
        console.log(i*10+i);
        }
        
        else{
            count++;
            if(count)
            
            console.log(11**count);
        }
    }
}

npal(16)