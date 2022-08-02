//Map and forEach function 
// Map returns but forEach do not return


const tempArray = [ 1,2,4,5,6,7] // CamelCase Variable


let returns= tempArray.forEach((element)=>{
    return element; // not returnable
})

let returnsmap= tempArray.map((element)=>{
    return element; // will return arrray also can be multiplied by 10
})


//Filter
//filter can be done in map but it shows whole array and undefined not filtered
let filtered = tempArray.filter((element)=>element<5)

// console.log(filtered)


const swap = (a,b) => {
    let c=a;
    a=b;
    b=c;
    return a + ","+ b;

}

console.log(swap(5,6).split(","));