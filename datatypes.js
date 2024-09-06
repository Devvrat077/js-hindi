
"use strict"; // this enables to treat all the code as newer version

/* alert(3+3);   we can use this function in browser with html file or on console of browser 
but here we are using node js compiler so we will not use this function like this , 
it has different syntax for node js*/

// DATA TYPES IN JS

let name = "devvrat singh";  // String data type
let age  =  24; // Number data type,
//Bigint is also a data type for storing big numbers in memory 
let isLoggedIn = true; //Boolean data type ,, we can give value either True/False , True = 1,False = 0
//Null -- it is a standalone value,it is also a datatype
//Undefined --it is a data type , undefined means no value is  assigned to the variable
//symbol -- it is a data type , we use when we define Uniqueness

console.log(typeof "devvrat");  //by this function i.e "typeof" we can know the data type of any provided value
console.log(typeof name);  // by giving the name of variable we can know the data type of that variable. 
console.log(typeof age);  
console.log(typeof null); 
console.log(typeof undefined); // undefined is itself a data type