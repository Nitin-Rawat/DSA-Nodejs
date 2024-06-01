#include <iostream>
using namespace std;

// Single Level inheritance;

class animal
{

public:
    int age;
    int weight;

public:
    void speak()
    {
        cout << " speaking " << endl;
    }
};


class dog : public animal {
public:
char name;

};

int main()
{
    dog d;
    cout<<d.name <<endl;
    cout<<d.age <<endl;
    cout<<d.weight <<endl;

}