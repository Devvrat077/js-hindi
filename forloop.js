// for loop -----------------------

//  we can use if-else inside loops. 

for(let i=1;i<11;i++){
    const result = i;
    
    if(result == 7){
        console.log("7 is my birthday");
        
    }

    console.log(result);
    
    
}

// we can also use loops inside loops exp-----

for(let i=1;i<=10;i++){
    console.log(`outerloop ${i}`);

    for(let j=1;j<=10;j++){
        console.log(i + "*" + j +"=" + i*j);
        
    }
    
}

// Above we are printing table from 1 to 10 , this is very "important" loop code.

// now loop exp with array -----------

const superHeroes = ["ironman","batman","superman","spiderman"]

for(let i=0;i<superHeroes.length;i++){
    console.log(superHeroes[i]);
    
}

/* How we can control a loop ,like when we want to stop a loop at a particular time , when we 
get our desired output from loop .  for this we use 'break' just like we use in switch case. 
break makes the compiler to get out from the loop exp ----  */

for(i=1;i<=10;i++){

if(i==7){
    console.log("on" + " "+i+" "+ "it is my b'day please stop loop here now i want to stop this day." );
    break;
}

    console.log(i);
    
}

/* Now - 'continue'  it says that when our desired  output comes then after that our loop will run 
, our loop will not get exist . but our desired output will not get executed by loop. exp ---- */


for(i=50;i<=60;i++){

    if(i===57){
        console.log(`this ${i} number will not printed by loop code as i = 57 `);
     continue;   
    }

    console.log("i="+ " "+ i);
    
}








