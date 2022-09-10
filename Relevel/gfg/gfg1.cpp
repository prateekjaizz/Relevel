// subarray sum = given number

// [1,2,3.7,5]

#include<iostream>
using namespace std;

int subarray(int arr[],int n, int s){
    for(int i=0;i<n;i++){
        int element=arr[i];
        for(int j=i+1;j<n;j++){
            element=element+arr[j];
            if(element>s){
                break;
            }
            else if(element==s){
                cout<<i+1<<j+1;
                break;
            }

        }
        if(element==s){
            break;
        }
    }
}


int main(){
    int array[5]={1,2,3,7,5};
    subarray(array,5,12);
    }

