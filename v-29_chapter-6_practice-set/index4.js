
/* Q 4] write a program to change the url to google.com (redirection) if user enter the number which 
        was greater than 4                                                                       */
        
        let userinput = prompt("ENTER YOUR NUMBEER");
        userinput = Number.parseInt(userinput);
        
        if (userinput > 4) {
          location.href = "https://www.google.com"; // we redirect to the google.com through this link
        } 