//-------------------------------------comparision without cheking data types---------------------------------------------------

//---Normalcomparisons---- all of them below will five boolean value i.e True/False
// console.log(2>1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2!=1);

// console.log("2">1);//>=true, here two data types "2" is string and 1 is number so js is firstly converting "2" in number.
// console.log("02">=1);//>=true,

// console.log(null>0);//=>false
// console.log(null<0);//=>false
// console.log(null==0);//=>false , in equal to == , null is not converted into a number i.e 0 so ouyput is false.
// console.log(null>=0);//=>true
// console.log(null<=0);//=>true

/*in above exp the reason is that equality check == and comparisions >,<,>=,<= works differently.
comparisions convert Null into a number i.e. 0, thats why 17th and 18th line comparisons are true.*/

// console.log(undefined==0);//=>false
// console.log(undefined>0);//=>false
// console.log(undefined<0);//=>false

//----------------------comparision by checking data types---------------------------------------------------------

console.log("1"===1);//=>false, bcz === to firstly checks data type if data type is not equal then it will return false
console.log("1"==1);//=>true, == doesnot checks data type it directly converts the value and compare it .

let a;
console.log(a);
console.log(typeof a);
