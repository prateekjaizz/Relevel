let hobbies = [1,2,3,4];

for(let hobby of hobbies){
    console.log(hobby);
}

let users=[
    {name:"prateek", age: 21,hobbies: [1,2,3,4] },
    {name:"shiv", age: 21,hobbies: [1,2,3,4] },
    {name:"hari", age: 21,hobbies: [1,2,3,4] },
    {name:"krishna", age: 21,hobbies: [1,2,3,4] },
    {name:"ram", age: 21,hobbies: [1,2,3,4] },
]
for(let user of users){
    console.log("Name" + user.name);
    console.log("Age"+ user.age);
    
    for(let i=0;i<user.hobbies.length;i++){
        console.log(`Hobby ${i+1} is ${user.hobbies[i]}`);
    }
}

//(i*c+j)*B

