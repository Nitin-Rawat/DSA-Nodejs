#include <iostream>
using namespace std;

// Hybrid inheritance : mix of more than two types of inehritance;

// :: scope resolution operator used to solve ambiguity in code ex: if we have two function with same name in two different class. we can specify it like obj1.A:: sameFun();   obj1.B:: sameFun();

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

class D{
    public:
    void funD(){
        cout<<" function D"<<endl;
    }

};
class C : public A ,public D // Hybrid inheritance.
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

    D obj4;
    obj4.funD();


    return 0;
}