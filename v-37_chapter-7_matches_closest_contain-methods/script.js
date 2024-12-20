//matches() -
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

// contains -
//            return true if element-B is inside element-A
//            contains() method is used to check if a specified node (element) is a descendant of a particular node.

if (container.contains(first)) {
  console.log("yes this is child of container class");
} else {
  console.log("no, this is not child container class");
}

/*  Here are the key points in a simple, memorable format for each method:-

### 1. **`matches()`**

- **Purpose**: Checks if an element **itself** matches a CSS selector.

- **Trigger**: "Does this element look like the selector?"


### 2. **`closest()`**
- **Purpose**: Finds the **nearest ancestor** (or the element itself) that matches a selector.

- **Trigger**: "Which parent is this element closest to that matches the selector?"


### 3. **`contains()`**
- **Purpose**: Checks if one element is a **child** (or descendant) of another.

- **Trigger**: "Is this element inside the other element?"


### Quick Mental Triggers:
- **`matches()`** = **"Is this element the one?"**

- **`closest()`** = **"Which parent matches this?"**

- **`contains()`** = **"Is this inside that?"**

These simple phrases will help you quickly recall the purpose of each method when working with the DOM. */
