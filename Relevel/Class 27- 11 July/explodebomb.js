let arr=[
    [0,-1,0,-1],
    [1,0,-1,2],
    [0,0,-1,-1],
    [-1,3,-1,1]
]


for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[0].length;j++){
        if(arr[i][j]==-1){
            if(j-1>=0 && arr[i][j-1]!=-1) {
                arr[i][j-1]=arr[i][j-1]+1;}
            if(j+1<arr[0].length && arr[i][j+1]!=-1) {
                arr[i][j+1]=arr[i][j+1]+1;}
            if(i+1<arr.length && arr[i+1][j]!=-1) {
                arr[i+1][j]=arr[i+1][j]+1;}
            if(i-1>=0 && arr[i-1][j]!=-1) {
                arr[i-1][j]=arr[i-1][j]+1;}
        }
    }
}

console.log(arr);