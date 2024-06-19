// simple program using for loop

for( let i = 0 ; i<=5 ; i++){
    console.log(i);
}

// writing the program to add n natural number

let sum = 0;
let num = 5;
for(let i = 0;i < num; i++){
    sum = sum + (i+1);
    
}    

console.log("The sum of "+ num + " is "+ sum);

//example of for-in loop

let obj ={
    junaid : 100 ,
    abcd : 90 ,
    efgh: 50 ,
    ijkl : 40
}

for (let a in obj){
    console.log( "Mark of "+ a + " is -> "+ obj[a]);
}

// basic example of for-of loop

for(let b of "junaid"){
    console.log(b);
}


//question for self work is , write javascript program of factorial number

let factorial = 1;
let n = 5;
for(let i = 1; i<=n ;i++){
    factorial = factorial * i;
}
console.log("The factorial of "+ n + " is "+ factorial);