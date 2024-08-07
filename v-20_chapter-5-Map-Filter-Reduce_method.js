
// map() - 
//        map() method create new array ,from performing some new operation on each array element.

//* map() method is similar to the for each method but ,for each method not return the new array in return

let num1 = [1,2,3,4,5];

let fnum1 = num1.map((value,index,array)=>{ //making new array and storing the value,index,array of num1
                                           //object with the help of map() method

    console.log(value,index,array); //output- 1 0 [ 1, 2, 3, 4, 5 ]
                                    //        2 1 [ 1, 2, 3, 4, 5 ]
                                    //        3 2 [ 1, 2, 3, 4, 5 ]
                                    //        4 3 [ 1, 2, 3, 4, 5 ]
                                    //        5 4 [ 1, 2, 3, 4, 5 ]     
})                             //     value index [array]       value starts from 1 , index starts from 0



// filter() -
//            filter() methods filter the value of array wich pases a test ,and also creates a new array

let num2 = [1,2,3,4,5,20,30,50,90,100];

 fnum2 = num2.filter((value)=>{ // filtering the value of num2 

   return value <= 30; // filter the test less than and equal to 30

})
console.log(fnum2); // output-  1,  2,  3, 4, 5, 20, 30 


// reduce() -
//            reduce() method  reduce an array to a single value

let num3 = [10,15,20,25,30];

let sum3 = num3.reduce((v1 , v2)=>{

    return v1 + v2;  //reducing array values to the single value ,ex-after adding
}) 

console.log(sum3); // output - 100(single value of array num3)