// Column addition

let Arr=[
    [1,0,0,0],
    [0,2,7,0],
    [0,0,3,0],
    [0,0,0,4]
]

// Arr.forEach((element,index) => {
//     element.forEach((element1, index1)=>{
//         let
//         for(let i=0;i<Arr.length;i++){
//             sum=sum+Arr[i][index1]
//             console.log(sum)
//         }
//     });
// });

// for(let i=0;i<Arr[1].length;i++){
//     sum=0;
//     for(let j=0;j<Arr.length;j++){
//         sum=sum+Arr[j][i];
//     }
//     console.log(sum)
// }

var arrsum = Arr.reduce((arr1,arr2)=>
    arr1.map((sum, id) =>  sum+arr2[id] )  // dont use {} in map again telling
);

console.log(arrsum);


const roo=[1,2,3,4,5,6,7,8,9,0];
const poo = roo.reduce(sum);
console.log(poo)
function sum(total, num){
    return total + num;
}
