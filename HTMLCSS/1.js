let input=[1,2,3,1,4,2,5];
let n=7;

let obj={ 1:2,2:3};
console.log(obj[])
console.log(Object.keys(obj))
for(let element of Object.keys(obj)){
  console.log(obj[element])   // . not working why??
}
let count = 0;
for(let i=0;i<n;i++){
    if(obj.input[i]){
           obj.input[i]++;
         }
     else {
          obj.input[i]=1;
       }
}
for(let element of Object.keys(obj)){
        if(obj.element == 1){
            count= count+element;
           }
  }
console.log(count);