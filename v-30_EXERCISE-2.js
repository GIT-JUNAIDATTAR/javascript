 
 /* Q] use javascript to create a gamme of snake , water and gun . the game shouldd ask you to enter
       S,W or G . the computer should be able to randomly generate S,W and G andd declare winn or loss 
       using alert ,prompt and confirm whenever  required */

       function generateString(){
            const charector = ['s w g'];
            const randomindex = Math.floor(Math.random() * charector.length;)
            return charector[randomindex];
       }


       let userinput = "s";//prompt("choise - S-snake,W-water,G-gun");

       



