// let obj = {name: 'relevel'};

// obj['name'] = 'Relevel by Unacademy'

// console.log(obj.name);

// let arr = [1, 2, 3, 4]

// arr.slice(1, 3);

// console.log(arr);

// let twoDArr = [[1, 2, 3], [4, 5, 6]];

// for(let i = 0; i < twoDArr[0].length; i++){

// for(let j = 0; j < twoDArr.length; j++){

// console.log(twoDArr[j][i]);

// }
// }

// let arr = [97, 967, 121, 11, 13];

// arr.sort();

// console.log(arr);

// let obj = {name: 'abc', age: 1, id: 1}

// console.log(obj['name'], obj.name);

//  //We can use . sort((a,b)=>a-b) to sort an array of numbers in ascending numerical order or . sort((a,b)=>b-a) for descending order.
//  let squareUp = (a) => a * a;

// let multiply = (a, b) => a * b;

// let isEven = (d) => d % 2 == 0;

// console.log(isEven(multiply(7, squareUp(5))));

// let person = {

//     name: 'relevel',
    
//     getName: () => {
    
//     return this.name;
    
//         }
    
//     }
    
//     console.log(person.getName());


//     var tensquared = (function(x) {
//         return x*x;
//     })(10);

//     let arra = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// console.log(arra[2][3]);

// let numbers = [1,2,3,4,5,6,7,8];

// console.log(numbers.map(x => x*x ));
 

// console.log(tensquared)

// let a = 5, b = 10;

// [a, b] = [b, a];

// console.log(a, b);
// function solve(arr, rotations){

//     if(rotations == 0) return arr;
   
//     for(let i = 0; i < rotations; i++){
   
//      let element = arr.pop();
   
//       arr.unshift(element);
   
//     }
   
//     return arr;
   
//    }
   
    
   
//    console.log(solve([44, 1, 22, 111], 5));


//    let heights = readline().split(" ").map(x => parseInt(x)).slice(0, n);

// let n = parseInt(readline());
// let heights = readline().split(" ").map(x => parseInt(x)).slice(0, n);

// function standingRows(heights){
// 	if(n>100){return false};
// 	let newheight=[].concat(heights);
// 	heights.sort(function(a, b){return a-b});
	
// 	let count=0;

// 	for(let i=0;i<heights.length;i++){
// 		if(newheight[i]!=heights[i]){
// 			count=count+1;
// 		}
// 		if(count!=0) return count;
// 		else return 0;
// 	}
//     //write your logic here
// }

// console.log(standingRows(heights));


function uniqueElementSum(n, input){
	let sum=0;
        
            for(let i=0;i<input.length;i++){
                for(let j=0;j<input.length;j++){
                    if(input[i]==input[j]){
                        break;

                    }
                    else{
                        sum=sum+input[i];
                    }
                }// DOUBT PELUM PEL
            }
      return sum
   //write your logic here. Return the output
}
let arr=[1,3,4,2,1]
console.log(uniqueElementSum(5, arr));