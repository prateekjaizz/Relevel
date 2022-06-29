function calculator(no1,no2,Operation){
    if(Operation=="+"){
        let sum = no1 + no2;
        console.log("The Result is :- ", sum);
    }
    else if(Operation=="-"){
        let sub = no1 - no2;
        console.log("The Result is :-", sub);
    }
    else if(Operation == "/"){
        let div = no1/no2;
        
        console.log("The Result is :-", div.toFixed(2));
    }
    else if(Operation == "*"){
        let mult=no1*no2;
        console.log("The Result is :-", mult);
    }
}

calculator(4,5,"+");
calculator(3867,9347,"+");
calculator(9,3,"/");
calculator(3,9,"/");
calculator(56,89,"*");
calculator(-5,5,"-");
calculator(56,89,"-");