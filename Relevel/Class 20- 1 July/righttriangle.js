


function rightt(i,m){
    
    console.log("*".repeat(i));
    i++;
    if(i>m) return;
    rightt(i, m);
    
}
 
// rightt(4,5)


function ulta(i,m = 1){
    
    console.log("*".repeat(i));
    i--;
    if(m>i) return;
    ulta(i, m);
    
}
 
ulta(5,1)


//MAX_NUM ----- constant with underscore