
//  let sum=0;
// function add(n){
    
//     let digit = n%10;
//     sum=sum+digit;
    
    
//     n=Math.floor(n/10);
//     // console.log(sum)
//     // console.log(n)
//     if(n<10){
//         let newv =sum+n;
//         // if(newv>9){
//         //     sum=0
//         //     add(newv);
//         //     console.log("ye");                 //code until single digit
//         //   }
//         console.log(newv);
//         return;
//     };
//     add(n)
// }

// add(1345)

//DOWN IS THE PROGRAM OF ADDING ALL NUMBER TILL GIVEN NUMBERS
// const sum=(num)=>{
//     if(num>0) {
//         return num + sum(num-1); //recurssion with return
//     }
//     else return num; 
// }

// console.log(sum(12));


// function sum(num){
//     if(num<10) return num;
//     const lastd=num%10;
//     const remain=Math.floor(num/10);
//     return sum(lastd + sum(remain)); //// writing sum will make until single digit
// }

// console.log(sum(99));