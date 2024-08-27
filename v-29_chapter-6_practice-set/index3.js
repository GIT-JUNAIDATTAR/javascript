
/* Q 3] in the privious question use console.error to log the error if the age enterd is nigative */ 




let runagain = true;
const candrive = (userinput) => {
  return userinput <= 18 ? true : false;
}

while (runagain) {
  let userinput = prompt("ENTER YOUR AGE -->>");
  userinput = Number.parseInt(userinput);

  if (userinput < 0) {
    console.error("INVAILD AGE"); // this show error when age is entered in nigative intiger 
    break;
  }
  if (candrive(userinput)) {
    alert("YOU CAN'T DRIVE");
  }
  else {
    alert("YOU CAN DRIVE");
  }
  runagain = confirm("DO YOU WANT TO FILL AGAIN");
}

