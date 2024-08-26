

/* Q 2] In question nummber 1 use confirm  to ask the user if he want to see the prrompt again? */ 




let runagain = true;
  const candrive = (userinput) =>{
    return userinput <=18 ?true:false;
  }
    
while(runagain){
  let userinput = prompt("ENTER YOUR AGE -->>");
  userinput = Number.parseInt(userinput);
  
  if(candrive(userinput)){
    alert("YOU CAN'T DRIVE");
  }
  else{
    alert("YOU CAN DRIVE");
  }
  runagain = confirm("DO YOU WANT TO FILL AGAIN");
}

if(candrive(userinput)){
  alert("YOU CAN'T DRIVE");
}
else{
  alert("YOU CAN DRIVE");
}
