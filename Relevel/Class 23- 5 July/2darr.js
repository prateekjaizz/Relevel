let twoa=[
    [9,13],
    [56,34],
    [43,23]
]

for(let i=0;i<twoa.length;i++){
    for(let j=0;j<twoa[i].length;j++){
        console.log(twoa[i][j]*5);
    }
    console.log("______")
}

twoa.forEach((element, mainIndex) => {
    element.forEach((element, index)=>{
        console.log(element,mainIndex, index)
    })
});