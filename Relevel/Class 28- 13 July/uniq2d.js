let arr=[
    [1,2,1],
    [2,3,5],
    [5,4,2]
]

let obj={};
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[0].length;j++){
        if(obj[arr[i][j]]){
            obj[arr[i][j]]+= 1;
        }
        else{
            obj[arr[i][j]]= 1;
        }
    }
}

// for(let [key,value] of Object.entries(obj)){
//     if(value==1){
//         console.log(key);
//     }
// }

for(let pair of Object.entries(obj)){
    if(pair[1]==1){
        console.log(pair[0]);     // same as above
    }
}