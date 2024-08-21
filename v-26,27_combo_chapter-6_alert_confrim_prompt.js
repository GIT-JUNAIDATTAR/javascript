
//prompt in javscript
// Display a prompt dialog to the user
var userInput = prompt("Please enter your name:"); //use to take input from user as string

if (userInput !== null) {  // Check if the user entered something
    console.log("Hello, " + userInput + "!");
} else {
    console.log("User cancelled the prompt.");
}


