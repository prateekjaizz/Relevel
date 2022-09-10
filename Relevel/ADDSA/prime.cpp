#include <iostream>
using namespace std;

// long int - 8 bytes
// short int 2 bytes

//\n line break
// ctrl alt n

int main()
{

    // int a= 23;
    // if(a%2==0){
    // cout <<a;
    // }
    // else{
    //     cout << "odd";
    // }
    // int n;
    // cin >> n;
    // cout<<n;
    // while(n>0){
    //     cout<<n;
    //     cin>>n;
    // }
    //     for(int i=0;i<=4;i++){
    //         cout<< i << endl ;

    //     }
    int a;
    cin >> a;
    int b;
    cin >> b;

    
    for (int i = a; i <= b; i++)
    {
        int j;
        for (j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                break;
            }
        }
        if (j==i)
        {
            cout <<j;
        }
    }
}

// cin input

// break terminate the loop

// continue will skip the current loop
