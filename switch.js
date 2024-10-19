// Switch statements ----- are also like  if else statements

// syntax ---- 

/* switch(key) {
    case value:
    code to execute
    break;

    default:
    code to execute
    break; } 
              */

    /*  'key' => where we write our variable  which we have to compare
         'value' => here we write the value which we want to compare with the 'key'
         => if the 'key' and 'value' matches then the code written will run 
         => if no condition matches then the 'default' block code will run.
         Note => here we do not use comparision operators to compare 'key' and 'value'.
         
         */

    // exp ------
    
    

  

const  month = 7;

switch (month) {
    case 4:
        console.log("aril");
        break;
        
    case 5:
        console.log("may");
        
        break;
    case 6:
        console.log("june");
        
        break;
    case 7:
        console.log("july");
        
        break;
   
        
    default:
        console.log("no month matched");
        
        break;
}

// => output = 'july'
// if no key & case matches then 'default' block code will get executed .


// one exception case  in 'switch' statements ----

/* if condition matches i.e. key = value the it will give the output  , but if we do not add 'break'
then after that all the other switch statements will get executed automitacally
exp-------  */

const modelDescription =  'superace';

switch(modelDescription){
     case "superace":
        
        console.log('correct model');
        
        // break; // => here we comment out the break.

     case "intragold":

        console.log('wrong model');
        
        break;

        default:
            console.log('error');
            break;
            

}
 //=> output = 'correct model' , 'wrong model'  . so here we can see that both code got executed.



