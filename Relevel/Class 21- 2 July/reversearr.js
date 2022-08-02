let arr=[1,2,3,4,5]


//Concat merging the array   arr.concat(arr2)

function reverse(arr){
    return arr.length < 2 ? arr: [arr.pop()].concat(reverse(arr));  /// The Time Complexity is Low - Best Case

}

console.log(reverse(arr));


// All negative elements to the right of the array

let array=[-45,2,4,-5,4,6,-8];

// function negative(array){
//     for(let i=0;i<array.length;i++){
//         if(array[i]<0){
//             array.push(array[i]);
//             array.splice(i, 1)
//         }
//     }
//     console.log(array)
//     // return array[i]<0 ? [array.pop()].concat(negative(array)) ;console.log(newv);
// }

// negative(array)

function negative(array){
    array.sort();
    return array.reverse();
}

console.log(negative(array))