// control flow  --- refers to that when a code should run and when a code shoud not run.

// 1st control flow element  -----

// if ----------------------------

//syntax ----

/* if(true){

  code to run 

} */

  /* Note the code in the scope of 'if'  only run when it satisfies the condition in the () 
  parenthesis of if i.e when the condition in the parenthises returns 'true '  value 
  then the code written in the scope of 'if' will get executed.
  
  but  when the condition inside the parenthises doesnot satisfies or returns 'true' ,
  i.e when condition returns 'false'  then the code written inside the scope of 'if' 
  does not get executed.

  conclusion ------ 

  A ----- condition = true => if block code will get executed. 
  B ----- condition = false => if block code will not get executed.     */

  // exp -----

  if (true) {
    console.log("code is executed bcz condition is true");
    
  }
 
  // Above statement will print the output 

  // But Below statement will not print the output

  if (false) {
    console.log("code will not execute and print this line bcz condition is false ");
    
  }

  // Comparision operators that will use in if-else statement.
  
  //----   > , < , >= , <= , == , === , != ,!==
 
  /* Note->   ==  means equal to which only checks that the value is equal or not , it do not 
  compare or check datatypes of values.

  ->         === means also equal to but it also checks that datatype is same or not .

  ->        != means not equal to , it also does not check datatypes

  ->        !== means not equal to , which also checks datatype.
  
  -> most imp  --->   =  is not equal sign it is called assignment operator which asign value to 
     the variable. */

  //  exp -----  for ( == )

  let x = 2;    // ---------- number datatype
  let y = "2";  // ------------ string datatype 

  if (x==y){
    console.log("x=y , i am not checking datatypes ");
    
  }

  // Above code will run and print output , as it only checking value not datatypes 

  // Below code will not run amd do not print output as datatypes are not same and === also checks datatypes.

  if(x===y){
    console.log("x=y , i am also checking datatypes");
    
  }

  // 2nd ---- control flow 

  // else ---------------------

  // syntax ------ 

 /*  if(true){ 

     code will run
  }
    
  else{
    
   when 'if' condition is not satisfied then 'else' block code will run.
  
   }   */

   // exp --- 

   let score = 70;

   if (score>=90){
    console.log('excellent performence');
    
   }

   else {console.log("very good performence");
   }

   // here for above code --- else block will run bcz if block does not stisfies given condition.

   // ------  let's seescope in if-else 

   let marks = 98;

   if (marks>=95){
    let grade = "A grade";
    console.log(`your grade is : ${grade}`);
    
   }   // => code will run and print  output. 

   /* but ---- when we will access the 'grade' variable outside the scope then we will get an error 
      as 'let' makes Block Scope */

    // console.log(`your grade is : ${grade}`); // => error will aries as 'grade' variable is not defined.

    // now let try the same thing with var keyword.

    let name = "ram";

    if(name==="ram"){
        var price = 5500;
        console.log(`congrats ${name} you won lottery of ${price} ruppes`);
        
    } // > it will also give output

    console.log(`congrats ${name} you won lottery of ${price} ruppes`);// => it will also give output

    /* here we can see that we can access the variable 'price' from the outside of the scope of 'if'
       bcz the variable 'price' is declared by keyword 'var'. and 'var' do not make 'Block Scope'
       'var' makes global scope and can be accessiable from outside the scope.  */

// Another way of using if statement called as 'implicit scope' , it is same as implicit arrow function;

let runs = 350;

if(runs>300) console.log('it is a bating pitch'); 

// Note - here we can only write the code to be executed in one line like as implicit arrow function.
// we can not write code in multiple lines in implicit scope.

// 3rd control flow ------------

// else if -----

// 'else if' used when we want to check more than one condition before entring the 'else' block.   exp----

let number = 49;

if(number%2 == 0){
  console.log("number is divisible by 2");
  
} else if(number%3 == 0){
  console.log("number is divisible by 3");
} else if(number%4 == 0){
  console.log("number is divisible by 4");
  
} else{ console.log(`number ${number} is divisible by 7`);}

// output => number divisible by 7 .
