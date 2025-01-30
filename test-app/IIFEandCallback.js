// IIFE - (Immediately Involked function expression)

// syntax
// function myfunc(){
//   console.log("Immediately called")
// }

// (function myfunc() {
//   console.log("Immediately called");
// })();

// // Normal function
// function myfunc2() {
//   console.log("Immediately2 called");
// }

// Callback function
//  is a function that is passed as an argument to another function

// function greet(name, callback) {
//   console.log("hello", name);
//   callback();
// }

// function saybye() {
//   console.log("goodbye");
// }

// greet("max", saybye);

// // e.g
// function sum(a, b, calldisplay) {
//   let result = a + b;
//   calldisplay(result);
// }

// function display(result) {
//   console.log("Sum is", result);
// }

// sum(2, 4, display);

// const arr = [1, 2, 3, 4, 5];
// e.g 1
// arr.map((mapfun) => {
//   console.log(mapfun);
// });

// function mapfun(ele) {
//   console.log(ele);
// }

// // e.g 2
// arr.map(function (ele) {
//   console.log(ele);
// });

// // e.g 3
// arr.map((ele) => {
//   console.log(ele);
// });

// Rest operator - collects multiple arguments into a single array

// syntax
// (...)

// function restop(...number) {
//   console.log(number);
// }
// restop(2, 3, 4, 6);

// function sum(...number) {
//   return number.reduce((acc, num) => acc + num, 0);
// }

// console.log(sum(3, 5, 7, 4));

// Spread Operator - spread out elements of an array or object

// syntax
// (...)

//explading array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6, 7, 8, 9, 10];
console.log(arr2);

// combining objects

const person = { name: "anuj", age: 25 };
const updatedPerson = { ...person, city: "Pune" };
console.log(person, updatedPerson);


// BOM - Browser Object Model
// window - now can we do pagm using window object
