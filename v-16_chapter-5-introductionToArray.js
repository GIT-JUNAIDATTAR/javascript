 
//ARRAYS are the varsibles wich can hold more than one values

let name = [ "mike " , "michel" , "harry" , "carry"];
console.log(name);

console.log(name[0]);                         //imp point - arrays are mutable,arrays are change
console.log(name[1]);                         //            strings are imutable , strings can not change
console.log(name[2]);
console.log(name[3]);

console.log(name[4]); // if the value is not avalaible its show the output undifined

console.log(name.length); // length always counnt eelements , starts from 1

name[4]= "anas";
console.log(name[4]); // we can add more values after

name[0]= "junaid"; // we can also change the value of array 
console.log(name[0]);

console.log(typeof name);// we can se the datatype of value inserted in array

let a =["name",8,2.2,"a"] // diffrent type of values we can insert in array