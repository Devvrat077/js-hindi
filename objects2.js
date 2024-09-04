//  how to declare singelton object-------------

let obj1 = new Object();
console.log(obj1); // => {} empty object , as above we do not  pass any key value .

// non singelton object ---------------
let obj2 = {};
console.log(obj2); // => {} , it will also give empty object

// adding some key value in obj2
obj2.name = 'durgesh';
obj2.age = 40;
obj2.isLoggedIn = true;

console.log(obj2); //  => { name: 'durgesh', age: 40, isLoggedIn: true }

// passing Object into a Object-------------

let obj3 = {
    city:'KLD',
    state:'UP',
    pinCode:272175,
    fullname:{
        username:{
            firstName:'skynet',
            lastName:'cyber'
        }
    }
}

console.log(obj3);//=> it will print the full object
// to access a particular key value 
console.log(obj3['fullname']); // => { username: { firstName: 'skynet', lastName: 'cyber' } }

console.log(obj3['fullname']['username']['firstName']); // => skynet , here we are accessing firstName in username>fullname

//OR

console.log(obj3.fullname.username.lastName); // => cyber 

//1st method ------ combining two or more objects---  Object.assign()---------------
// Object.assign, copies all the properties from the source objects to the target object and return a new object.

//  obj4 is Target object ---------
let obj4 = {maggie:'nestle',chawanpras:'patanjali'};

// obj5 is a source object--------------
let obj5 = {milk:'amul',flour:'ashirwad'};

// obj6 is a source object------------
let obj6 = {cream:'bororplus',wath:'fastrack'};

// Now through Object.assign we will copy all the properties of source object to the target object

let obj7 = Object.assign({},obj4,obj5,obj6);// here writing {} first is a good practice otherwise we can neglect it also
console.log(obj7);/*  we get => {
    maggie: 'nestle',
    chawanpras: 'patanjali',
    milk: 'amul',
    flour: 'ashirwad',
    cream: 'bororplus',
    wath: 'fastrack'
  } */

// 2nd --- method to concat or combine two or more objects by using-------spread operator---------
//like we use spread operator to concat Arrays now we will use it also in concating Objects,

let obj8 = {...obj4,...obj5,...obj6};

console.log(obj8); /*  we get => {
    maggie: 'nestle',
    chawanpras: 'patanjali',
    milk: 'amul',
    flour: 'ashirwad',
    cream: 'bororplus',
    wath: 'fastrack'
  } */

//Note using spread operators to concat objects is more relevant. we will use it at most of time.

// imp ----- when value come from database then maximum time it comes in as Array of Objects---
// Note in arrays lecture we do not take example of objects in array so below is also imp as per Array pov.
let users = [
    {userName:'@devil',
        rank: 'bronze3',
        kills:10
    },
    {friendsCount:3,
        friendsKill:20,

    },
    {friendName:'yoga',
        fuserName:'#yogibaba'
    }
]

// how to access it ---- we can use loop we will study later , or we can use index to access like--

console.log(users[0]); // => { userName: '@devil', rank: 'bronze3', kills: 10 }
console.log(users[2]); // => { friendName: 'yoga', fuserName: '#yogibaba' }

// if we want to access any particular key value pair then ----
console.log(users[0].userName); // => @devil
console.log(users[1]['friendsKill']); // => 20

// 3rd method ----------Object.keys()-------------------
// Objetc.keys() gives us an Array of the keys of an object -----
console.log(obj2); // { name: 'durgesh', age: 40, isLoggedIn: true }
// now accessing keys of obj2 ------

let obj2Keys = Object.keys(obj2);
console.log(obj2Keys); // => [ 'name', 'age', 'isLoggedIn' ]imp-here the datatype returned is Array 

// 4th method --------------Object.values()---------------
// Object.values() gives an Array of the values of an object-----
let obj2Values = Object.values(obj2);
console.log(obj2Values); // => [ 'durgesh', 40, true ] // datatype is Array
console.log(obj2Values.length); // => 3, we are here using Array functions & methods. we can use many other.. 

// 5th method ------------------Object.entries()-----------------
// Object.entries() method gives us an Array of KEY-VALUE pairs of an Object
let obj2Entries = Object.entries(obj2);
console.log(obj2Entries);// => [ [ 'name', 'durgesh' ], [ 'age', 40 ], [ 'isLoggedIn', true ] ]
// above result we can see that it returns array of key value pairs that are also in array,
//First is - always - KEY => name is key , age is key, isLoggedIn is key
// Second is - always - VALUE => durgesh is value , 40 is value , true is value 

// Note - Object.entries() method makes easier to use objects in loops
// Object.entries() makes easier to convert objects into Maps.

let instaUser = {instaName :'itz_boy_badasah',
    birthday:20 ,
    job:null
};
console.log(instaUser);

 // 6th -- method --- Object_varibale_name.hasOwnProperty()---------------
 
 //this method checks that the object has the property or not , then returns a Boolean value
 // if object has the property then it returns True , 
 // if object does not has the property then it returns False,
 console.log(instaUser.hasOwnProperty('instaName')); // => true
 console.log(instaUser.hasOwnProperty('job')); // => true 
 console.log(instaUser.hasOwnProperty('isBlackLover')); // => false 
 
 
 






 











