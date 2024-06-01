#include<iostream>
using namespace std;

class student{

private:
string name;
int age;
int  height;


public :
int getAge(){
    return age;
}
int getHeight(){
    return height;
}
string getName(){
    return  name;
}

void setHeight(int h){
   height = h;
}
void setName(string n){
    name = n;
}
void setAge(int a){
    age = a;
}

};


int main()
{
    student rawat;
    rawat.setAge(21);
    rawat.setHeight(170);
    rawat.setName("NITIN");
    
    cout<<"AGE : "<<rawat.getAge()<<endl; 
    cout<<"name : "<<rawat.getName()<<endl; 
    
    cout<< "height : "<<rawat.getHeight()<<endl;

return 0; 
}