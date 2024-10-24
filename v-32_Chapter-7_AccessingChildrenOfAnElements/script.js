// Document- convert all the html page in documment, then we can access the html through the javascript
//           it was useful for intractive webpage
// * javacsript is run on browser
document.body; //for accesing the body of html

document.body.firstChild; // for accessing the first child of body tag in html such as - HeaderTag

document.body.lastChild; // for accessiing the last child of body tag in html such as - footer

document.body.childNodes; // for accessing the all child of body tag in html

document.body.children; // for accessing the all elements childrens in body tag in html
//                         like- header, main, footer, script

document.body.hasChildNodes(); //if body has child nodes it return true otherwise it return false

// key point- element.childNode[0] == element.firstChild
//            element.childNodes[element.childNodes.length - 1] === element.lastChild

//            childNodes-->> it consider all the nodes like text,element etc
//            children  -->> it consider only elements like body,p,h1,h2,navbar,main,footer etc
