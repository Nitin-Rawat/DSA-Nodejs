// STACK (PRIMITIVE = strings, bool, int,etc) => creates copy of variable (does not change the orignal value)
// HEAP(NON-PRIMTIVE= array, object, function) => give refrence of variable ( change the orignal value)

let myYoutubename = "Hiteshchoudhary";

let anotherName = myYoutubename;
anotherName = "NITIN";

console.log(myYoutubename); // Hiteshchoudhary

console.log(anotherName); // NITIN

let userOne = {
  email: "user@google.com",
  upi: "upi@ybl",
};

let userTwo = userOne;
userTwo.email = "niin@google.com";

console.log(userOne); // { email: 'niin@google.com', upi: 'upi@ybl' }

console.log(userTwo); // { email: 'niin@google.com', upi: 'upi@ybl' }
