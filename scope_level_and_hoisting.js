// In this lecture we will talk about nested Scope -----
// Nested Scope can be in a LOOP , Function , If/Else statement-
//  1st ------ lets take an exp of nested scope inside a function -- 

function one() {
    let name = 'ramanujan';

    function two() {
        let subject = 'mathematics';
        console.log(name);
        
    }
    // console.log(subject); // => it throughs an error , look below for justification.
    
    two() // then after first function execution second function will execute.
}

one(); // first function one will execute

/* Rule for nested Scope - 
1st - Parent Scope can not access the variable of its child Scope , it will through error , as because the variable
declared inside the child scope by let/const keyword is Block Scope and cannot access beyond its Scope.

2nd - Child Scope can access the variable of its Parent Scope and will print the output,
bcz for child Scope the Variable of its Parent Scope behaves like a Global variable . also if we look technically
then we will find that the parent variable which we are accessing in the child scope is still inside the Scope
of Parent variable and we are accessing inside it.  */

// 2nd ---------- lets take another exp of Scope nested inside a if/else statement.

if(true) {
    let userName = 'einstien';
    if(userName==='einstien') {
        const profession = 'scientist';
        console.log(userName+' , ' +profession); // => ramanujan einstienscientist
        
        
    }
    // console.log(profession); => error
    
}

// console.log(userName); => error


// ******************************* interesting **************************************

// 1st ---------

console.log(addone(6)); // => 7

function addone(num1) {
    return num1+1;
}

console.log(addone(4)); // =>5


// console.log(addTwo(8)); => error
// addTwo(8); => error

// 2nd ----------

let addTwo = function(num2) {
    return num2+2;
}

console.log(addTwo(10)); // => 12

/* from above both exp analysis ---

1st ---- in first function addone we saw that if we console.log() or execute before the function 
declaration or after the declaration   we will not get any error and get our result , function will execute 

2nd ------ addTwo function declaration is unique type declaration of function we call it expression,
in expression a function is stored in a variable.
n
Now we saw  that if we execute or console.log() a function before its declaration in this type then it
will give an error.
but if we execute or console.log() a function after its declaration then it will give the result and
execute 
as we can see above both examples.

this is called Hoisting , we will learn Hoisting more in future. */


