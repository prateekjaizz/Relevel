const num=121;

for(let i=0;i<=num;i++){
    let copy=i;
    let rev=0;
    while(copy>0){
        let dig=copy%10;
        rev=rev*10+dig;
        copy=Math.floor(copy/10);
        }

    if(rev===i){ 
        console.log(i);
           }   
}

