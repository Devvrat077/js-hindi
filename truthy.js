// In JS we have some 'falsy' and 'truthy' values which are preassumed in JS as  'false' and as 'true'.

// 1st - falsy values ----

// false , 0 ,-0 ,null ,undefined , BigInt 0n , "" (empty string), NaN

// 2nd - Truthy valuyes -----

/* true , " " (string with space , not empty), "anythingwritteninstring" , "false" , {} (object) ,
 [] (array), function(){} . */

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