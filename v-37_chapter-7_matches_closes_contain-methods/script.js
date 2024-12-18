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
