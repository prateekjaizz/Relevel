//Prime
//fibonacci
//nCr = n!/(n-r)! * r!

#include <iostream>
#include <cmath>
using namespace std;

int factiorial(int a){
    int fact=1;
    while(a>0){
        fact=fact*a;
        a--;
    }
    return fact;
}


// int fibonacci(int n){
//     int a=0;
//     int b=1;
//     int c;


//    for(int i=1;i<=n;i++){
//         cout<<a<<endl;
//         c=a+b;
//         a=b;
//         b=c;

//    }
// }


// int prime(int n){
//         int flag=0;
//         for(int j=2;j<=sqrt(n);j++){
//             if(n%j==0){
//                 flag++;
//                 return false;
                
//             }
//         }
//         if(flag==0){
//         return true;
//         }
//     }

int main(){
    
    // int n,r;
    // cin>>n>>r;               //binomial coefficient
    // int ncr=factiorial(n)/(factiorial(n-r)*factiorial(r));
    // cout<<ncr;


    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        for(int j=0;j<=i;j++){
            int ncr=factiorial(i)/(factiorial(i-j)*factiorial(j));
            cout<<ncr;
        }
        cout<<endl;
    }




    // fibonacci(8);


    // for(int i = 4;i<=97;i++){
    //     if(prime(i)==true){      //prime
    //         cout<<i<<endl;
    //     }
        
    // }
}