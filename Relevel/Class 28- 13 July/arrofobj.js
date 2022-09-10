let student =[
    {
        name:"Prateek",
        class:"three",
        roll: 23,
        sub: [1,2,3]
    },
    {
        name:"Prat",
        class:"thr",
        roll: 2
    },
    {
        name:"eek",
        class:"ee",
        roll: 3
    }
]

let student1 = student[0];

// let {
//     class        
// } = student1;          // doubt
// console.log(class);




for(let key in student1){
    console.log(` The ${key}, of student1 is ${student[key]}`);
}





let arr=[1,2,3,4,5,6,7]
let [,,ele1,ele2, ...rest]=arr;
let [,,,,,el1,el2] =arr;

console.log(rest)