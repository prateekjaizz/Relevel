// Pass by value is argument 
//

// let prince="kohinoor";

// function steal(lily){
//     lily="gaayab";         // prince do not change   //creates new value with new address
//     console.log(lily)

// }

let prince={value:"kohinoor"};



//pass by reference 
function steal(lily){
    lily.value="gaayab";   
      // prince changes            .value changes the same
    //dstructuring can change address 
      console.log(lily);

}


steal(prince);
console.log(prince); 

//mutation of object .. object will not change but value changed
//assignment change the address and another address is assigned



//PURE FUNCTION-never change and IMPURE FUNCTION

function sum(a,b){
    return a+b ;  //pure function
}

let hinder=2;
function hind(val){
    hinder+=2;                  //impure function        
    console.log(hinder)     // everytime changed value
}

//anonymous function
// (function(a,b){
//     return a+b;
// })(1,5);


//CLOSURE

function sum(a,b){
    let c=a+b;
    return function(){    // even after colsing we can call it 
        console.log(c);
    }
}
let print = sum(1,2);

//assignment krna h sort krna h lekin us order m jo dia h
