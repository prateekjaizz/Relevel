let str="RELEVEL";

console.log(Array.from(str));

console.log(Array.from([1,2,3], (e)=> e+10));   // Here {} doesn't work

let m=5;
let n=5;
// let arr=Array.from(Array(m));
// console.log(arr)

let array=Array(1,2,3,4,5); // Arrya ban jaega

let temp=Array(4).fill().map(e=>Array(4)); // will fill array..
let temp0=Array(4).fill("r"); // (100)
console.log(temp0)

let arrr=Array(4).fill(100, 2); // will fill from 2nd Index
let arrrr=Array(4).fill(100, 2, 4); // will fill from 2nd Index upto 3 (<4) index

let mn=Array.from(Array(3),()=>Array(4).fill(100))
console.log(mn)

// fill values in 2d array

let R=4;
let C =5;

let arr=Array.from(Array(R),()=>Array(C).fill(100));

console.log(arr)