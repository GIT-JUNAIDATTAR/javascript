
//prompt in javscript -
// Display a prompt dialog to the user
   var userInput = prompt("Please enter your name:"); //use to take input from user as string

   if (userInput !== null) {  // Check if the user entered something
    console.log("Hello, " + userInput + "!");
   } 
   else {
    console.log("User cancelled the prompt.");
   }

//alert in javascript -
// Display an alert with a variable
var userName = "Alice";
alert("Welcome, " + userName + "!"); //use to invoke mini window with a massage alert("hello")
document.write(userName); // document.write is use to display on webpage through javascript

//confirm in javascript -
// Display a confirmation dialog with a message
var userConfirmed = confirm("Are you sure you want to proceed?"); //show a massage and wait for user
                                                                 // to press ok or cancel return true 
if (userConfirmed) {                                             //for ok and false for cancel
    console.log("User clicked OK.");
} else {
    console.log("User clicked Cancel.");
}

//the exact location and look is ditermined by the browser whic is a limitation