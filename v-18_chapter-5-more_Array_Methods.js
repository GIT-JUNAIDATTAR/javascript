
// delete operator of array

let num =[1,2,3,4,5,6,7,8,9,10];
console.log(num.length);
delete num[0];            // by using the delete operator of array we can delete the element of array
console.log(num);
console.log(num.length);   // but the length of array is not deleted //-imp

// concat method of array

let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9,10];
console.log(num1,num2);            // concat() is use to join array to given array
let finalnum = num1 .concat(num2); // by using concat method we can join the two or more array
                                   // element in the form of new array
console.log(finalnum);   

console.log(num1,num2);  //but not change the original array, old array is not disturb through concat()



