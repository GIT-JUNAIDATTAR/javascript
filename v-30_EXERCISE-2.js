 
 /* Q] use javascript to create a gamme of snake , water and gun . the game shouldd ask you to enter
       S,W or G . the computer should be able to randomly generate S,W and G andd declare winn or loss 
       using alert ,prompt and confirm whenever  required */

       function generateString(length){
            const charector = 's w g';
            let result = ' ';

            for(let i = 0;i < length;i++){
                  const randomindex = Math.floor(Math.random() * charector.length);

                  result += charector[randomindex];
            }

            return result;

       }


       let userinput = prompt("choise - S-snake,W-water,G-gun");
