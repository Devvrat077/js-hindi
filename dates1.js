const  myDate = new Date(); //this date object will give current date and time .
console.log(myDate); 
console.log(typeof myDate); // datatype of date is object.

const myDate1 = Date(); // this will give date and time according to browsers time zone and returns full string 
console.log(myDate1); // it will give string  , full date and time .
console.log(typeof myDate1) // type will be string.

//-------how can we manually print date and time----------------------------

// 1st date in array from ------
// new Date(year,month,date,Hour,minute,second,milisecond) , we can pass any number of value i.e we can pass only
//  year & month , year & month & date , year month date & hour .........,
//exp -----
 let mDate = new Date(2024,6,5,10,5,30,35);// we passed yyyy,mm,dd,hh,min,ss,milisec in the form of array.
 console.log(mDate.toLocaleString());
 // note in js when we pass month in array form , then java script counts month from 0 to 11,
 // i.e. january = 0 ,  december 11 = 11, 
 // above in 14th line  we passed 6 month in array which java script will count as july.
 let mDate2 = new Date(47,7,15); // note - if we pass year in only two or one digits we will get year in 19xx form.
 console.log(mDate2.toDateString()); //  here we get year 1947.

 //2nd java script ISO Date (the international standard) ; exp ---- 
 const d = new Date("2023-05-22"); // we passed YYYY-MM-DD fromat here note, in ISO from the month is start from
 console.log(d.toDateString()); // 1 to 12 other than 0 to 11 like in array .
 const d1 = new Date("03-12-2022"); // we passed here in MM-DD-YYYY fromat.
 console.log(d1.toDateString());
 const d2 = new Date("2023-03"); // we can pass only YYYY and MM  also  we can pass only year like "2021";
 console.log(d2.toDateString());
 // how to pass time in ISO with date ---------
 const dTime = new Date("2001-05-17 10:5:30"); //fromat = ("YYYY-MM-DD HH:MIN:SS")  note we can left second as well
 console.log(dTime.toLocaleString());

 //3rd java script short - dates 
 // format 1 - ("YYYY/MM/DD")
 const shortDate = new Date("2026/03/10");// note we can pass only year , year month also like (YYYY/MM);
 console.log(shortDate.toDateString());
 // fromat 2 - ("MM/DD/YYYY")
 const shortDate2 = new Date ("02/29/2020");
 console.log(shortDate2.toDateString());

// 4th long date format ----
// fromat ("month date year") or ("date month year") , in long format month and date can be in any order.
const dateLong = new Date("march ,10 ,2019"); // order ("Month date year") , we can use comma or ignore it
console.log(dateLong.toDateString());
const dateLong2 = new Date("11 june 2010"); // order ("Date month year") , here we do not used comma.
console.log(dateLong2.toDateString());
// note we can write month fully or use abbrebiation. , also we can use caps later month names are case insenstive
const dateAbb = new Date("11 AUG 2014");
console.log(dateAbb.toDateString());

// Note - here we used above various date API or methods like -  toString(),toDateString() , etc............
// these are used to convert date in our desiered from . exp ---
 
const dateMethod = new Date();
const dateMethod2 =  dateMethod.toLocaleString();// we can declare new variable and use API/Method or
console.log(dateMethod2);// directly can use in console.log like we used above.
/* various date methods -- 
(1) toString()
(2) toDateString()
(3) toLocalDateString()
(4) toLocaleString
(5) toLocaleTimeString()
(6) toTimeString()
(7) toJSON()
(8) toISOString()
(9) toUTCString() */