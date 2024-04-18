const name = "Nitin"
const repoCount = 2

// avoid this because it is outdated cause of readability
// console.log(name + repoCount +" values");


// This is called strings interpolation
//console.log(`Hello this is ${name} and  my repoconut is ${repoCount} `);

const gameName = new String('The Legend Of Zelda')

// gameName.greeting = 'Welcome to'
//console.log(gameName.greeting+` ${gameName}`);  //Welcome to The Legend Of Zelda


console.log(gameName[0]); //T
console.log(gameName.toUpperCase());
console.log(gameName.slice(0,6));   //The Le
console.log(gameName.lastIndexOf("T")); //0