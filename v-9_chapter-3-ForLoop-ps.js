//1. write a program  for print mark of student in object 

let marks = {
    harry : 98,
    mike : 70,
    shon : 30,
    tony : 40,
    gracy : 50
}
//if we use for loop for printing the marks, we have to write this type of big syntax
for(let i = 0;i < Object.keys(marks).length;i++ ){
    console.log("the marks of " + Object.keys(marks)[i] + " are -->> " + marks[Object.keys(marks)[i]]);
}


// //2. use for-in loop to print the mark of student in question number one
// //if we use for-in loop in the code is very simple and short 
// for(let i in marks){
//     console.log(" THE MARKS OF " + i + " ARE --->>>"+ marks[i]);
// }


// //3. write a program to print "try again " until user not enter correct number

// let num = prompt("enter your number");
// let correctnum = 12;

// while( num != correctnum ){
//     console.log("not correct number , try again")
//     num = prompt("enter your number");
//     num = parseInt(num);
// }
// console.log("congrats this is correct number");


 //4. write a function to find the mean of 5 numbers

//  const findmean = (a,b,c,d,e ) => {
//     return  (a + b + c + d )/4;
//  }
 
//   console.log( findmean(4,5,6,7));
 
 