

/* Q ] write a javascript program to generate a random number
    * and store it in a variable
    * then write a program to take input from user to tell them weather the geuss was correct,greater or
      leasser than the original number
    * 100 - (number of geusses) the score of the user 
    * once the number geuss is correct ,stop the program
    * the number should be bitween 1 - 100
    * count the chance of user in chance variable
    * after game is over display the number of chance and the actual number    
*/

const randomNumber = Math.floor(Math.random() * 100) + 1;
let userinput = prompt("Guess the number bitween 1 to 100--->>>");
