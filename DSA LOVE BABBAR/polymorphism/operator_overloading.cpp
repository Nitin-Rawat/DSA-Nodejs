#include<iostream>
using namespace std;

// Operator Overloading

class B {
    public:
    int a;
    int b;

    public: 
    int add() {
        return a+b;
    }

    void operator+ (B &obj) {
       int value1 = this -> a;
        int value2 = obj.b;
        cout << "output " << value2 - value1 << endl; 
        
       cout << "Hello Babbar" << endl;
    }

    // void operator() () {
    //     cout << "main Bracket hu " << this->a << endl;
    // }

};


int main(){


B obj1, obj2;
obj1.a= 2;
obj2.b=4;

obj1 + obj2;

}