// to find maximum in each row


let arr=[
    [33,44,22],
    [64,24,68],
    [40,21,78]
]

let newarr=[];
for(let i=0;i<arr.length;i++){
    let max=arr[i][0];
    for(let j=1;j<arr[i].length;j++){
        if(max<arr[i][j]){
            max=arr[i][j];
        }
    }
    newarr.push(max);
}
console.log(newarr);