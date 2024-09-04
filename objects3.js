// Java Script Destructing  Objects ------------------

let school = {schoolName:'apn academy',
    board:'cbse',
    'no. of teaching staff':20,
    'no. of bus' :50
};
 // normaly we call our Object items by console.log -----
 console.log(school['no. of teaching staff']); // => 20

 // but there is another way to access Objects elements that is called object destructuring

 let {schoolName,board} = school; // we give object variable name after = to sign  and in {} we give keys which we want to access.
 console.log(schoolName,' ',board); // => apn academy   cbse ,

 // we can also use Alias and give any temporary name to the Keys of object.

 let {'no. of teaching staff':teachers} = school; //  we gave teachers as an Alias 
 console.log(teachers); // => 20

 // we can also add any property if they are missed in the Object ---

 let {'no. of bus': bus,upToClass = 12} = school;
 console.log(bus,' ',upToClass); // => 50,12 

 // Note - Destructing does not changes the Orignal Object,

 console.log(school['no. of bus']);  // => 50 ,  so no chnage in orignal.



 // -------------------  APIS -----------
 // what Is API ?
 // API Stands for  Application Programmming Interface
 // What API does?
 // API is like a waiter in a restorent as he takes order and go to shef and then give that food that is prepared by shef to us 
 // Like ways API take request from user and then transfer to backend , then take result from backend and then give to the user.
 
 // JSON  ------
 
 // JSON stands for JAVASCRIPT OBJECT NOTATION , it is a text-based format (API) which is responsible for data transfer betwwen computers
 // JSON is a text format  for storing and transporting data.
 // JSON is used in web applications to send data from server to clint  , to display data on the application.
 
 // format of JSON ---

/* {
    'name': 'baburao',
    'cillage':'lapatanagar',
    'familyMember': 12
 } */
 
 // JSON has both keys and values in string from ,''.
 // JSON is simply a Object without its name .

 // some times we get API in  form of Arrays having Objects  -------

/*  [
    {
        'sports1':'cricket',
        'bestPlayer':'sachin'
    },
    {
      'sports2' :'football',
      'bestPlayer' : 'massey'
    }
 ] */


    // so API can be in OBJECT or in ARRAY form
 
 

 