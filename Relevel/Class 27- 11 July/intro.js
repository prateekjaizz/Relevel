//2d arrays revision himanshu sir

//inner operations will be performed first

//(i*c+j)*B   (row number * total columns + col num ) * size

let arr=[]

for(let i=0;i<4;i++){
    arr[i]= new Array(5);
}

console.log(arr);


/////////////////////


let n=4;
let m=5;

let arr1 = Array.from(new Array(n), arrsizem);  //will do the same


function arrsizem(){
    return new Array(m);
}

console.log(arr1)

////////////////////////////