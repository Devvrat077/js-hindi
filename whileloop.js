
// While loop -------------------

let i = 1;

while (i<=10) {
       console.log(`here are the numbers ${i}`);
       i=i*2;      
}

const myarr = [00,11,22,33,44,55,66,77,88,99];

// for(let i=0;i<myarr.length;i++){
//     console.log(myarr[i]);
    
// }

let index = 0;

while(index<myarr.length){
    console.log(myarr[index]);
    index = index+1;
}

// do - while loop -----------------  

let  num = 0;

do{
    console.log(num);
    num = num + 5;
}
while(num<=30)

 /* Note --- IMP --> in do-while loop  , firstly the work is done then after the condition 
 is checked  .... 
 
 in below exp we will see this above case ------ */
 
 let number = 0;

 do{ number = number + 10;
    console.log(`number is ${number}`);
    // number = number + 10;
 }
    while(number<=100)

/* output = > we get last number = 110 which  is against our condition that we set 
 so conclusion is that in do - while loop firstly process is done 
 then the condition is checked.   */  

