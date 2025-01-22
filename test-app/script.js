// var a = 4;
// console.log(a);
// console.log(b);
// var b = true;

// function fn(b) {
//   return b * a;
// }
// console.log(fn(b));

// Varibles
// var
// var is a global variable(scope)
// var can be reassigned
// var can overide content because is a global variable
// alternative for var(bcoz of is drawback)
// var a = "swapnil";

// {
//   var a = 3;
// }
// console.log(a);

//  let
// let is a local variable(scope)/block scope
// let can be reassigned
// let can not overide content because is a local variable
// let b = "umesh";

// {
//   let b = 9;
//   b = "hungry";
//   console.log(b);
// }

// console.log(b);

//  const
// const is a local variable(scope)/block scope
// const can not be reassigned
// const can not overide content because is a local variable
// const c = "https://jsonplaceholder.typicode.com/posts";
// {
//   const c = 3.14;
//   console.log(c);
// }
// console.log(c);

// Data types

// Primitives

// String  "swapnil"
// Number  1,2,3
// Boolean  true/false
// BigInt  BigInt(982374987q29384798732)
// null     null
// undefined  undefined
// Symbol    Symbol()

// var firstname="Umesh";
// console.log(typeof firstname);

// let nulvarible = null;
// console.log(nulvarible);

// const conva = null;
// console.log(conva);

// var undefinedvarible=undefined;
// console.log(undefinedvarible);

// Reference/No-primitives
// object, array;

// let obj1 = {
//   name: "swapnil",
//   age: 23,
//   true: true,
// };

// console.log(obj1.name, obj1.age);

// let arr1;
// arr1 = [1, 2, true, "test", null, undefined, Symbol()];
// console.log(typeof arr1[6]);

// function myfun(a, b) {
//   return a * b;
// }
// function myfun2() {
//   console.log("func 2");
// }
// console.log(myfun(2, 4));

// myfun2();

let a = 2;
let b = 2;

// let obj = {
//   name: "swapnil",
// };
// let obj2=obj

// Function
var arg = 35;
function myfunc2(number1, num2) {
  return number1 + num2;
}
// console.log(myfunc2(25, false, 58));
// console.log(myfunc2(54, true, 37));

// Hoisting
// In js the default behaviour of js where function/variable declared at the top

// object methods
// An object is a collection of properties

let mobilename = "redmi";
let mobilemerory = "123GB";

let mobile = {
  model: "redmi",
  memeory: "123GB",
  camera: {
    frontcamera: 12,
    backcamera: 40,
  },

  getmemoryandcamera: function () {
    return (
      "the memory is" +
      this.memeory +
      " " +
      "and the frontcamera is" +
      this.camera.frontcamera
    );
  },
  getfrontandbackcamera: function () {
    return this.camera.frontcamera + this.camera.backcamera;
  },
};

// console.log(mobile.model, mobile.memeory, mobile.camera.backcamera);
// console.log(mobile["camera"]);

// Get the properties and methods
// let screenandmemorysize = mobile.getmemoryandcamera();
// console.log(screenandmemorysize);
// console.log(mobile["memeory"]);

// Update the properties
// mobile.memeory = "200GB";
// console.log(mobile);

// //Delete properties
// delete mobile.model
// console.log(mobile);

// Array
// const arr = [1, 2, 3, 4, 5, true, undefined, Symbol()];
// console.log(typeof arr);
// is a special kind of object
// its not fixed length
// Homoegeneous (anything can be stored in an array)

// 3 ways to create an array
const arr1 = [1, 2, 3, 4];

// const arr2 = [];
// arr2[0] = 1;
// arr2[1] = 2;
// arr2[2] = 3;
// arr2[3] = 4;

// const arr3 = new Array(1, 2, 3, 4);
// this is not prefered bcoz its slow and it uses the constructer

const arr4 = new Array(10);
arr4[1] = "hello";
// create blank array of 10 elements

// console.log(arr1, arr2, arr3);

// Array methods
// Length
// console.log(arr3.length);

// Push/add element
// arr1.push("hundai");
// console.log(arr1);

// // adding the element using index at index 3
// arr1[2] = "bmw";
// console.log(arr1);

// //toString() - default method of array
// console.log(arr1.toString());

// pop() -remove last element
// arr1.pop();
console.log(arr1);

// Shift() - remove the element but first
// arr1.shift();
// console.log(arr1);

// Unshift() - add element at the beginning
// arr1.unshift("hundai");
// console.log(arr1);

// splice - remove/add elements
// arr1.splice(1, 2, "bmw");
// // arr1.splice(index of start, no. of elements to delete, elements to add);
// console.log(arr1);

// slice - recreate any array from the existing array
const arr5 = arr1.slice(1, 3);
// arr1.slice(start index, end index(until that index));
console.log(arr5);

// concat()- merge two arrays
let arr6 = arr1.concat(arr5);
console.log(arr6);


