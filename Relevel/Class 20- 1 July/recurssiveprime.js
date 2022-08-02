const recur=(num1,num2)=>{

    for(let i=num1;i<=num2;i++){
        if(i===1){
            console.log(i);
        }
        else{
            for(let j=2;j<=i;j++){
                if(i%j===0) {
                    
                    break;
                }
                else{
                    console.log(i);
                    break;
                }
            } 
        }

    }

}

// recur(7,19);

 function promptb(){
    let num1=prompt("Enter Num1");
    let num2=prompt("Not lagging");
    num2=parseInt(num2);
    num1=parseInt(num1);
    console.log(num1);
    console.log(num1);
    
 };

 promptb() //yaha pr function ka prompt nahi likhna hai dimaag khrb hojaega
