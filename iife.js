// => iife - imidiately invoked function expression 
// = > it is responsible for auto and imidiate execution of Functions.
// syntax --- 

/* (function()
{code to be executed})(); */

// exp -------

(function(){
    console.log("the sum of the numbers is = ");
    
})();   // = > here we do not given any name or any any parameter to the function .

// Below is the exp of Named iife ---------- name => sum.

(function sum(num1,num2){
    console.log(num1+num2);
    
    
})(5,5);     // => here we have given name and parameter to the function.

// ------------ iife on arrow functions ------------

(() => {
    console.log("its an arrow function");
    
})(); 

((name) => console.log(`${name}, it is an implicit arrow function`)
)("Devvrat");   // => here we have passed  a para in implicit iife  function.


//  Note  -  after making iife we always have to put semicolon (;)  otherwise without it the functions below one iife function will not execute.



