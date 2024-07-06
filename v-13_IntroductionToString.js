
//A string is a collection of characters enclosed in quotes. In JavaScript, you can use either single quotes or double quotes to create a string.

let name = "junaid"; //we write string in this way
let surname = 'attar'; // we can also write sting in this way
//let wrongstring = " wrong way '; // this is incorrect way to write the string

// if we want to convert any number ex-"7" into string we can change the type of value in string by using - toString();

let a = 7;
let b = a.toString();
console.log(typeof(b)); //typeof is to identify data type
                        // output --->>> string
//by this way we can change the number value into the string value

//Template Literals-
//You can also use backticks ` (it is the button under your escape key) to create a string, called a template literal. This is useful when you need to embed variables within a string. Without template literals, you would need to concatenate strings and variables using the + operator. Here's an example:

// when we dont use template literals

let n = "mike";
let f = "mango";

console.log("hello my name is " + n + " and my favorite fruit is " + f);

// when we use template literal

console.log(`HELLO MY NAME IS ${n} AND MY FAVORITE FRUIT IS ${f}`);// Remember we are using the backtic-``


//Escape Sequences-
//Sometimes, you may want to use a character that is already used in JavaScript. For example, you may want to use a single quote within a string. In this case, you can use an escape sequence. An escape sequence is a backslash \ followed by a character that tells the JavaScript interpreter to interpret the following character in a special way. Here are some examples

let sentence = 'She said, "Hello!"';
console.log(sentence);                  // Output: She said, "Hello!"

sentence = "She said, \"Hello!\"";
console.log(sentence);                  // Output: She said, "Hello!"

sentence = "She said, \"Hello!\"";      // Output: She said, "Hello!" - here wwe understand 
                                        //when and where we have have to use the backslash in string

 // some special charectors for better understanding
 
 let sentence1 = "Hello\nWorld";
console.log(sentence1); // Output:   Hello
                         //         World
sentence1 = "Hello\tWorld";
console.log(sentence1); // Output: Hello   World
                         
let sentence1 = "Hello\n\tWorld";
 console.log(sentence1); // Output: Hello
                         //         World