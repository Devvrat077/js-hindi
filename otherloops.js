const num = [1,2,34,5];

for (const i of num) {
    console.log(i);
    
}

const info = {name:'dev',
    post:'eng',
    department:'it'
};



const name = 'devvrat';

for(const i of name){
    console.log(i);
    
}

// Mapps =>  these are objects , they holds key-value pairs  , Maps remember the original order of keys. 
// and maps always has unique values.
// typeof map = > is 'object' 

const map1 = new Map();

map1.set('name','dev singh');
map1.set('age',24);
map1.set('country','india');
map1.set('code',272175);

console.log(map1); // => this will print the whole array.

console.log(map1.size); // => 4

// looping over maps

for(const i of map1){
    console.log(i);  // => this will print the whole map as it is like in line 32.
    
}

// => if we want to print key and  value then , separately then .

for(const[key,value]of map1){           // => here we have done object/map destructuring. 
    console.log(key , ' - ',value);
    
}

// => looping on objects.

// const myObj = {game1:'pubg',
//     game2:'freefire'
// };

// for(const [key,value] of myObj){
//     console.log(key);}
    
   // => it will give error that  myObj is not iterable so we can not loop over keys,values of an object
// by this method. This method will only works in Maps.

// conclusion => for-of loop works on maps but not on object. 

// Lets study how we can loop or iterate over an object;

// to set loop over object we use for-in loop 

const language = {js:'javascript',
    cpp:'c++',
    py:'python',
    rb:'ruby',
    dj:'django'
};

for(const i in language){
    console.log(i);
    
}
 // it will print all the keys of the object. // js cpp py rb dj

 for(const i in language){
    console.log(language[i]);
    
 }
  // it will print the values of the keys // javascript c++ python ruby django

  // if we want to print both keys and values then ---

  for(const i in language){
    console.log(i ,'-',language[i]);
    
  }
 // => this will give the key and value pairs of the object. 

 const family = ['mom','father','sister','brother','grandfather','grandmother'];

 for(const i in family){
    console.log(i);
    
 }

 // =>  if we use for-in loop on array then it  do not prints the array elements , it will print the 
 // indexes of those elements.

 // now how we can access the value(elements) of array by for in loop.

 for(const i in family){
    console.log(family[i]);
    
 }
 
 // => it will print the elements . 


 // Note - for-in loop does not works on maps
 //only for-of loop works on maps..

// ------------------- for-each loop --------

// it is very common loop for arrays , as it is a in built function. exp ---

const cars = ['bmw','audi','tata','mahindra','jaguar']

cars.forEach(function (i){console.log(i);
})   // => it will print all the values.

/* Note -> forEach loop asked for a call back function ,
what is a callback function ->  a call back function is one which do not have its name.
above written function is a call back function as no name is given to it.
Below we are using arrow function as call back function but here also  we will not hold
the arrow function in a variable ,i.e will not assign name to the function --exp--
*/

cars.forEach((i) => {
    console.log(i);
    
});  // here we used the arrow function.


// we can also pass a external function to the forEach loop ----- exp---

const hotel = ['taj','radison','ginger'];

function printHotelName(i) {
    console.log(i);                   // function written outside forEach loop.
    
}

hotel.forEach(printHotelName) // => here we passed the function,it will loop on hotel and print all items

// Note forEach loop not only give the array items but also give , index , full array exp--

const animal = ['cow','buffalow','snake','goat','monkey'];

animal.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})
// => abov e loop will print the items of array , index of each item,and whole array every time.

const coding = [
    {languageName:'javascript',
        languageFileName:'js'
    },
    {languageName:'java',
        languageFileName:'java'
    },
    {languageName:'python',
        languageFileName:'py'
    },
]

coding.forEach((arritems)=>{
    console.log(arritems.languageName,arritems.languageFileName);
    
})

/* above we loop on a array of object , it is very important bcz when we call data from database then
all data comes in the form array of object. 
so above loop is very important.
