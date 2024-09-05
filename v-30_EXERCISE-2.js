 
 /* Q] use javascript to create a gamme of snake , water and gun . the game shouldd ask you to enter
       S,W or G . the computer should be able to randomly generate S,W and G andd declare winn or loss 
       using alert ,prompt and confirm whenever  required */

       function generateString(){
            const charector = ['s','w','g'];
            const randomindex = Math.floor(Math.random() * charector.length);
            return charector[randomindex];
       }


       let userinput = prompt("choise - S-snake,W-water,G-gun");
       while(!['s','w','g'] . includes (userinput)){
            alert ("invalid input , please choice s w or g");
            userinput = prompt("choose the following - s-snake,w-water,g-gun--->>>").toLowerCase();
       }

       let computerChoice = generateString();
       console.log("computer choise: " +  computerChoice);
       
      function determineresult(user , computer){
            if(userinput == computerChoice){
                  return("match draww")
            }

            if (
                  user === "s" &&  computer === "w" || user === "g" && computer === "s"||
                  user === "w" &&  computer === "g"
            ){
                  return "you win";
            }

            else{
                  return "you lose";
            }
      }

      const result = determineresult(userinput,computerChoice);
      console.log(result);
