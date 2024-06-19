// simple program using for loop
/*
for( let i = 0 ; i<=5 ; i++){
    console.log(i);
}

// writing the program to add n natural number

let sum = 0;
let num = 5;
for(let i = 0;i < num; i++){
    sum = sum + (i+1);
    
}    

console.log("the sum of "+ num + " is "+ sum);
*/

//example of for-in loop

let obj ={
    junaid : 100 ,
    abcd : 90 ,
    efgh: 50 ,
    ijkl : 40
}

for (let a in obj){
    console.log( "mark of "+ a + " is -> "+ obj[a]);
}

