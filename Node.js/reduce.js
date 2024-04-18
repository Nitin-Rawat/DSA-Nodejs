
const arr = [1,2,3]

// const myTotal = arr.reduce(function (acc, currval){
//     console.log(`acc : ${acc} and  currval : ${currval}`);
//     return acc + currval
// },0) // this 0 is assigned to acc.

// console.log(myTotal);
// OUTPUT:-
// acc : 0 and  currval : 1
// acc : 1 and  currval : 2
// acc : 3 and  currval : 3
// 6

// const myTotal = arr.reduce(  (acc, currval) => acc+currval,0 )
// console.log(myTotal);
// OUTPUT:-
// 6


const shoppingCart = [
        {
            itemName : "JS-course",
            price : 999
        },
        {
            itemName : "PY-course",
            price : 900
        },
        {
            itemName : "RB-course",
            price : 9099
        },
        {
            itemName : "MG-course",
            price : 100
        }
]
const pricetoPay = shoppingCart.reduce ( (acc, item) => acc+item.price,0)
console.log(pricetoPay); // 11098
