#include <iostream>
using namespace std;


int main() {
    int row, col;
    cin>>row>>col;

    // for(int i=1;i<=row;i++){
    //     for(int j=1;j<=col;j++){ // rectangle
    //         cout<<"*";
    //     }
    //     cout<<"\n";
    // }

    // for(int i=1;i<=row;i++){
    //     for(int j=1;j<=col;j++){ //hollow rectangle
    //         if(i==1||i==row||j==1||j==col){cout<<"*";}
    //         else{cout<<" ";}
    //     }
    //     cout<<"\n";
    // }


    // for(int i=row;i>0;i--){
    //     for(int j=1;j<=i;j++){ //inverted half pyramid
    //         cout<<"*";
    //     }
    //     cout<<"\n";
    // }

    // for(int k=1;k<=row;k++){
    //     int s= row-k;
    //     for(int j=0;j<=s;j++){
    //         cout<<" ";              //first half pyramid
    //     }
    //     for(int j=1;j<=k;j++){
    //         cout<<"*";
    //     }
    //     cout<<"\n";
    // }   


    // int count=1;
    // for(int i=1;i<=row;i++){
    //     for(int j=1;j<=i;j++){  // number pyramid
    //         cout<<count;
    //     }
    //     cout<<"\n";
    //     count++;
    // }


    //  int count=1;
    // for(int i=1;i<=row;i++){
    //     for(int j=1;j<=i;j++){ //floyd's triangle increasing number pyramid
    //         cout<<count;
    //         count++;
    //     }
    //     cout<<"\n";
    // }



    // int s=(row*2)-2;
    // for(int i=1;i<=row;i++){
    //     for(int j=1;j<=i;j++){
    //         cout<<"*";
    //     }
    //     for(int j=1;j<=s;j++){
    //         cout<<" ";
    //     }
    //     for(int j=1;j<=i;j++){
    //         cout<<"*";
    //     }
    //     cout<<"\n";
    //     s=s-2;
    // }                                        ///butterfly pattern
    // int y=0;
    // for(int i=row;i>0;i--){
    //     for(int j=1;j<=i;j++){
    //         cout<<"*";
    //     }
    //     for(int j=1;j<=y;j++){
    //         cout<<" ";
    //     }
    //     for(int j=1;j<=i;j++){
    //         cout<<"*";
    //     }
    //     cout<<"\n";
    //     y=y+2;
    // }
} 
