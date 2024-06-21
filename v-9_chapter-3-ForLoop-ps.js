//1. write a program  for print mark of student in object 

let obj ={
    harry : 98,
    rohan : 70,
    akash : 7
}

//2. use for-in loop to print the mark of student in question number one

for(let mark in obj){
    console.log(obj[mark]);
}

//3. write a program to print "try again " until user not enter correct number

let num = 11;


    if(num>0 && num<=10){
        console.log("corect number");
    }

    else{
        console.log("try again");
    }

 //4. write a function to find the mean of 5 numbers

 let num1 =1 , num2 = 2, num3 = 3, num4 = 4, num5 = 5;

 let totaln = num1 + num2 + num3 + num4+ num5;

 let mean = totaln / 5;

  console.log("Mean of given  five numbers is --->>> " + mean);
 
 