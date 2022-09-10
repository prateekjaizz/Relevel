#include <iostream>
using namespace std;

int main(){
    int row;
    cin>>row;

    // for(int i=row;i>0;i--){
    //     int count=1;
    //     for(int j=1;j<=i;j++){
    //         cout<<count;           // decreasing number
    //         count++;
    //     }
    //     cout<<"\n";
    // }


    // for(int i=1;i<=row;i++){
    //     for(int j=1;j<=i;j++){
    //         if((i+j)%2==0){
    //             cout<<"1";
    //         }                // if i + j even 1, other wise 0
    //         else{
    //             cout<<"@";
    //         }

    //     }
    //     cout<<"\n";
    // }


    // int space=row;
    // for(int i=1;i<=row;i++){
    //     for(int j=1;j<=space;j++){
    //         cout<<" ";
    //     }                            //RHOMBUS pattern
    //     for(int j=1;j<=row;j++){
    //         cout<<"* ";
    //     }
    //     cout<<"\n";
    //     space--;
    // }

    // int space=row;
    // for(int i=1;i<=row;i++){
    //     for(int j=1;j<=space;j++){
    //         cout<<" ";
    //     }
    //     int count=1;             // number increased pyramid
    //     for(int j=1;j<=i;j++){
    //         cout<<count;
    //         cout<<" "; 
    //         count++;
    //     }
    //     cout<<"\n";
    //     space--;
    // }
    
    
    
    
    // int space=row;
    // int num=1;
    // for(int i=1;i<=row;i++){
    //     for(int j=1;j<=space;j++){
    //         cout<<"  ";
    //     }
    //     int count=i;
    //     for(int j=1;j<=num;j++){
    //         if(j<=num/2){
    //             cout<<count;
    //             cout<<" ";
    //             count--;                 //less more number pyramid
    //         }
    //         else{
    //             cout<<count++;
    //             cout<<" ";
    //         }
    //     }
    //     space--;
    //     cout<<"\n";
    //     num+=2;
    // }


    // for(int i=1;i<=3;i++){
    //     for(int j=1;j<=row;j++){
    //         if((i+j)%4==0||i==2 && j%4==0){
    //             cout<<"*";
    //         }                        //zigzag
    //         else{
    //             cout<<" ";
    //         }
    //     }
    //     cout<<"\n";
    // }

    
    // int s=1;
    // int space=row-1;
    // for(int i=1;i<=row;i++){
    //     for(int j=1;j<=space;j++){
    //         cout<<" ";
    //     }
    //     for(int j=1;j<=s;j++){
    //         cout<<"*";
    //     }
    //     cout<<"\n";
    //     s+=2;
    //     space--;
    // }                                //diamond pattern
    // int y=(row*2)-1;
    // int yspace=0;
    // for(int i=1;i<=row;i++){
    //     for(int j=1;j<=yspace;j++){
    //         cout<<" ";
    //     }
    //     for(int j=1;j<=y;j++){
    //         cout<<"*";
    //     }
    //     cout<<"\n";
    //     y-=2;
    //     yspace++;
    // }

    



}


//for(1----4)





//for(4---1)


//     1
//    1 2
//   1 2 3 
//  1 2 3 4 
// 1 2 3 4 5

//      1
//    2 1 2
//  3 2 1 2 3 
//4 3 2 1 2 3 4

//     1
//    2 2
//   3 3 3    
//  4 4 4 4
//  4 4 4 4 
//   3 3 3 
//    2 2 
//     1