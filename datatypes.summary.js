//----------------There are two types of datatypes in JS----------------------------------------------------------

//1st---------------Primitive DataTypes----------------------

//There are 7 Primitive Datatypes --
// String , Number , Boolean , Null , Undefined , BigInt , Symbol .

let name1 = Symbol ("devvrat"); 
let name2 = Symbol ("devvrat");
console.log(name1===name2); //=> False output , as Symbol is used for uniqueness so if data type and infact data
//is same the two or more symbol type variable will never be same ,they will always be unique as like above exp;


//2nd------------------Non-Primitive or Reference Data Type------------

//There are 3 types of Reference Data Types---
// Array , Objects , Functions.

let superHeroes = ["IronMan" , "CaptainAmerica" , "BatMan"];//=> Array , data type is object
 
console.log(typeof superHeroes);

let myInfo = {
    name : "Devvrat",     //=>  It is Object , data type is Object
    age : 22 ,
} 

console.log(typeof myInfo);

let myFunction = function () {
    console.log("hello world")   }   //==>  It is function, we are storing a function in a variable "myFunction" 
                                     //data type is Function  
   

console.log(typeof myFunction);

// ek note ban nana h static AND DYNAMIC LANGUAGE PE JS KE FIRST YA ISI LECTURE ME 