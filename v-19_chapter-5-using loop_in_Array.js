
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