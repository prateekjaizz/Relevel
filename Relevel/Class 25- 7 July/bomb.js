let Mat=[
    [1,2,3],
    [2,-1,5],
    [4,5,6]
]


Mat.map((element, index)=>{
    element.map((nestedel, nestedi)=>{
        if(nestedel==-1 && Mat[index][nestedi+1]){
            
            Mat[index][nestedi+1]=Mat[index][nestedi+1]+1;
            console.log(Mat);
            
        }
    })
})