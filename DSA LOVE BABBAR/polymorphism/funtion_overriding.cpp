#include<iostream>
using namespace std;


// run time ploymorphism = dynamic poly

class animal{

public: 
void speak(){ 
    cout<< "Speaking  " <<endl;
}
};
class dog : public animal{

public: 
void speak(){   // method overriding . 
    cout<< "Barking  " <<endl;
}
};



int main(){

dog d;
d.speak();
}