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

let sortedarray=[]
function sorting(arr){
    
    
    sortedarray.push(min(arr));
    if(arr.length>1){
        const index= arr.indexOf(min(arr));
        // console.log(index)
        arr.splice(index, 1);
        
        // console.log("removed min")
        // console.log(arr)
        sorting(arr);
    }
    else if(arr.length==1){ // doubt hai not working
        sortedarray.push(arr[0]);
        console.log(sortedarray);
    }
    
    
}

sorting(arr);
// var rrr=[23,233,45,654];
// let ddd=rrr.filter((element)=>element>67);
// console.log(ddd); /// shows number greater than 67

