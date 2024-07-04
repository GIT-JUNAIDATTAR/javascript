// if we have to calculate the avrage of numbers without using function

let a = 1;
let b = 2;
let c = 3;

console.log("Average of a and b is -->>" +(a + b )/ 2)
console.log("Average of c and b is -->>" +(c + b )/ 2)
console.log("Average of a and c is -->>" +(a + c )/ 2)

//In downside code we will use the function to calculate the avarage of numbers

function avg  (x , y) {
    return (x + y)/2; // when we change anything in funnction , it can be reflect  wherever we use this function
}

let d = 4;
let e = 5;
let f = 6;

console.log("average of d and e is --->>>"+ avg(d,e));
console.log("average of  f and e is --->>>"+ avg(f,e));
console.log("average of d and f --->>>"+ avg(d,f));

// by decalaring function we use the logic of code one time and and we can use it multiple time by calling those function, and it saves our time
