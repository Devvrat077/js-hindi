// 1st method--------------- Rest Operator ---------------------
/* when we have like a e-comerce site cart where customer adds one , two or more items in cart 
so to calculate the sum of all amount we use rest operators. */

function totalCartAmount(...amount) {
    return amount 
}

console.log(totalCartAmount(100)); // => [100] , when we use rest  operator in function parameter ,it returns an Array of the passed argument.

console.log(totalCartAmount(100,200,300,500,700)); // => [ 100, 200, 300, 500, 700 ] , An Array of passed arguments.

function totalCartAmount1(a,b,...amount1) {
    return amount1 
}

console.log(totalCartAmount1(1000,2000,30000,40000,50000)); // => [ 30000, 40000, 50000 ] ,, 1000,2000 is taken by a , b and a,b are not having rest operators so , they do not come in array. 

// Note - A Rest parameter must be the last parameter in the list.

// 2nd method ------------------ object in function -------

let company = {
    empId : 20235496,
    empName : 'Devvrat Singh'
}

function companyEmpDetails(anyobject) {
    console.log(`${anyobject.empName} is in It department  and ticket no. is ${anyobject.empId}`);
    
}

companyEmpDetails(company); // => Devvrat Singh is in It department  and ticket no. is 20235496

// we can also direct pass a object while executing a function like----

companyEmpDetails({
    empName : 'raju',
    empId : 222222
})

let manager = ['tcs','girish','ttl','vp','tml','urvish'];

function departmentManager(anyarray) {
    console.log(`${anyarray[0]} manager is ${anyarray[1]} ,
         ${anyarray[2]} manager is ${anyarray[3]} , ${anyarray[4]} manager is ${anyarray[5]}`);
    
}

departmentManager(manager); 

// one more exp ====>

    let numarray = [100,200,300,400,500,600];

    function numFunction(anyarray2) {
        return anyarray2[3]
    }

    console.log(numFunction(numarray)); // => 400 

    // we can also direct pass the array to functions ------

    console.log(numFunction([100000,30000,40000,20000,50000])); // => 20000
    
    

