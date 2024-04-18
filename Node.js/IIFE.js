// Imediately Invoked Funtion Expression (IIFE) : Which function can executed imediately
// We use IIFE to get rid of global polution 

//NAMED IIFE
(function chai(){
    console.log("DB connected"); // DB connected
})(); // we need to use ; because IIFE does not know where to stop so 


// SIMPLE IIFE
(  (name) =>{
    console.log(`DB2 connected ${name}`); // DB2 connected undefined if we dont give values to 2nd ()
} )("NITIn") // DB2 connected NITIn

