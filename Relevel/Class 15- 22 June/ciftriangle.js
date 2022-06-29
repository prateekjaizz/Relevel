function triangle(a,b,c){
    if(a+b<=c || b+c<=a || a+c<=b){
        return false;
    }
    else{
        return true;
    }
}

console.log(triangle(6,7,8));


console.log(3**6);