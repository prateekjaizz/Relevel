function recurrsion(n, i){
    if(i>10){
        return 0;
    }
    else{
        
        console.log(`${n} * ${i} = ${n*i}`);
        i+=1;
        recurrsion(n, i); // doubt of the i++
    }
}

recurrsion(10,1)
