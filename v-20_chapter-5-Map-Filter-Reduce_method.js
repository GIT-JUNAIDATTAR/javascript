
// map() - 
//        map() method create new array from performing some new operation on each array element.

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

