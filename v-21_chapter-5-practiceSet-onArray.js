
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

// 3. filter a number divisible by 10 in a given array

let arr3 = [1,2,3,4,5,20,40,50,60,80,90,100];
let filarr = arr3 .filter((e)=> {
return e % 10 == 0;
});
console.log(filarr);

// 4. create an array of square of given number

let arr4 = [2,4,6,8,10];
let mularr4 = arr4 . map((x)=>{
    return x * x;
})

console.log(mularr4);

// 5. use reduce to calculate the factorial of given number from an array of first n natural number
//    ( n being  the number whose factorial need to be calculated)

let arr5= [1,2,3,4,5]
let n = arr5. reduce((x1 , x2)=>{
    return x1 * x2;
})
console.log(n);