// element should be bigger than the previous row element.
// check element present in array or not 


let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
function prev(arr){
let count=0;
for(let i = 0;i<arr.length;i++){
    let max=arr[0][i];
    for(let j=1;j<arr.length;j++){
        if(max<arr[j][i]){
            max=arr[j][i];
        }
    }
    if(max==arr[arr.length-1][i]){ // bottom column should be maximum
        count++;
    }
}
if(count==arr[0].length){
    return true;
}
return false;
}

console.log(prev(arr));