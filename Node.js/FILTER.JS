const myNums  = [1,2,3,4,5,6,7,8,9,10]

// // const newNumbers = myNums.filter((num) => num>5) // return values unlike for each
// // if we use {} in filter we have to give explecit return

// const newNumbers = myNums.filter((num) => {
//    return num>5} // [ 6, 7, 8, 9, 10 ]
// )
// console.log(newNumbers); // [ 6, 7, 8, 9, 10 ]


//same thing using FOR EACH

const newNum = []

myNums.forEach( (num) =>{
   if(num>4){
      newNum.push(num)
   }
})
console.log(newNum); // [ 5, 6, 7, 8, 9, 10 ]
