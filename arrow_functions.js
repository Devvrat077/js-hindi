 // this => in javascript refers to an object name . we can access the key value pairs of an object by using 'this'
 // this is used in current context . 
 // it does not works outside the current context.
  
// -------'this' in an object .

 let user  = {
    userName:"devvrat",
    age:24,
    welcomeMsg: function() {
        console.log(this.userName+"  "+"welcome to coading world"); // here 'this' refers to the object name 'user' , we can also write user.username 
        console.log(this); // it will print all the key and values of the object but not print the values inside the function only print the name of function.
        
    }
 }

 console.log(user.userName);
 user.welcomeMsg();
 
user.userName = "sam";
console.log(user.userName);
user.welcomeMsg();


console.log(this); // => it will give {} an empty object when we execute in global scope.


////--------------- 'this' in a function 

function partGeanolgy() {

    console.log(this); // => when we print this in a function it will give many values , it will not give empty object {}
    
    let  partName = 'steringgearbox';
    console.log(this.partName); // => it will give 'undefined' 
    
}

partGeanolgy(); 

// conclusion  => 'this' is not usable in function to print an value of  a variale . it is only useable to print value in objects.


// --------  functions  expression type  - ------------

let myfunction = function(a,b){
   console.log(a+b);
   
}

myfunction(10,67);

// note - when we store a function into a variable then  it is called as expression type function.

let myfunction2 = function(){
    let car = "jaguar";
    console.log(this); // when we print this in a function it will give many values , it will not give empty object {}
    console.log(this.car); // it will give 'undefined' 
    
    
    
    
 }
 
 myfunction2();


 // ------------- arrow functions ------------------

 let function3 = () => {

    console.log(this); // => it will give  empty object  {}
    let tataCar = "safari";
    console.log(this.tataCar); // => undefined 
    
    
 }

 function3();

 // now  we will talk about arrow functions 

 //syntax --

 () => {}

 // we  can also hold arrow function into a variable 

 let sum  = (num1,num2) => {
      return num1+num2; 
   
 }

 console.log(sum(27,25)); // => 52


 // we can use arrow function  in another way which is called as "implicit arrow function."

 let multiply = (p,q) =>  p*q;  
 
 console.log(multiply(7,7)); // => 49 

 // in implicit function we  do not use curly braces , and write the execution code in same line .
 // we can use parenthesis in place of curly braces in implicit function . exp ---

 let divide = (x,y) =>  (x/y);  
 
 console.log(divide(7,7));  //  = > 1

 // note as we can see above when we use {} then we have to write "return" keyword
// but when we use no bracket or parenthises () then "return" keyword is not required.


//note  - if we want to retun an object by an implicit arrow function then we will bind object in parenthises ().


let objfunction = () => {city:"lucknow"} ;

console.log(objfunction()); // => undefined , without using ()

let objfunction = () => ({city:"lucknow"}) ;

console.log(objfunction()); // >  { city: 'lucknow' } ,  after using () it returns the object.



// => Note  ,,  we can hold a Arrow function into a variable but we cannot name a Arrow function , 
// Arrow function  is always anonymous i.e. without name .

 