
// 1.create an array of a number and take input from user to add  number to this  array 

let arr = [10,20,30,40,50];
let add_arr = prompt("enter array element to add in object--->>>");
add_arr = parseInt(add_arr);
arr . push(add_arr);
console.log(arr);

// 2 .keep adding array until 0 is not entered

let arr2 = [1,2,3,4,5];
let addarr2;
do {
     addarr2 = prompt("enter your array element to add in object");
addarr2 = parseInt(addarr2);
arr2.push(addarr2);
console.log(arr2); } while(addarr2 != 0);
console.log(arr2);
 