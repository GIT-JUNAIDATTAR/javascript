// 1.use the logical operator to find whether the age of person lies bitweenn 10 and 20.
//this is example of or "&&" logical operator,in this "&&" chek all statement is true or not?,if true it exicuted,if one of these is false it does not executed

let age1 = 15;//prompt (" enter your age please--->>>");
if(age1 > 10 && age1 < 20) {
    console.log("your age is bitween 10 to 20")
}
else{
    console.log("you age is not bitween 10 to 20")
}

//2.demonstrate the use of the switch case statement in javascript
//use of switch case

let age2 = 15;//prompt (" enter your age please--->>>");

switch(age2){
    case 11 :console.log("your age is 11"); break;
    case 12 :console.log("your age is 12"); break;
    case 13 :console.log("your age is 13"); break;
    case 14 :console.log("your age is 14"); break;
    case 15 :console.log("your age is 15"); break;
    case 16 :console.log("your age is 16"); break;
    case 17 :console.log("your age is 17"); break;
    case 18 :console.log("your age is 18"); break;
    case 19 :console.log("your age is 19"); break;
}

//3. write a javascript program to find whether a number divisible by 2 or 3 
  
// and "||" logical operator is use in this example ,if one statement is correct it is exicuted
let num =5;

if(num % 2==0 || num % 3==0){
    console.log("this number is divisible by 2 and 3");
}
else{
    console.log("this number is not divisible by 2 and 3");
}