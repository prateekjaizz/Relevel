let arr=[1,2,"yo"];
let arr2= new Array(1,2,"ypppp");
let arr3=new Array(10);  // Length of Array is 10 

let arrdefault=[];


// arrdefault.push("HAAN ye kar lo pehle");

// console.log(arr2.pop()); // shows which element got removed -ALL about Last Element


// console.log(arr2.at(1));

console.log(arr2.at(-1));


//ADDING THE ELEMENT BY FUNCTION WITHOUT IN_BUILT 

function findbyindex(arr, index) {
    if(index>=0) return arr[index];
    if(index<0) return arr[arr.length-Math.abs(index)];
}

console.log(findbyindex(arr2, -1));

//arr2.unshift("AAGE JUDEGA");

// let newarr=  arr.concat(arr2);  --- Combines array console.log(arr.concat(arr2)); - shows same as console.log(newarr)

