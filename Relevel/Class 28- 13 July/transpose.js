let arr=[
    [1,2,3],
    [8,9,4],
    [7,6,5]
]
//square matrix
for(let i=0;i<=Math.floor(arr.length/2);i++){
    for(let j=i;j<arr[0].length;j++){ // i=0 , j=0,1
        if(i!=j){
            let temp=arr[i][j]
            arr[i][j]=arr[j][i];
            arr[j][i]=temp;
           
        }
        

    }
}
console.log(arr)