let  score = new Number (100);
// console.log(typeof score);
//--------------------- various types of Number method----------------------------------------

// 1st --------------toString()------------------

// this method converts a number into a string -----

let scoreString  = score.toString();// this method will convert score into string and save it into scoreString
console.log(typeof scoreString);

//OR 

console.log(score.toString());// this will directly convert score into string.

//2nd -----------------toExponential() method---------------
 // it retuens a String with number rounded and written in exponential form.

 let num = 5869;

 console.log(num.toExponential(1));

// 3rd ------------------toFixed() method ------------------
// it retuns a String with fixed number of decimals. toFixed(decimal-value).

// console.log(score.toFixed(2));//  => 100.00 , by using it we get desired  digits after the decimal.

// 4rd--------------toPrecision() method-------------------------
// it returns a string with the number written with specified/given length

let numeral = 23.518;

console.log(numeral.toPrecision(2));

//5th------------------toLocaleString() ---------------------------
//it converts the  number or any date datatype according to local setting for Indian setting we write 
// toLocaleString('en-in')

let num2 = 96589799185;

console.log(num2.toLocaleString('en-in'));// basically it returns the same number with comas applied according
// to indian number system.













