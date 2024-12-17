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
cardt2.style.color = "black";

let cardt3 = document.getElementsByClassName("card-title")[2];
cardt3.style.color = "blue";

//DOM manipulation using queryselector
//queryselector- method return the first element thats matches the specified css selector

document.querySelector(".btn").style.background = "red"; // select only first element

//DOM manipulation using queryselectorAll
//querySelectorAll- method return the all elements inside an element matching the given css selector(like- .btn)

document.querySelectorAll(".btn")[1].style.background = "black"; // can select all element  matching the css selector

document.querySelectorAll(".btn")[2].style.background = "blue";

//DOM manipulation using getElementByTagName
//getElementByTagName- return the element with given tagname(like - p)

document.getElementsByTagName("p")[0].style.color = " red"; // manipulate through tag name[<p>]
document.getElementsByTagName("p")[1].style.color = "black";
document.getElementsByTagName("p")[2].style.color = "blue";

//Dom manipulation using GetElementByName
//GetElementByName- searches element by the name attributes

document.getElementsByName("submit")[0].style.backgroundColor = "green"; // Select the button by its 'name' attribute
document.getElementsByName("submit")[0].style.color = "#ffffff"; // Select the button by its 'name' attribute
