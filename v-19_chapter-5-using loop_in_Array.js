
//Looping through array - 
//                        arrays can be looped through using the classical javascript for loop and 
//                        through other method discuss below 


//Classical For Loop -

let num = [1,2,3,4,5];
for(i=0;i<num.length;i++){
    console.log(num [i]); //output : 1,2,3,4,5
}

//For Each Loop-     
//               call a function onece for each array element
//        suppose i have to multiply each array element to itself then we can use 'for each loop'.

let num1 =[1,2,3,4,5];
num1.forEach((Element)=>{ // calling function for each element onece time
    console.log(Element * Element); //output - 1 ,4 ,9 ,16 ,25. 
})

//Array from -
//             'from' is use to convert any other object in array

let name = 'carry';
console.log(typeof name);
let arr = Array.from(name); //using from for converting string to an array.
console.log(arr);  // output - ['c','a','r','r','y']
console.log(typeof arr); // output - object(array object);


//for of loop -
//             for of loop is used to get the value from an array.
let num2 = [1,2,3,4,5];
for (let i of num2){  // using for of loop for getiing an array of num2.  
  console.log( i );
}

//for in loop -
//              for in loop can be use to get keys from the array

let num3 =[11,22,33,44,55];//[0,1,2,3,4]
for (let i in num3){  // getting the keys of array num3;
    console.log(i); // output -[0,1,2,3,4]
}

