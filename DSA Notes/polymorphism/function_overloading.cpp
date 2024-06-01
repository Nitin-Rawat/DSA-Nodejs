#include<iostream>
using namespace std;  

// polymorphism has two types : compile time ploymorphism  ,  Run time ploymorphism
//  polymorphism is done by inheritance only.
// compile time ploymorphism = static poly  // method overloading possible in compile time.

// run time ploymorphism = dynamic poly  // method overriding possible in run time.
class A {

    public:
    void sayHello() {
        cout << "Hello Nitin 1 " << endl;
    }
    // int sayHello() { // just changing type and return type is not overloading. we have to pass different argument.
    //     cout << "Hello Nitin " << endl;
    //     return 0;
    // }
    
    int sayHello(char name) { // method overloading  
        cout << "Hello Nitin 2 " << endl;
        return 1;
    }

    void sayHello(string name) { // method overloading  with different argument.
        cout << "Hello  3" << name  << endl;
    }

};

int main(){
A obj1;
obj1.sayHello();
obj1.sayHello('G');
obj1.sayHello("  sukuna");
}