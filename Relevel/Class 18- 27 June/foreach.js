let arr=[1,2,3,4,5,6,7];
let obj={
    Hello:[{Acha:5,
                thk:4,
                 or:5}]
    
//forEach Not used for Objects
}

let bigarr=new Array(100);
bigarr.forEach((element)=> { //------ DOESn't work for big arrays
    console.log(element);
});



//Foreach doesn't return aything unless console.log
arr.forEach((element)=> {
    console.log(element);
});

//Map returns values




obj.Hello.forEach((element) => {
    console.log(element);
});

obj.Hello.forEach((element, index) => {
    console.log(`In Index ${index} Yo ${element.Acha} sab${element.thk}`);
});

let map=obj.Hello.map(function (element,index) {
    return (`In Index ${index} Yo ${element.Acha} sab ${element.thk}`);                    //aise bhi likh skte hain
});

console.log(map);

function mapping(kuchbhi){
       return kuchbhi.map((element, index) => {//element doesn't work for Object Keys
       return (`Yo hai maara ${element.thk} aur yo hai ${index} `); //object is not shown without the key reference
    });
}

console.log(mapping(obj.Hello));