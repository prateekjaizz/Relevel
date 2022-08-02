let arr=[4,67,8,2,6];
let arr2=[2,4,6,8,4,3,4,55,6,67,3,3,3]

uniquearr=[... new Set(arr2)]   
// array to object and remove duplicate value
//... destructs the object into an array 
console.log(uniquearr.at(-2));

// function secondhigh(arr){
//     let max = arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(max<arr[i]){
//             max=arr[i];
//         }
//     }
// }

arr=arr.sort(function(a, b){return a-b});// sorted
console.log(arr.at(-2)) 
// arr2=arr2.sort()
// console.log(arr2)
// console.log(arr[arr.length-2])


//Q2 Divisible by 7
let arr3=[1,2,7,6,45,49];
// for(let i=0;i<arr3.length;i++){
//     if(arr3[i]%7==0){
//         console.log(arr3[i])
//     }
// }

    let div=(n, arr) => {return arr.filter(element => element%n==0)};

console.log(div(7,arr3));