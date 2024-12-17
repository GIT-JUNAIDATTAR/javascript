// DOM manipulation using the id (given in html)
//getElementByID- method is use to get the element with a given 'id'.

let card1 = document.getElementById("card-1"); // getElementByID return only one element
card1.style.background = "#90ebf0";

let card2 = document.getElementById("card-2");
card2.style.background = "#5ced64";

let card3 = document.getElementById("card-3");
card3.style.background = "#e67076";

//DOM manipulation using class(given in html)
//getElementsByClassName- return elementthat have the given css class
let cardt1 = document.getElementsByClassName("card-title")[0]; // we can change the color of specific class like this
cardt1.style.color = "red";

let cardt2 = document.getElementsByClassName("card-title")[1];
cardt2.style.color = "orange";

let cardt3 = document.getElementsByClassName("card-title")[2];
cardt3.style.color = "blue";
