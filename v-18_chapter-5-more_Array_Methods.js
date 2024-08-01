
// delete operator of array

let num =[1,2,3,4,5,6,7,8,9,10];
console.log(num.length);
delete num[0];            // by using the delete operator of array we can delete the element of array
console.log(num);
console.log(num.length);   // but the length of array is not deleted //-imp

// concat() method of array

let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9,10];
console.log(num1,num2);            // concat() is use to join array to given array
let finalnum = num1 .concat(num2); // by using concat method we can join the two or more array
                                   // element in the form of new array
console.log(finalnum);   

console.log(num1,num2);  //but not change the original array, old array is not disturb through concat()


// sort()  method of array

let char = ['z','b','c','a','e','d'];
 console.log(char);
char .sort();      //  sort() method is use to sort an array alphabeticaly
console.log(char); // now output is -[ 'a', 'b', 'c', 'd', 'e', 'z' ]

// example of number sorting for clear the point

let num3 =[50,20,40,10,30];
console.log(num3); //before -50,20,40,10,30
num3.sort();       // after sorting
console.log(num3); // after- 10,20,30,40,50

// splice() method of array

const num4 =[11,22,33,44,55];
console.log(num4);
                    //splice() method is use to add new item in array ,and also use to modify arrays by 
num4.splice(2,1,0); //adding, removing, or replacing elements.
// splice (positio to add , no of element to remove , element to added)
console.log(num4);

//more examples of splice()

//1 ---------------->>>

let fruits = ['apple', 'banana', 'cherry', 'date'];
console.log('Original array:', fruits); // Output: ['apple', 'banana', 'cherry', 'date']

// Remove 2 elements starting from index 1
fruits.splice(1, 2);
console.log('Array after removal:', fruits); // Output: ['apple', 'date']

// 2----------------->>>

let fruits1 = ['apple', 'banana', 'date'];

// Add 2 elements starting at index 1
fruits1.splice(1, 0, 'orange', 'grape');
console.log('Array after addition:', fruits1); // Output: ['apple', 'orange', 'grape', 'banana', 'date']


//  3----------------->>>

let fruits2 = ['apple', 'banana', 'date'];

// Replace 1 element starting at index 1 with 2 new elements
fruits2.splice(1, 1, 'orange', 'grape');

console.log('Array after replacement:', fruits2); // Output: ['apple', 'orange', 'grape', 'date']


