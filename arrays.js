//-----------------------------------------Arrays-------------------------------------------------------

/* What is array ? 
=> Array is a datatype , array is a collection of multiple items stroed in a single variable.
=> Java script arrays are resizeable , An Array can have items of Multiple datatypes.
=>Javascript  create Shallow Copy.
=> Index of array start from 0
=> IMP typeOf array gives us 'Object' datatype
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

// 3rd method -----------------pop()------------
// it removes one element from the end of the array. exp --
let aeroplane = ['spicejet','vistara','airindia','indigo'];
aeroplane.pop(); // removed 'indigo'
console.log(aeroplane);
// we can also see which element was removed like this -- 
console.log(aeroplane.pop());// => airindia

//4th -----------------unshift()-----------------
// this array method adds new element / item at the beigning or start of the array. exp -----
aeroplane.unshift("quantas");
console.log(aeroplane);

//5th -------------------shift()-------------------
// it removes one item from the start of the array.   exp---
console.log(aeroplane.shift());// removed 'quantas'
console.log(aeroplane);

//6th ----------------includes(element_name)----------
// this method checks wether the given element/item is present in the array or not , it gives result in BOOLEAN value.
console.log(aeroplane.includes('vistara')); // => True;
console.log(aeroplane.includes('quantas')); // => False;

// 7th-----------------indexOf()-----------------
//this method gives us the index of the given element -----
let family = ['dev','angad','anurag','shradhesh','alok'];
console.log(family.indexOf('anurag'));//=> 2
// Note IMP-indexOf() method in array returns -1 when the given item/element does not found/exists in given array
console.log(family.indexOf('aditya'));//=> -1;

// 8th --------------------join()----------------
// this method joins arrays items into string , and also we can pass separator into it,
const familyString = family.join();
console.log(familyString);//=> dev,angad,aurag,shardhesh,alok
console.log(typeof familyString);// => string
console.log(family);// =>['dev','angad','anurag','sradhesh','alok']
console.log(typeof family);//=> array object
// how to add separators ------
const familyString2 = family.join(' #');
console.log(familyString2); // => dev #angad #anurag #shradhesh #alok.

// 9th --------------------------slice()----------
// this method is used to slice a given part of the array into a new array exp -- 
let array = [1,2,3,4,5,6,7,8,9];
let sliceArray = array.slice(3);// it will slice array from index no 3 to the last index and return in array.
console.log(sliceArray);//=> [4,5,6,7,8,9]
console.log(array);// => [1,2,3,4,5,6,7,8,9]
// Most Imp - slice() method do not change/manipulate the original array i.e do not remove items from orignal array
// we can also pass two index values into slice() so it will slice from starting value but not include end value
let sliceArray2 = array.slice(1,3); // => it will slice from index no 3 but only slice upto index no 7 , 8 will not included
console.log(sliceArray2); // => [2,3]

// 10th-------------------splice()------------------
// this method is used to add items in a array and slice items into a new array
// Most IMP - splice() method manipulates/changes the original array , removes items from original array
let spliceArray = array.splice(1,3);
console.log(spliceArray);
console.log(array);







 






























