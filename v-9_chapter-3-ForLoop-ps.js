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
