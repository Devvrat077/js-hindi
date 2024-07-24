// we also have a new method to declare variables exp like---

let string = new String ("Devvrat-Singh"); // we can also declare the variable by declaring the datatype also.

console.log(string);

let number = new Number (22);// we can use this or simply declare variable as usual method

console.log(number);

//---------------------------Various String Methods-----------------------------------------------

//1st ------------- Length Method ----------------------------------------

let stringLength = string.length;
console.log(stringLength);  // this method will give the length of the given string
//OR 
console.log(string.length); // this also do the same , it is alternate method without use of any new variable.

//2nd -------- Extracting String Characters --------------------------------- 

// There are two ways to extract string characters ---

//(A) .at(position) Method , exp --- , .at() is a new addition to js we can pass (-ve) value in it.

let stringChar1 = string.at(4);// we need to pass the position value in the brackets.
console.log(stringChar1);  // it will print the 4th character of the string value i.e "r".
//OR
console.log(string.at(4));
console.log(string.at(-12));// it will print the char at 12 posotion from right side of string., 
// note - from end /right side , count starts from 1 not from 0.

//(B) .charAt() Method  , in it we were not able to pass (-ve) value directly.

let stringChar2 = string.charAt(1); 
console.log(stringChar2); 
//OR
console.log(string.charAt(1));

//3rd -------------------Property Access []-------------------------------------

// we will pass  position value in it [] 

let name = "divyansh singh";
let name2 = name[4];
console.log(name2); //this will also give the char at 4th position.
//OR
console.log(name[4]);

// one exception here between charAt() and [] --

console.log(name.length); // => 14

// if we pass value more than the length of string then

console.log(name.charAt(15));// CharAt() , Method  will Print Empty String ("") when no character is found. 
console.log(name[15]);// [] , this Method will return "Undefined" when it do not find any character.
console.log(name.at(15));// at() , it also returnt undefined.

//4th -------------------Extracting String Parts-------------------------------------

// There are three Method of Extarcting a part of string---

//(A) -- slice(start,end), it extract the part of a string as per given start and end value ,Note- end value not included.

let firstName = name.slice(0,8);
console.log(firstName);// => divyansh as output , note - 8th position char not includded
//OR 
console.log(name.slice(0,8)); 

// if we  only pass Starting value  then it will extract out the whole string from given starting value. exp--
console.log(name.slice(9)); // => singh as output , as per above defined condition.

// Note --- we can also pass (-ve) value in slice() method , it will extract from the right/end  side of string
console.log(name.slice(-8,-2));// => sh sin , -2(end) will not included.

console.log(name.slice(-10));// => it will slice from -10 to the end/rest of string.

//(B) ---substring(start,end) , it is similar to slice(), only it will not take -ve values , 

// substring() treat value less than 0  as 0.
console.log(name.substring(0,8));

//(C) substr(start,lenght) , substr is same as slice() the only difference is here we not pass end parameter ,
//here we pass length to get from the given starting value.

console.log(name.substr(0,3)); // => it will print char of 3 length from 0 index.

//5th ----------------------indexOf("")-----------------

// indexOf() give the position/index of that character., we pass charcter in "" as string exp--

console.log(name.indexOf("v")); 

//6th ------------------------Converting toUpperCase()------------------

let address = "khalilabad" ;
let addressCaps = address.toUpperCase(); // toUpperCase() method convert string into capital letter
console.log(addressCaps);

//7th ------------------------Converting toLowerCase()-----------------

let district = "SANT KABIR NAGAR" ; 
let districtSmall = district.toLowerCase(); // toLowerCase() method convert string into small letter.
console.log(districtSmall);



