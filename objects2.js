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

// combining two or more objects ---------------

let obj4 = {animal:'lion',plant:'bniyantree'};
let obj5 = {bird:'sparrow',aeroplane:'vistara'};

console.log(obj4.concat(obj5));









