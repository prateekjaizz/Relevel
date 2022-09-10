let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
//LOGIC

//doubt session code

function spiralmat(mat, m , n){
    let k=0,l=0;
    while(k<m && l<n){
    for(let i=l;i<m;i++){
        console.log(mat[k][i]+" ");
    }
    k++;

    for(let i=k;i<m;i++){
            console.log(mat[i][m-1]+" ");
    }
    m--;

    for(let i=m-1;i>=l;i--){
        console.log(mat[n-1][i]+" ");
    }
    n--;

    for(let i=n-1;i>=k;i--){
        console.log(mat[i][l]+" ");
    }
    l++;
}
}

spiralmat(arr, 4, 4);