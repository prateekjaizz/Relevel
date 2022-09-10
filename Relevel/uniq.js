let arr=[10,11,9,9,3]


for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){

            if(i!=j && arr[i]==arr[j]){
                arr[j]=arr[j]+1;
                count++;
            }

        }
   
}

console.log(arr);