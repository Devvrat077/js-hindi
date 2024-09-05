// JavaScript Scope determines the accessibility of the variables. i.e how and where a variable can be accessed.
// Scope in JS are of 3 types.
// 1st - Block Scope
// 2nd - Global Scope
// 3rd - Finction Scope

// how we declare Scope --- 
// {} curly braces in if/else statements, loops ,functions are Scope ---
// {} curly braces in declaring object , API is not Scope. it is syntax of them ----

let a = 500;
const b = 600 ;
var c = 700;

if (true) {
    let a = 30;
    const b = 50;
    var c = 70;
    
    
}

// console.log(a); // => throw an error. , let throws error , so it is a Block Scope.
// console.log(b); // => it also throw an error. , let throws error , so it is a Block Scope.
console.log(c); // => 70 , Var do not throws error and gave output 70. , so var is not a Block Scope. i.e 
// variables declared with Var key word do not have Block Scope , and can be accessed from outside the Block.
// like we seen above .

/* What is Block Scope  ---- 
Variables  declared inside the Scope with Let , Const key word are Block Scope , they can not be accessed from outside the Scope.
but these variables (declared with let/const keyword) can accessed within that Block in which they are declared. */

// lets look into another pratical ----- 
// we will declare  above same variables  again above the function but outside the Block and then again print it.



console.log(a); // => 500 , we get 500 not 30 , that means  the variable a declared in Scope only limit to the scope . can not be accessed from outside
console.log(b); // => 600 , we get 600 not 50 , that means  the variable b declared in Scope only limit to the scope . can not be accessed from outside 
console.log(c); // => 70  , we get 70 from Scope declared variable , rather than we declared the c variable above the function with 700 value . so conclusion  => variable declared with var keyword is not a Block Scope it can be accessed from outside the Scope , thats why we do not use var in while programming in java script.this is the limitations of the var key word.

// if we want to print the let and const declared variable inside the scope then we will access  them inside the scope.
// take a new exp == 

if (true) {
    let p = 9999;
    const q = 8888;
    var r = 7777;
    console.log('let declared variable In side scope result ',p);  // => 9999 , we can see that let declared variable are accessable inside the Scope but not outside the Scope
    console.log('const  const declaredIn side scope result ',q);  // => 8888 , we can see that const declared variable are accessable inside the Scope but not outside the Scope
    
}


// Final Conclusion ---
/* 1 - variables declared with let / const keyword provide Block Scope in Java script.
   2 - variables declared with var keyword do not provide Block Scope in java script.  
   3 - What is Block Scope - Block Scope means a variable declared in side a Scope can only be accessed from inside that Scope. 
       and can not be accessed from outside the Scope , so that Variable provide Block Scope or called Block Scope.
   */

/* What is Global Scope ------
    1 -Variables declared outside the function are Global Scope . 
    2 - all functions , scripts,codes can access them. 
    3 - Global  scope  variables can be accessed from anywhere in the javascript program.
    4 - variables declared with ket , const, var outside any function or Block provides Global Scope. 
    3 - like we declared  a,b,c variable outside the  above function becomes global.

    */

   
     
   
    
    










