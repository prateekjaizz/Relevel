// most important logic


let arr1=[
    [1,2,3],
    [8,9,4],
    [7,6,5]
]

let arr=[
    [1,2,3,4],
    [12,13,15,5],
    [11,14,16,6],
    [10,9,8,7]
]

// that will be only square matrix 

let n=arr.length;

for(let i=0;i<Math.floor(n/2);i++){
    
    for(let j=i;j<n-i-1;j++){    //  i=0,j=2 
        let temp = arr[i][j];
        arr[i][j]=arr[n-j-1][i]; //0,0 to 2,0  // 0,1 to 1,0  /
        arr[n-j-1][i]=arr[n-i-1][n-j-1]; //2,0  to  2,2  // 1,0 to 2,1
        arr[n-i-1][n-j-1]=arr[j][n-i-1]; //2,2 to 0,2   // 2,1  to 1,2
        arr[j][n-i-1]=temp //0,2  to 0,0 // 1,2 to 0,1
    }
}
console.log(arr)