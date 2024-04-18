//Object Literals


const mySym = Symbol("ABC")

const jsUser = {
    name : "NIITN",
    email : "abc@gmail.com",
    age : 21,
    isLoggedIn : false,
    lastLoginDay : ["monday", "sunday"],
    "full name" : "NITIN Rawat",
    [mySym]: "XYZ",  //mySym will should be [MySym] for using symbol
}

// console.log(jsUser.email);
// console.log(jsUser["email"]); 
//OUTPUT: 
// abc@gmail.com
// abc@gmail.com

// console.log(jsUser.full name); //will not work
// console.log(jsUser["full name"]); //will work
// console.log(jsUser.full); //output : undefined

// console.log(jsUser[mySym]); // symbol can be use by this syntax only

jsUser.email ="XYZ@GMAIL.COM";   //we can update object value like this 
//but we dont want to update any value we can use Freez()
Object.freeze(jsUser) ;

jsUser.email ="+++++@GMAIL.COM";  // this will not be updated
console.log(jsUser.email);  
//Output : XYZ@GMAIL.COM


console.log(jsUser);