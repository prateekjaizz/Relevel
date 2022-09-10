//prime number
//reverse a number
//amstrong number

#include <iostream>
// #include <cmath>
#include <math.h>
using namespace std;
int main(){
    // int n=32;
    // int flag=0;

    // for(int i=2;i<=sqrt(n);i++){   // sqrt of n tk
    //     if(n%i==0){                      //PRIME
    //         cout<<"Not Prime";
    //         flag=flag+1;
    //         break;
    //     }
    // }
    // if(flag==0){
    // cout<<"prime";
    // }

    int n;
    cin>>n;
    // int num=0;
    // while(n>0){
    //     int ldigit=n%10;
    //     num=num*10 + ldigit;
    //     n=n/10;
    // }
    // cout<<num;


    int initial=n;
    int num=0;
    while(n>0){
        // cout<<n<<endl;
        int ldigit=n%10;
        // cout<<ldigit<<endl;
        cout<<pow(ldigit,3)<<endl;
        num=num+round(pow(ldigit,3));

        n=n/10;
        cout<<num<<endl;
    }
    cout<<num;
    // if(num==initial){
    //     cout<<"Yep";
    // }
    // else{
    //     cout<<"nope";
    // }

}

//153   1*1*1 + 5*5*5 + 3*3*3 = 153