let myDate = new  Date();

console.log(typeof myDate);

console.log(myDate.getTimezoneOffset());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

const myCreateDate = new Date(2024,0,7);

console.log(myCreateDate.toLocaleDateString());

const myCreateDate1 = new Date(2024,8,7,5,6,36);

console.log(myCreateDate1.toLocaleString());

let format1 = new Date("2024-01-07");
console.log(format1.toLocaleDateString());

let format2 = new Date("01-07-2024");
console.log(format2.toLocaleString())

console.log(myDate.getMonth()+1);

console.log(myCreateDate1.getMonth());

console.log(Date().toDateString);




