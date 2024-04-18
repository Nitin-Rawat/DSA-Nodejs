const marvel_heros = ["Thor", "Iron  Man", "Spider-Man"];
const dc_heros = ["Superman","Flash", "Batman"]

// not a good syntax => push => No return of new array
// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][0] );

// Output: Thor, Iron Man, Spider-Man, [Superman, Flash, Batman ]


//Concat returns new array
// const newArray = marvel_heros.concat(dc_heros)
// console.log(newArray);

//Output : [ 'Thor', 'Iron  Man', 'Spider-Man', 'Superman', 'Flash', 'Batman' ]


//Similar to Concat but it can takes multiple arguments
// const all_new_heros =  [...marvel_heros,...dc_heros]
// console.log(all_new_heros);    

// OUTPUT : [ 'Thor', 'Iron  Man', 'Spider-Man', 'Superman', 'Flash', 'Batman' ]


// const another_array = [1,2,3,[4,5,6],7,[8,9,[10]]]
// const flat_array = another_array.flat(Infinity)
// console.log(flat_array);

//output : [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]


// console.log(Array.isArray("NITIN"));    
// console.log(Array.from("NITIN"));
// console.log(Array.from({name:"NITIN"})); //interesting

// output: 
    // false
    // [ 'N', 'I', 'T', 'I', 'N' ]
    // []


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
// Output : Array [ 100, 200, 300 ]
