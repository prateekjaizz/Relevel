//Function 

#include <iostream>
using namespace std;

int factiorial(int a){
    int fact=1;
    while(a>0){
        fact=fact*a;
        a--;
    }
    cout<<fact;
}

int main(){
factiorial(4);

}