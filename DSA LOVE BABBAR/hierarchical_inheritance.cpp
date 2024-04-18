#include <iostream>
using namespace std;

// Hierarchical inheritance;

class A
{

public:
    int age;
    int weight;

public:
     void funA()
    {
        cout << " function A  " << endl;
    }
};

class B : public A
{

public:
     void funB()
    {
        cout << " function B " << endl;
    }
};

class C : public A
{
public:
    void funC()
    {
        cout << " function C  " << endl;
    }
};

int main()
{
    A obj1;
    obj1.funA();

    B obj2;
    obj2.funB();

    C obj3;
    obj3.funC();


    return 0;
}