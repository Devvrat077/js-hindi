// Note - when we declare object by constructer method then Singleton is  form.
// Constructor method = Object.create
// when we declare object using object literals then singelton is not form.

//Object literals method -------


let country = Symbol ('India'); // to include a Symbol in the object first we have to declare the  Symbol.

let myInfo = {name:'dev',
    'full Name':'devvrat singh',// when we declare a key having space in it then we have to use '' / "".
     [country]:'India', // to write Symbol in object we always write its key/variable in [] square brackets.
    age:24,
    email:'divyanshsingh@gmail.com',
    city:'khalilabad',
    isLoggedIn:true,
    
}

// 1st - method to access object key-values--------
console.log(myInfo.name); // => dev
console.log(myInfo.age); // => 24
console.log(myInfo.isLoggedIn); // => true

// 2nd method------- if we want to access a Symbol datatype variable and if key is defined in '' i.e as string then--
console.log(myInfo['full Name']);// => devvrat Singh
console.log(myInfo[country]); // => India
console.log(myInfo['email']);// => divyanshsingh@gmail.com 
// note - Most suitable way is 2 method bcz it is applicable to all object key value pair. 1st method have some limitations

// 3rd ---------------- how to change any value in object----------
myInfo.email = 'devvrats.tcs@tatamotors.com';
console.log(myInfo);

// // 4th ----------------if we want to lock changes in object i.e no one can change it again then--------
// Object.freeze(myInfo);// Object.freeze() prevents any changes in the object.
// myInfo.name = 'hhhhhhhh'; // comand for changing name.
// console.log(myInfo); // here we will find that name is not changed.

//5th ----------------how to add function in a object ------------- to execute this pls unfreeze above object

myInfo.myFunction = function() {
    console.log('hello java script developer');
    
}

console.log(myInfo.myFunction());

myInfo.myFunction1 = function() {
    console.log(`hello java script developer ${this.name} and age is ${this.age}`); // here we take reference of name and age from the same object so we use this.name
    
}

console.log(myInfo.myFunction1());

myInfo.myFunction2 = function() {
    console.log(this[country]);
    
}
console.log(myInfo.myFunction2()); // => India

// Note => when we take reference from the same object then we use this. 















