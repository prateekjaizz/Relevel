let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

let n=15;

let i = 0;
let j=arr[0].length-1;  // if its sorted only then
while(arr[i][j]!=n){
        if(arr[i][j]<n){
            i++;

        }
        if(arr[i][j]>n){
            
            j--;
        }
}

console.log(i,j);