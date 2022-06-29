function gcd(a,b){

        res=Math.min(a,b);
        while(res>0){

            if(a%res==0 && b%res==0){
                console.log("GCG is :- ",res);
                break;
            }

            res--;
        }
}

gcd(10,15);