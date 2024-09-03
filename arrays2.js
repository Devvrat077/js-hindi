let marvelHeroes = ['spiderman','ironman','thor'];
let dcHeroes = ['batman','superman','flash'];

marvelHeroes.push(dcHeroes); // it will add dcHeroes array in marvelHeroes array as an element/item

console.log(marvelHeroes);// => ['spiderman','ironman','thor',['batman','superman','flash']]
// here above we got array in array , 
//some hit and trial ----
console.log(marvelHeroes.length); //=> 4 ,as ['batman','superman','flash'] are considered as one item in the marvelHeroes array
console.log(marvelHeroes[3]); // => ['batman','superman','flash']
// how to access the items of the sub/child array -----
console.log(marvelHeroes[3][0]); // => batman,   we have to give index of child-array then index of item we want to access of child array

console.log('a',marvelHeroes); // => by the output we conclude that by direct pushing array , it changes the original array,


// 1st method ---------------------conact()----------------------
// concat() method adds/concat/combine two or more arrays and results in a new array.
// concat() does not change the existing/original array
let country = ['india','america','australia'];
let capital = ['newdelhi','washington dc','canberra'];

let country_capital = country.concat(capital); // it will add both array items and result in a new array,
console.log(country_capital);// = >['india','america','australia','newdelhi','washington dc','canberra']

// we can also add any  other item in an array , to get a new array exp ----
let country_capital2 = country_capital.concat('narendramodi','biden','dev',70,60,24);
console.log(country_capital2);
console.log(country_capital); // here we can see that orignal array is unchanged 

// 2nd method -------------------spread operators----------------------------
//spread operators are used to add two array items similar as concat , 
// spread operators also result in a new array , they do not manipulate existing array. exp--

let animal = ['cow','lion','cat','horse','dog'];
let bird = ['peacock','sparow','vulture'];

let animal_bird = [...animal,...bird]; // this will concat both array and result in a new array
console.log(animal_bird);
console.log(animal);// orignal array unchanged.

// 3rd method -------------------flat()-----------------
// this method concat the sub-array items of an array and result in a new array to a specified depth;
let num1 = [1,2,[3,4],5,[6,[7,8]],9];
let num2 = num1.flat(Infinity); // infinity tells us that to infinite depth.
console.log(num2); // => [1,2,3,4,5,6,7,8,9] 
console.log(num1); // => unchanged array orignal

//4th method -----------Array.isArray()-----------------
// this method checks the datatype of the given variable and then returns 'true' if it is an array otherwise returns 'false'
//exp ------
console.log(Array.isArray(num2)); // => true
let myName = 'devvratsingh';
console.log(Array.isArray(myName)); // => false , bcz myName datatype is string. 


//5th ---------------------Array.from()------------------
// this method converts string into an array ------------
let myNameArray = Array.from(myName);
console.log(myNameArray); // = > ['d','e','v','v','r','a','t','s','i','n','g','h']

console.log(Array.from({name:'rajput'}));// => [] , output is an empty array, as we do not define that wether it make array of key or value .

//6th------------------Array.of()----------------------
// this method returns  an new array from the various individual elements or variables /set of elements.

console.log(Array.of(1,2,'singh',{name:'dev',age:24},true)); 

let element1 = 'ram';
let element2 = false;
let element3 = {age:21,
    city:'ayodhya'
};

console.log(Array.of(element1,element2,element3));












 







 
