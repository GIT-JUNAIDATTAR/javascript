
/*
   DOM(document object model)-
              DOM represent the page content as HTML

              document.body -> page body as js-object

              document.body.style.background =" black " -> change page background to black

              With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

              When a web page is loaded, the browser creates a Document Object Model of the page.

              With the object model, JavaScript gets all the power it needs to create dynamic HTML:

             1> JavaScript can change all the HTML elements in the page
             3>JavaScript can change all the CSS styles in the page
             4>JavaScript can remove existing HTML elements and attributes
             5>JavaScript can add new HTML elements and attributes
             6>JavaScript can react to all existing HTML events in the page
             7>JavaScript can create new HTML events in the page
             2>JavaScript can change all the HTML attributes in the page
*/

/*
   BOM(browser object model)-
            BOM represent the additional object provided by the browser(host environment)
            for working with everything accept the document.

            the function alert-prompt-confirm are also the part of BOM.

            location.href = "https://amazon.com" - redirect to another url.

            The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.

            There are no official standards for the Browser Object Model (BOM).

            Since modern browsers have implemented (almost) the same methods and 
            properties for JavaScript interactivity, it is often referred to, as
            methods and properties of the BOM.

   The Window Object -
            windows object represent the browser windows and provide the method to control it.

            WINDOW is global object

            The window object is supported by all browsers.

            All global JavaScript objects, functions, and variables automatically become members
            of the window object.

            Global variables are properties of the window object.

            Global functions are methods of the window object.

*/

   document.body.style.background ="yellow"; //changing the background color of webpage through js

   //the question is why i style the web page through js??
   //answer- because when we want to perform work after users action then we need the javascript to style

   console.log(window);// window is global object and we can print window object like this .

   // whatever is happning in javascript is all come under the window object.

   console.log(document); /* document means - all your html code is converted into javascript object
                             and all your body and all things converted into javascript object
                             and stored in document.

                             when we write code ,console.log(document); we can find the document and 
                             inside the document we find the html code converted in javascript object,
                             and we can easyly manipulate the code with javascript 
                            
   */

   console.log(document.body);// we can access the body of document by this and 
                              // and manipulate through javascript easyly
                              
   location.href=/*"https://amazon.com"*/; // it is examplle of BOM , and part of BOM , we directly goes
                                          //on website of amazon when we remove the comment                          

