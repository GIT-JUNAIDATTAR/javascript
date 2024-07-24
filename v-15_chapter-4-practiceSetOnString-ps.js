//Q 1. what will be the  out put of console.log("har\"" .length)

console.log("har\"".length); //ans is -->>4


//Q 2.explore the include ,startwith, end with functions of string

const a ="cat want to drink milk";

const b ="milk";

//examples of startsWith function of string

console.log(`${b} ${a.includes(b) ? "is in" : "is not in"}  the sentence`);

console.log(`${a.startsWith("c")}`); // its output is - true a is start with "c".

console.log(`${a.startsWith("C")}`); // in this it return - false because this function is case sensitive

console.log(`${a.startsWith("m" , 18)}`) // output is -true ( because m is on index [18] in a)

console.log(`${a.startsWith("cat" , 1)}`) // output is -false (because its start cheking from index [1] 
                                          //and c is in index[0]) 

console.log(`${a.startsWith("at" , 1)}`) // output is -true (because its start cheking from index [1]) 

// examples of endsWith function of string


console.log(`${a.endsWith("milk")}`);//its output is - true because its ends with "milk".

console.log(`${a.endsWith("Milk")}`); // Output: false (case-sensitive)

console.log(`${a.endsWith("milk", 22)}`); // Output: true (checking up to index [21] and its ends on [22])

console.log(`${a.endsWith("milk", 20)}`); // Output: false (checking up to index [20])

