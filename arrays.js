//-----------------------------------------Arrays-------------------------------------------------------

/* What is array ? 
=> Array is a datatype , array is a collection of multiple items stroed in a single variable.
=> Java script arrays are resizeable , An Array can have items of Multiple datatypes.
=> Index of array start from 0
*/

const myArr = [1,2,3,4,5]; // we can declare array like this , this is array of Number datatype. 
//OR
const myArr2 = new Array(100,200,300,400,500); // like this 

const heroes = ['spiderman','ironman','shaktiman','pokemon','captain america']; // this is array of String datatype

const mixedArray = [1,2,'dev',true,'singh',575.66,null,undefined]; // this is array of items of Mixed datatypes.

// Below we are printing our arrays ;
console.log(myArr);
console.log(heroes);
console.log(mixedArray);
console.log(myArr2);
//-------------------------------------Array methods-------------------------------------------------

//1st -------------- at() method-------------
console.log(heroes[1]);
console.log(heroes.at(1));// it will give the array item at the given index.

//2nd ---------------- push() method----------
// push() adds new item at the end of Array;
heroes.push('thor');
console.log(heroes);
// we can add more than one items at once;
heroes.push('loki','batman','hanumanji');
console.log(heroes);














