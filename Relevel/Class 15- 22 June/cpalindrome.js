let word="nayan";



let count=0

for(let i=0;i<=Math.floor(word.length/2);i++){
    
    if(word[i]==word[word.length-1-i]){
        count++;
    }
    else{
        console.log("No Its Not a Palindrome");
    }
    if(count==Math.floor(word.length/2)){
        console.log(word + " is a Palindrome");
    };
    

}


function pal(word){

    let count=0

    for(let i=0;i<=Math.floor(word.length/2);i++){
    
        if(word[i]!=word[word.length-1-i]){
            return false;
        }

    }

    return true;

}

console.log(pal("naayan"));