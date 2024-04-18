#include<iostream>
using namespace std;

class human
{
private:
int age;


public:

int height;
int weight;


public:

int getage()
{
    return this->age;
}

void setage(int age)
{
    this->age=age;
}
   

};


class male : public human{
    public:
    int color;

    // void sleep(){
    //     cout<< "Sigma Just Sleeps " <<endl;
    // }
    int getHeight(){
        return this-> height;
    }
    // void setHeight(int height){
    //     this-> height = height;
    // }

};




int main(){
    male m1;
    male m2;
// m1.setHeight(50);
// m2.setHeight(50);
cout <<m1.getHeight();
// cout <<m2.height;

}