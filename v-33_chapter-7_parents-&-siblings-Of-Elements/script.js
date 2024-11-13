// for accesing the first element of body

document.body.firstElementChild; // -- div

// for accesing the first element chiild of first element child

document.body.firstElementChild.firstElementChild; // -- div.first

//for accesing the second element child of the first element child

document.body.firstElementChild.firstElementChild.nextElementSibling; //-- div.second

// to access the privious element sibling
let a = document.body.firstElementChild.firstElementChild.nextElementSibling;
console.log(a.previousElementSibling); //--.div.first

// for accesing the next sibling of first element of first element

document.body.firstElementChild.firstElementChild.nextSibling; //-- text , because it consider whitespace
//                                                                        after div as a node

/*Note -  example of Next/Right and Previous/Left Siblings

         <div>Some content</div>
         <p>Some text</p>
         
         In the DOM tree, the siblings of an element are arranged in a linear fashion. The element that is to the right of the current element is called the next sibling and the element that is to the left of the current element is called the previous sibling. In the following HTML code, the <p> element is the next sibling of the <div> element and the <div> element is the previous sibling of the <p> element
         
         
         
         */
