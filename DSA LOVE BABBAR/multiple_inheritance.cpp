#include <iostream>
using namespace std;

// mutliple- Level inheritance;

class animal
{

public:
    int age;
    int weight;

public:
    void bark()
    {
        cout << " barking " << endl;
    }
};

class human
{

public:
    void speak()
    {
        cout << " speaking " << endl;
    }
};

class hybrid : public animal, public human
{
public:
    void hybridFun()
    {
        cout << " hybrid function " << endl;
    }
};

int main()
{
    hybrid obj1;
    obj1.bark();
    obj1.speak();
    obj1.hybridFun();

    return 0;
}