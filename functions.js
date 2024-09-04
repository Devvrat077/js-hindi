// Function is a code to perform a particular task which can be executed anytime when required. 
// SYNTAX --

/* function function_name(parameter1,parameter2,...) {
     code to be executed written here
} */

     // exp - 

     function callMyBio() {
        console.log('Name : devvrat');
        console.log('company : tata motors');
        console.log('department : it');
                
        
     }

     // how to call a function --------
     
     callMyBio();  /* Name : devvrat
     company : tata motors
     department : it */

     callMyBio; // if we write only function name then it is a Reference to thar function
     callMyBio() // if we attach () with the function name then it is to execute the function.

// 1st method to write the function--------------

     function addition(number1,number2) {
        console.log(number1+number2);
        
     } //// ,, number1 , number2 are Parameters.

     addition(5,15); // => 20  ,,,----- 5,15 are Arguments
      // note addition (argument1,argument2,...) --> when we call a function then if we give some values in parenthises () then the values are called as Arguments.

      // if we want to store the above function result then - -

      let additionResult  = addition(20,20); // => 40 as function executed here
     
      // now we will check wether 40 stored in the variable or not --

      console.log(additionResult); // => undefined ,, here we got undefined i.e function executed value does not store in the variable.
    

// 2nd method to write the function--------


      // how to store in a variable ---------
      // now we will declare variable inside the function -----

     function multiply(a,b) {
        let result = a*b
        console.log('dev'); // it will execute as written before return.
        return result;
        console.log('singh'); // it will not execute because in a function code written after return do not executes.
        
     }

     result = multiply(8,2);
     console.log('result = ',result);

     // 3rd method to declare a function-----------------

     // now we will declare variable outside the function -----

     function division(c,d) {
      return c**d;
     }

     let resultDivision = division(5,2);
      console.log('result of division = ',resultDivision);

// 4th - if else condition on function--------------

      function isLoggedIn(username) {
         if(username === undefined) {
            console.log('please enter the username');
            return
         }
         return `${username} is logged in`

      }

      console.log(isLoggedIn('devvrat77d')); // => devvrat77D is logged in.
      
      // IMP - if we do not  pass any argument during executing and printing the function then it will give 'Undefined as output
      console.log(isLoggedIn()); // => undefined

      // now after writing if else in the function the output of function will give us alert if we leave empty argument
      
      // 5th method ---- if else   ---- in other way for same above function---

      function LoggedIn(username2) {
         if(!username2) {
            console.log('please enter the username2');
            return
         }
         return `${username2} is logged in`

      }
      
      console.log(LoggedIn());

      // !  this  symbol is a not symbol , it converts true into false and false into true.
      // IN javascript , undefined , empty string '' is  asumed as false value. 
     
      //  6th -- method --- passing default value--
     
      // we can also give default value to a function if user do not give any argument--

      function addon(n1=5,n2=100) {
         return n1+n2
      }
      
      console.log(addon(100,100)); // => 200 ,  bcz we passed the argument.
      console.log(addon()); // => 105 , bcz we do not pass the argument so it takes default value of n1 , n2 and give 105.
      
      
     
     

      