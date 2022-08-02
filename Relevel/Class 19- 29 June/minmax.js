//Min and Max of array

let arr=[70,3,29,64,89,19,20];

function min(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}

console.log(min(arr));

function max(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

console.log(max(arr));

function sort(arr){
    
}