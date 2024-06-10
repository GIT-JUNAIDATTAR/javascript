
let age = prompt("Hello enter your age please");

console.log(typeof age); // typeof is use for identify wich type of data is this
console.log(age);

age = Number(age);
console.log(age);

age = parseInt(age); // parseint is use to convert string into number
console.log(age);

// using if ,else and else-if statement
if(age <= 18){
    console.log("your are not aligible");
}

else if(age > 18){
    console.log("you are aligible");
}

else{
    console.log("invalid input");
}


// using ternary operator


let input = prompt("enter any string");
 
if( input === "hello"){
    console.log("hello world");
}

else{
    console.log("good byee");
}


// another example of ternary operator

let drivingcar = ("enter your age");

console.log( "you can" (drivingcar<18? "you can not drive the car" : "you can drive the car"));