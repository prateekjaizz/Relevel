//Diagonal Matrix Check
let Arr=[
    [1,0,0,0],
    [0,2,7,0],
    [0,0,3,0],
    [0,0,0,4]
]
//foreach se nahi chal rha h kuch problem aarhi haiii likhi hai problem neeche jo bhi likha h foreach ka h
const diagonal=(arr=[])=>{ // declare type is array / default parameters

if(arr.length==0 || typeof(arr)!=Object) return false;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            // if(element1==6){
            //     console.log("present")  // present or not question
            // }
            if(i!=j && arr[i][j] != 0){
                    // console.log("Not a diagonal matrix");
                    return false; // return nahi ho rha h 
                    // return;
                    // return false;  // doubt hai
            } 
        };
    };
     return true;
    
}

console.log(diagonal(1344));