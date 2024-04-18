// const tinderUser = new Object()  //=> this is Singleton Object
const tinderUser = {} //=> this is non-Singleton Object
// Both are same on working 
tinderUser.id = "123abc"
tinderUser.name = "Nitin"


const regularUser = {
    email : "abc@gmail.com",
    fullName : {
        userfullname :{
            firstName : "Regu",
            lastName : "Ram"
        }
    }
}

// tinderUser.email = regularUser.email  
// console.log(tinderUser): // O/P:{ id: '123abc', name: 'Nitin', email: 'abc@gmail.com' }


// console.log(regularUser.fullName.userfullname) : //O/P: { firstName: 'Regu', lastName: 'Ram' }
// console.log(regularUser.fullName.userfullname.firstName) : //O/P: Regu

// const obj1 ={
//     1: "a",
//     2: "b"
// }
// const obj2 ={
//     3: "c",
//     4: "d"
// }


//SIMILAR methods

// const obj3 = {obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({}, obj1, obj2)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//  Spread method(latest) =>  const obj3 = {...obj1,...obj2} //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// console.log(obj3)

const users = [
    {
        id : 1,
        email : "adf@gagf",
    },

    {
        aid : 2,
        amnemail : "aieyrgfi@gagf",
    }

]

// users[1].email
// console.log(users)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //Rarely used
// console.log(tinderUser.hasOwnProperty("name")); // Return Boolean


const course = {
    courseName : "Js in hindi ",
    price :"999",
    courseInstructor : "mai"
}



// course.courseInstructor  // insted of writing this multiple time we have another method

const {courseInstructor : instructor} = course // Object De-structuring -- {courseInstructor : instructor}
// console.log(courseInstructor); // 1
// console.log(instructor);// 2  ==>1,2 are same 



