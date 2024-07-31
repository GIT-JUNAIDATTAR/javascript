
// to.String() method of array

let a = [1,2,3,4,5];
let b = a.toString(); // By using toString() method of array, we can converts any datatype into String
console.log(b);
console.log(typeof b);

// join() method of array

 let c = a.join("->"); // by using join() method of array,we can join all the array element using a seprator
 console.log(c);
 console.log(typeof c); //but return in string format

// pop() method of array

let d = [1,2,3,4,5];
d.pop();             // pop() method of array is use to popout(remove) the element from last
console.log(d);

let e = d.pop(); //we can also see the poped element in this way
console.log(e);

//push () method of array

let f = [1,2,3,4];
f.push(5);     // by using push() method of array we can push new element in array
console.log(f);

// shift () method of array

let g = [10,20,30,40,50];
g.shift();                //shift() is use for remove first element of array and return it
console.log(g);