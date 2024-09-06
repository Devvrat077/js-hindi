//-----------------------Stack Memory----------------------------
/* All the Primitive datatype [string,number,boolean,null,defined,symbol,bigint] get stored on Stack Memory

In stack memory we get a copy of variable to update or manupulate it -----exp */

let  name1 = "devvrat";

let name2  = name1;//here we assigned the value of name1 to name2 variable

// console.log(name2);// => we get devvrat as output for name2 variable

name2 = "divyansh";// here we updated the value in variable name2 from devvrat to divyansh

console.log(name2);// => we get output divyansh as we updated  latestly above
console.log(name1);//=> here we get output devvrat that we at first assigned to name1 ,but after updating name2
//variable with divyansh value we are expecting to get same divyansh value in name1 variable also, bcz
// we have declared above that name2 = name1 ,,, but we get the original value of name1 i.e devvrat
//this implies that we got a copy of variable name1 in stack memory.

//note - the stack follows the LIFO principle i.e last value added to the stack is the first one to be removed. 

//---------------------------Heap Memory----------------------------------
/* All Non-primitive data [Array, Object, Function] types get stored on Heap memory.
in Heap Memory we do not get copy of variable like we get in Stack Memory,
in Heap, the object data get direct stored in the Heap while a reference(like a pointer) to that object data
 get stored in Stack.
 In Heap we get refrence to the orignal data , if we update  a variable in heap it will also get 
 updated in orignal variable. exp-- */

 let object1 = {
    email : "divyanshsinghrajput3@gmail.com" ,
    phoneNo : 8467873107 ,
 };

let object2 = object1;// assigning object1 values into object2

object2.email = "devvrats.tcs@tatamotors.com";// updating value of email

console.log(object2.email);// => devvrats.tcs@tatamotors.com , updated output printed

console.log(object1.email);// => here is Orignal First variable , devvrats.tcs updated email printed. which is changed in orignal variable also

