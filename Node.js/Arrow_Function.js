// const user= {

//     userName :"NITIN",
//     price : 999,
//     welcomeMessage: function(){  // this is used to refer current context,
//         console.log(`${this.userName}, welcom to the websites`);
//         // console.log(this);
//     }

// }
// user.welcomeMessage()
// user.userName = "RAWAT"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//         let userName = "NITIN"
//         console.log(this.userName); // undefined
//     console.log(this); // <ref *1> Object [global] {  global: [Circular *1], clearImmediate: [Function: clearImmediate],................... Random Values
// }
// chai()


// const chai = ()=>{
    
// let userName = "osho"
// console.log(this.userName); //undefined
// console.log(this); // {}

// }
// chai()

//  ++++++++++++++++++++++++++++++++ implecit  vs explecit return+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const addTwo = (num1, num2) =>{  // when we use {} return keyword is must called explecit return
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2   // will add
// const addTwo = (num1, num2) => (num1 + num2) // when we use () return keyword is not necessary called implecit return.

// console.log(addTwo(2,3));
