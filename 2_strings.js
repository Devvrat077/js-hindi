// 8th ----------------adding to or more strings.----------------------------------

// (A) ------by using Addition method.----------

let firstName = "Shri";

let lastName = "Ram";

let fullNames = "here is the full name = " + firstName + " " +lastName ;

console.log(fullNames);
//OR
console.log(firstName + " " + lastName);

//(B) -----by using Backticks---------------

console.log(`${firstName} ${lastName}`);

//(C)------by using Concat method------------

let fullName = firstName.concat(" ",lastName);

console.log(fullName);
//or
console.log(firstName.concat(" ",lastName));

//9th ---------------------trim()-------------------------------------------------

//this method is used to trim white spaces from a string  from start or end of the string-

let myName = "    hero of the world         ";

console.log(myName);// this will print with all whitespaces

let myNameTrim = myName.trim();

console.log(myNameTrim);// this will print by triming all the white spaces
//OR
console.log(myName.trim());

// 10th -------------------trimStart()--------------------------------------------------

// this will only trim whitespaces from the start-

console.log(myName.trimStart());

//11th -------------------------trimEnd()-----------------------------------------------

// this will trim only whitespaces from the end-

console.log(myName.trimEnd());

//12th -------------------------javascript Padding------------------------------------------

//There are Two typesof Padding--

//(A)---------------padStart(length,string)---------------- this method pads a string from start, with another string
// until it acchives the given length.. exp --

// exp 1----
// Padding a string from start with 0 until it reaches 5 length-
let padString = "5";

let padStartString = padString.padStart(5,"0");// here 5 tells us the length value and "0" will be done as padding

console.log(padStartString);
//OR
console.log(padString.padStart(5,"0"));

// exp 2----
// Padding a string from start with "ia" until it reaches 6 length-

let padString1 = "dev";

let padStartString1 = padString1.padStart(6,"ia");

console.log(padStartString1);

//(B)--------------------padEnd(length,string)----------this method will pads a string from  end, with another 
//string until it reaches the given length.

//exp1-

let padEndString = padString.padEnd(5,"0");
console.log(padEndString);

//exp2-

let padEndString1 = padString1.padEnd(6,"ia");
console.log(padEndString1);

/*Note
 The padStart(),padEnd() method is a string method.
To pad a number, convert the number to a string first. then after perform padding
See the example below. */

//exp--

let num = 7;

let numString = String(num);

console.log(typeof numString);// converting number to string datatype.

console.log(numString.padStart(3,"Y"));
console.log(numString.padEnd(4,"i"));
