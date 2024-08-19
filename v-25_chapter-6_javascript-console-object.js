
console.log("hello"); // console.log- output a massage to console

console.info("important massage for you")//console.info- use for special information

console.warn("warning for you");//console.warn- use to give warning

console.error("you got error");// console.error- use for give error

console.assert(5>10);//console.assert- used to assert the condition
 //( cheking the condition)

 console.time("for loop"); //console.time- start counting time of for loop.

 for (let i = 0; i < 50; i++) {
    console.log(5)
  }

  console.timeEnd("for loop");//console.timeEnd- display the recorded time of for loop

  //when we have to compare the time period of for loop and while loop

  
console.time("whileLoop")

let i = 0;
while (i < 50) {
  console.log(5)
  i++;
}

console.timeEnd("whileLoop")