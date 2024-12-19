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
