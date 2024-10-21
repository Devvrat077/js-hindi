// In JS we have some 'falsy' and 'truthy' values which are preassumed in JS as  'false' and as 'true'.

// 1st - falsy values ----

// false , 0 ,-0 ,null ,undefined , BigInt 0n , "" (empty string), NaN

// 2nd - Truthy valuyes -----

/* true , " " (string with space , not empty), "anythingwritteninstring" , "false" , {} (empty object) ,
 [] ( empty array), function(){}  (empty function). */

 //exp --
 
 const haveMailId = false;

 if(haveMailId) {
    console.log("yes mail id found");
    
 }
else{console.log("no mail id not found");
} 

// output => no mail id not found

// exp 2 = > 

const isMarried = "false";

if (isMarried) {
    console.log("yes married");
    
    
}
else{console.log("not married");
}

// => output => yes married

// during revision please check all values by runing example code .

/* as we seen above that  an empty object , an empty array , a empty function always returns
truthy value .

so , now how we can check in if-else condition wether a object / array is empty  .

exp -------    */

const userNames  = []; // => empty array.........

if(userNames.length === 0){
    console.log("userNames array is empty , no elements are there ");
    
}

const employeeInfo = {};

if((Object.keys(employeeInfo).length === 0)) {
    console.log("employeeInfo object is empty");
    
}


// --  Note -- a comparision is given just for interview point of view.

console.log(false == 0);  // => true
console.log(false == ""); // => true
console.log("" == 0);  // => true


// Nullish Coalescing Operator (??) ----------------
// Basically it deals with 'null' & 'undefined'  values
// it is like Coalescse function of SQL Server
// it returns the first not null / not undefined value.

// exp ---

const num = null ?? 10;

console.log(num); // =>  10

const num2 = undefined ?? 15;

console.log(num2); // => 15

const  num3 = 20 ?? 30 ;

console.log(num3); // => 20

const num4 = null ?? undefined ?? null ?? 50;

console.log(num4); // => 50

const num5 = undefined ?? null;

console.log(num5); // => null

const num6 = null ?? undefined;

console.log(num6); // => undefined

// Terniary operator --- it is a small syntax of if-else statement. 

// syntax =>
    
/*  condition to check ? true_statement : false_statement

exp --    */

const ticketPrice = 500;

ticketPrice >= 250 ? console.log("platinum seat") : console.log("gold seat");
 // => output ==== 'platinum seat'











