// DOM manipulation using the id (given in html)

let card1 = document.getElementById("card-1");
card1.style.background = "#90ebf0";

let card2 = document.getElementById("card-2");
card2.style.background = "#5ced64";

let card3 = document.getElementById("card-3");
card3.style.background = "#e67076";

//DOM manipulation using class(given in html)

let cardt = document.getElementsByClassName("card-title")[0]; // we can change the color of specific class like this
cardt.style.color = "red";
