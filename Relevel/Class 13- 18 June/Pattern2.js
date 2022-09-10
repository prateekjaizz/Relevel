const n=5
for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=n-i;j++){    
        str=str+" ";
    }

    let star="";
    for(let j=1;j<=i;j++){
        star = star + "*";
    }
    console.log(str + star);

}

