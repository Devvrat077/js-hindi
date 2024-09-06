const accountId = 123456;
let accountEmail = "divyanshsinghrajput3@gamil.com";
var accountPassword ="05070507";
accountCity = "KLD";
 let accountState; //as we do not assign any value in accountState so on printing it we will get "undefined"

//  accountId = 2222222;

//  console.log(accountId);

//  we can not update or change constant variable

accountEmail = "dev3@gmail.com";  
accountPassword = "55557777";
accountCity = "Khalilabad";

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/* we can update or change let,var and direct declared variables
but const variable can not be updtade*/

/* Prefer not to use Var  because of issues in Block scope and Functional scope 
NOTE - we will not declare variable directly in java script although this is posssible as we saw above 
we always let or const to declare variable*/

//----------Static Programing language----------
// In static language we need to declare the data type of variable and function first

//----------Dynamic programing language--------
//In dynamic language we do not need to declare the data type of variable and function.
// Java Script is a dynamic programing language.
