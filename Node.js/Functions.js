// function addTwoNumbers(num1 , num2) { // num1 , num2 called parameterse
//     let result = num1+num2
//     return result
// }

// // addTwoNumbers(2,3) // 2, 3 called arguments

// const result = addTwoNumbers(2,3)
// console.log(result); // O/P : undefined because write now result is not returning anything

// function logIn (userName) {
//     if(userName === undefined){  // userName === undefined  is same as !userName 
//         console.log("Enter username");
//         return
//     }
//     return `${userName} just logged in`


// }
// console.log(logIn()); // O/P : undefined

// function logInUser (userName = "SAM") {  //sam is a default value we can override it ==> console.log(logInUser("NITIN"));
//     if(userName === undefined){  // userName === undefined  is same as !userName 
//         console.log("Enter username");
//         return
//     }
//     return `${userName} just logged in`


// }
// console.log(logInUser("NITIN"));  //  NITIN just logged in



// function calculateCartPrice(...num1){ // (...) is called Rest/Spread Operator depending on where we use it, 
//                                      // It's used to take multiple values in funtions
//     return num1
// }
// console.log(calculateCartPrice(400,500,100)); // It will result an array [ 400, 500, 100 ]

// function calculatePrice(val1,val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(400,500,100, 300,4509,3047,345));
//         // 400,500, =>val1,val2,  and then rest goes to (...num1) => 100, 300,4509,3047,345

/*
const user = {
    username : "NITIN",
    prices : 199
}

function handleObject(anyobject){

    console.log(`Username is ${anyobject.username} and Price of the product is ${anyobject.prices}`);     // Username is NITIN
}

handleObject({ // We can also  pass object like this.
    username : "SAM",
    price :200

})

const myNewArray = [200,30,480]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); //30





console.log(add_1(5))
function add_1 (num){
    return num+1
}

// add_2(5)  : if i do this it will throw error becuase now add_2 is a variable
const add_2 = function(num){
    return num+2
}
add_2(5)

*/




