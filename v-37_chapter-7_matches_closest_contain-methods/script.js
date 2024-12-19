//matches() method-
//                  The matches() cheks an element matches the specific css selector .
//                  it returns true if element matches css selector otherwise it return false

let first = document.body.querySelector(".first");
console.log(first);
if (first.matches(".first")) {
  console.log("matches the selector");
} else {
  console.log("not matches the selector");
}

let container = document.body.querySelector(".container");
console.log(container);

if (container.matches(".first")) {
  console.log("matched to selector");
} else {
  console.log("not matched to selector"); //because- matches() checks if the element itself matches a specific CSS selector.
  // It doesn't look at child elements inside it.
}

// closest-
//          it looks the nearest ancesstor,that matches the given css selector
//          its also chek itself and make match until match was not found like- itself->parents class->grandParents class
//          ↑ this is diffrent bitween matches and closest method
if (container.closest(".first")) {
  console.log(first);
} else {
  console.log("null");
}

if (first.closest(".container")) {
  console.log(container);
} else {
  console.log("no closest");
}

if (first.closest(".first")) {
  //  closest- chek itself(first class element) also
  console.log(first);
} else {
  console.log("itself chek but not match");
}


//