#include <iostream>
using namespace std;

// mutli- Level inheritance;

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
string name = "dolly";
 void dogName()
 {
     cout << name<< endl;
 }
};

class GermanShepred : public dog
{
public:
  void GermanShepredName()
  {
      cout << "GermanShepred" << endl;
  }
};


int main()
{
    // dog d;
    GermanShepred g;

    cout<<g.name <<endl;
    cout<<g.age <<endl;
     g.dogName();
    g.GermanShepredName() ;

    return 0;

}