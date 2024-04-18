#include <iostream>
#include <cstring>
using namespace std;

class hero // empty class size is 1 byte becuase it has no data member, 1 byte for tracking the class
{
    // Prperties
private: // can be manipulated by GETTER & SETTER
    int health;

public:         // by default it's always private
    char *name; // name[100] is not good practice
    char level;

    // We can only print the value of "Private" inside class without any error outside of class it will thorw error
    void print()
    {
        cout << endl;
        cout << "[ health : " << this->health << " ";
        cout << ", Level : " << this->level << " ";
        cout << ", Name : " << this->name << " ]" << endl;
        cout << endl;
    }

    int getHealth()
    {
        return health;
    }

    char getLevel()
    {
        return level;
    }

    void setHealth(int h)
    {
        health = h;
    }

    void setLevel(char l)
    {
        level = l;
    }
    void setName(char name[])
    {
        strcpy(this->name, name);
    }

    //  deep COPY Constructure
    hero(hero &temp) // pass by referrence to avoid infinite loop b/w hero or temp
    {
        char *ch = new char[strlen(temp.name) + 1];
        strcpy(ch, temp.name);
        this->name = ch;
        cout << " Deep Copy const... called " << endl;
        this->health = temp.health;
        this->level = temp.level; //(.) because of static allocation
    }

    hero() // constructor has no return  type , and it has the same name as the class called default constructor but when we create a const. it got erased.
    {
        cout << "This  is the  constructor of Hero class." << endl;
        name = new char[100];
    }

    // parameterised constructor
    hero(int health)
    {
        cout << "This -> " << this << endl; // this stores address of current object.
        this->health = health;              // in this case current obj is at line no 8.
    }
    hero(int health, char level)
    {
        this->health = health;

        this->level = level;
    }
};

int main()
{

    hero hero1;

    hero1.setHealth(1000);
    hero1.setLevel('N');
    char name[10] = "nitin";
    hero1.setName(name);

    hero1.print();


    hero hero2(hero1);
    hero2.print();

    hero1.name[10] = 'T';
    hero1.print();

    hero2.print();

    /*
        hero s(70, 'B');
        s.print();

        // Copy constructure(by default like above const...) default copy const is  shallow copy.
        hero R(s);
        R.print();


        // hero nitin(12307);
        //  cout << "hero This : " <<&nitin<<endl;

        nitin.setHealth(123);
        cout << "\n Nitin health is : " << nitin.getHealth() << endl;
        nitin.setLevel('B');
        cout << "\n Nitin Level is : " << nitin.getLevel() << endl;
        hero *b = new hero(); // hero () ==  hero

        */
    /*
    // creation of Object

    hero nitin;
    nitin.level = 'A';
    nitin.health = 50;

    // Use of Setter

    nitin.setHealth(123);
    nitin.setLevel('B');



 // Use of Getter

    cout << "\n Nitin health is : " << nitin.getHealth() << endl;
    cout << "\n Nitin level is : " << nitin.level << endl;



    //++++++++++++++++++++++++++++ STATIC ALLOCATION ++++++++++++++++++++++++++++

    hero a;
    a.setHealth(80);
    a.setLevel('N');
    cout << "\n Nitin health is : " << a.getHealth() << endl;
    cout << "\n Nitin level is : " << a.level << endl;

    //++++++++++++++++++++++++++++ DYNAMIC ALLOCATION ++++++++++++++++++++++++++++
    hero *b = new hero();
    *b = b->
    b->setHealth(10);
    b->setLevel('E');
    cout << "\n Nitin health is : " << b->getHealth() << endl;
    cout << "\n Nitin level is : " << b->level << endl;

//++++++++++++++++++++++++++++ Constructor calling ++++++++++++++++++++++++++++


    // parameterised constructor Object created  using Static memory allocation
    hero ram(10);
    ram.print();

    // parameterised constructor Object created  using dynamic memory allocation
    hero *h = new hero(11);
    h->print();

    hero temp(22, 'B');
    temp.print();
*/
    return 0;
}