// Half Pyramid

// let number=3;

// function Star(number){

// let str="*";
// console.log(str)
// // console.log("hardika")
// for(let i=1;i<=number-1;i++){
//     str=str+"**";
//     console.log(str);
// }

// }

// Star(3);

// *
// ***
// *****
// *******



//nested loops

// let a=4
// // let b=5

// for(let i=1;i<=a;i++){ /// 1 * 2 * 3 * 4

//      for(let j=1;j<=i;j++){ /// 1 * 2 * 3 * 4
//         console.log("*")
//      }

// }

// 4 * 5 = 20

// RECTANGLE 

// let str="";

// *****
// *****
// *****



// let number=0;
// for(let i=1;i<=5;i++){ // i = 1,2
//                                 for(let j=1;j<=i;j++){ 
//                                     number=number+1;
//                                     console.log(number);  ////// Har bar ka output
//                                     console.log("____");
//                                 }

//     console.log("-------")
// }

// i = 1 , number = 1 , j <=1
// i = 2 , number = 2 , j <= 2 , number = 3 


// let a=3;
// let b=4;

//  for(let i=1;i<=a;i++){
//      console.log("*".repeat(b));
// }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
// ****
// *  *
// ****

// function rectangle()

// let str="";

// for(let i=1;i<=5;i++){
//     console.log(str+"*".repeat(i));
// }

// *****
// ****
// ***
// **
// *

     01234
// 0-*****    --- 0,0  0,1  0,2  0,3  0,4
// 1-*   *    --- 1,0                 1,4  
// 2-*****    --- 2,0  2,1  2,2  2,3  2,4


//  if(i == 0 || i == 2 || j == 0  || j == 4){
//          console.log("*")
//}
//   else{
// 
// }


//     *
//    **
//   ***
//  ****
// *****



for(let i=1;i<=3;i++){
     for(let j=1;j<=5;j++){
        if(i == 1 || j == 1 || i == 3 || j == 5)
    process.stdout.write("*")
    else
    process.stdout.write(" ")
     }
}