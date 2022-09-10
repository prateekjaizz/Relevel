let arr=[
    [1,2,3,9],
    [8,9,4,0],
    [7,6,5,9]
]

// for(let i=0;i<arr[0].length;i++){

//         if(i%2==0 || i==0){
//             for(let j=0;j<arr.length;j++){
//                     console.log(arr[j][i])
//             }
//         }
//         else{
//             for(let j=arr.length-1;j>=0;j--){ 
//                 console.log(arr[j][i]);
//           }
//         }

//     }


for(let i=0;i<arr[0].length;i++){
    for(let j=0;j<arr.length;j++){
        if(i==0 || i%2==0){
            console.log(arr[j][i])
        }
        else{
            console.log(arr[arr.length-j-1][i])
        }
    }
}
    