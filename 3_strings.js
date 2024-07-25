// 13th ------------------------repeat() method-------------------------------------------

// this method repeats the string to the given number of time.
//  repeat(count to be repeated); exp--
let str = "hello" ;

let strRepeat = str.repeat(4);// this will repeat the str variable 4 times 
console.log(strRepeat);
 console.log(str);

 // note -  repeat() method does not changes the original string , as we no stack memory.

 // 14th ---------------------------replace() method----------------------------------------

 // this method replaces a part or whole string with another string--
 // replace(string part to be replaced , string which will replace)  exp --

 let str1 = "hello devvrat singh";

 let str1Replace = str1.replace("devvrat","divyansh");
 console.log(str1Replace);

 // note - replace() method is case senstive ,  we have to write same to same in replace function.

 // to make it case insenstive , so that we can use any case , we use /string/i --exp--

 let str2 = "hello vishnu how are you";

 let str2Replace = str2.replace(/VISHNU/i,"shriram");

 console.log(str2Replace);

 // note  -  normally replace() replaces the first one and left the others to replace all we use /string/g ,exp--

 let str3 = "hello vishnu how are you , vishnu in which class do you read";

//  let str3Replace = str3.replace(/VIshNu/i,"mahesh"); // this method will replace only first vishnu and left second one ,
 let str3Replace = str3.replace(/vishnu/g,"mahesh");// this will replace both vishnu with mahesh,g is called global flag.
 console.log(str3Replace);

 // 15th ------------------------------replaceAll()---------------------------------------

 // this method is similar to replace() method but in it we do not need global flag. it replaces all.

 let str4  = ' i have a dog , my Dog name is tommy  . my Dog is labrador and my dog is brown';

 str4 = str4.replaceAll("Dog","Cat");
 console.log(str4);
 str4 = str4.replaceAll("dog","cat");
 console.log(str4);

 //16th --------------------------split() method----------------------------------------------

 // this method  is used to convert a string into array

 let str5 = "rohit-sharma";

 let str5Array = str5.split("-"); // converting into array on  "-" (dash).
 console.log(str5Array);
 console.log(typeof str5Array);






 