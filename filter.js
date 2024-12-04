const name = ['ram','shyam','hariram'];

// now we want to hold the output from loop into the variable.----

const output  = name.forEach((i,j)=> {
    console.log(i,j)
    return i,j;
    
});

console.log(output); // => it is giving undefined , so we can not hold result of 
// for each loop  ,i.e for each loop do not returns value .



// => so now we will use 'filter' to retun values and hold in variables.
// so 'filter' returns the values .


const  num = [1,2,3,4,5,6,7,8,9,10];

const result = num.filter((i) => i>4 );

console.log(result); // => [5,6,7,8,9,10]

// or -------

const newResult = num.filter((i) => {
 return   i<5

})
 
console.log(newResult); // => [1,2,3,4]

// note when we use scope in arrrow function then we have to write return, else no need to write return.
// we can know more about it in arrow function file

 // we can also hold output of forEach loop in variable of an array exp -  

 // firstly we will create an empty array to hold the result.

 const result1 = [];

num.forEach((i) => {
    if(i>7){
        result1.push(i)
    }
})

 console.log(result1);  // => 8,9,10  ,, here result1 array now holds the items which satisfied the condition.

 // or to hold all elements in a variable

 const result2 = []

 num.forEach((i) => result2.push(i))

 console.log(result2);  // => [1,2,3,4,5,6,7,8,9,10]     

 // ----------- 'map' ------------------

 // => it is also like filter ---- exp----
 
 const numerals = [1,2,3,4,5,6,7,8,9,10];

 const output2 = numerals.map((i)=> i+10)

 console.log(output2);

 // => we can do same by for each as exp below --
 
const output3 = [];

numerals.forEach((i)=>{
    output3.push(i+20)
})

console.log(output3);


// => chaning in java script  -----

const outputChaning = numerals
                              .map((i)=>i*10)
                              .map((i)=>i+1)
                              .filter((i)=> i>=40)

console.log(outputChaning);

// above example is called chaning i.e using too many map&filter for one operation.

/* IMP ---- DIFFERENCE BETWEEN MAP & FILTER---

MAP 1- IT IS USED TO ITERATE OVER AN ARRAY (TO SET LOOP ON ARRAY)
    2- IT USE THE PROVIDED FUNCTION AND TRANSFORM THE EACH ELEMENT OF THE 
       ARRAY AND RETURNS AN ARRAY WITH THE SAME LENGTH.
    3- IT RETURNS THE ARRAY WITH THE NEW ELEMENT ACCORDING TO THE GIVEN CONDITION/FUNCTION
    
FILTER 1- IT USES THE PROVIDED CONDITION AND RETURNS AN ARRAY HAVING ELEMENTS
          WHICH SATISFIES THE GIVEN CONDITION 
        2- THE ARRAY RETURN MAY OR MAY NOT BE OF SAME LENGTH IT DEPENDS ON THE 
           PROVIDED CONDITION.  */


// ------- 'REDUCE' METHOD OF ARRAY ---------------

const  number1 = [1,2,3];

 const total = number1.reduce(function(accumulator,currentvalue) {
    console.log(accumulator,currentvalue);
    
    return accumulator+currentvalue
 },0)  // => here 0 is the starting value for accumulator.

 console.log(total);

 //  reduce by arrow function.--------

 const total2 = number1.reduce((acc,curval)=> acc+curval,0) // 0 is starting value for accumulator


 console.log(total2);

 const grocery = [
    {item:'milk',
        price:100
    },

    {item:'curd',
        price:300
    },

    {item:'rice',
        price:110
    },

    {item:'cream',
        price:500
    },
 ]
 



 const totalPrice = grocery.reduce((acc,currvalue) => {
           
             console.log(currvalue.price)

              return acc+currvalue.price

             
},0)

 console.log(totalPrice); // => 1010 

 // above reduce function is used to add bill amount in cart.
 