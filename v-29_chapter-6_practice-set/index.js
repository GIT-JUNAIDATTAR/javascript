
/* Q 1]write a  program using prompt function to take input of age as a value from the user and use alert to
 tell him if he can drive or not
  */

 let userinput = prompt("ENTER YOUR AGE -->>");
userinput = Number.parseInt(userinput);

const candrive = (userinput) =>{
  return userinput <=18 ?true:false;
}
if(candrive(userinput)){
  alert("YOU CAN'T DRIVE");
}
else{
  alert("YOU CAN DRIVE");
}

/* Q 2] In question nummber 1 use confirm  to ask the user if he want to see the prrompt again? */ 