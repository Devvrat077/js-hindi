// --------------------------------Conversions in javasccript-----------------------------------

let score = "33";

console.log(typeof score);

// conversing into a number

let valueInNumber = Number(score);

console.log(typeof valueInNumber);

console.log(valueInNumber);

// "33" => 33 , when we convert a String having pure number, it will eaisly converted into Number
// "33abc" => NaN , when we convert a String not having pure Number, it will convert into number but on printing it,
// it will give "NaN" i.e "Not a Number" as output
//    Null => 0 ,when we convert Null into a number we will get 0 as output on printing
//   Undefined => NaN, on converting Undefined into a number ,it will convert into Number ,but  
//   will give "NaN" i.e "Not a number" output on printing
//  true => 1 , on converting true into a number ,it will give 1 on printing 
// false => ,on converting false into a number ,it converts into 0 in javascript on printing

let isLoggedIn = 1;

// conversing it into boolean

let booleanisLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanisLoggedIn);
console.log(booleanisLoggedIn);

// 1 => true , on converting 1 in Boolean we will find true as output
// 0 => false , on converting 0 in Boolean we will find false as output
// 99 => true , on converting any number ratherthan 0 we will get true , same like as converting 1  
// "" => false , on converting empty string  into Boolean we will get false after conversion
// "Devvrat Singh" => true , on conversing a string having some value we will get true as result

let id = 60;
console.log(typeof id);

// conversing into String

let stringId = String(id);

console.log(typeof stringId);
console.log(stringId);

// we can convert  number into a string


// ----------------------------------Operations in javascript----------------------------------------------------

let numeral = 3;

let negnumeral = -(numeral);  //here we are assigning -ve value of numeral variable into a new variable (negnumeral)

console.log(negnumeral); // here we will get -3 as output

// ---------[Addition ,Substracction,Multiplication,Division,Modulus,Power]Mathematical/ArthmaticalOperations------

console.log(5+5); //add and give 10 as result;
console.log(10-4); // substract and give 6 as result;
console.log(9*8);  //multiply and give 72 as result;
console.log(10/5); //divide and wil give 2;
console.log(9%2); //modulor and will give remainder (1);
console.log(5**4); //Raise Power 4 times to the 5 and give 625 as result;

//----addition of  two or more strings----

let str1 = "Devvrat";
let str2 = " Singh";
let str3 = str1+str2;

console.log(str3); // => Devvrat Singh
console.log("divyansh"+" singh"); // => divyansh singh

//------some confusing Operations in js------

console.log("1"+2); //=> 12 output  
console.log(1+"2"); //=> 12 output
console.log("1"+2+2); //=> 122 output , in js if string is at first then it will treat all other values as string 
                      // and attach values with as it is
console.log(1+2+"2"); //=> 32 output , in js if string was at last in addition then it the operations before it 
                           //will perform first then it will attach the string with the value of that operations

console.log("1"+"2"); //=> 12 output , as both are string values , it will attach each other
console.log(true); //=> true output will print
console.log(+true); //=> 1 output will print , bcz true is boolean and we are incrementing in it so js will convert 
                    // true in 1.
// console.log(true+); //=>we will see error , as js doesnot allow this .
console.log(1+true); //=>2 will print , as we seen above we are incrementing in boolean so it will convert true into                        
                     // 1 and then add the passed value 1 and give 2 as output.
console.log(false); //=> false as output
console.log(+false); //=> 0 as output as we are incrementing .
console.log(999+false); //=> 999 as output ,bcz false will convert into 0 then will print 999+0=0
console.log(999*false); //=> 0 as output , bcz false is convert in 0 and 999*0=0.
console.log(-true); //=> -1 output. 
console.log(999-true);//=> 998 output , as 999-1=998.
console.log(-false);//=>-0 as output.
console.log(999-false);//=>999 as output , as 999-0=999.
// ---Note => only +,- is possible with boolean value ,*,/,% is not possible it will give syntax error;
console.log(+"");//=> 0 as output will print ,bcz we are incrementing in "",so firstly js will convert "" into
                 // boolean value i.e false as we studied above and false is 0 in boolean to number conversion
                 // so it will print 0.   
console.log(99+""); //=> 99 as output bcz 99+0=99
console.log(-"");  //=> -0 output 
console.log(50-""); //=> 50 output

let num1 , num2 , num3; // here we declared 3 variables 
num1 = num2 = num3 = 2+2 ;// here we assigned same value ie. 4 to all the variables., but this method is not good.
console.table([num1,num2,num3]);

//-----------------prefix and postfix operators----------------------------

let gameScore = 100;
++gameScore;// here ++  is prefix operator and give output 101 
gameScore++;// here ++ is postfix operator and give same output 101.
console.log(gameScore);

// in above exp we did not see any difference in prefix and post fix , so lets take another exp

let x = 3;
let y = ++x;
console.log("Y=",y);
console.log("X=",x);

let x1 = 10;
let y1 = x1++;
console.log("Y1=",y1);
console.log("X1=",x1);