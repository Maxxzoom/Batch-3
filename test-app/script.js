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
// let laptop = {
//   model: "lenovo",
//   memeory: "123GB",
//   camera: {
//     frontcamera: 12,
//     backcamera: 40,
//   },

//   getmemoryandcamera: function () {
//     return (
//       "the memory is" +
//       this.memeory +
//       " " +
//       "and the frontcamera is" +
//       this.camera.frontcamera
//     );
//   },
//   getfrontandbackcamera: function () {
//     return this.camera.frontcamera + this.camera.backcamera;
//   },
// };

// console.log(mobile.model, mobile.memeory, mobile.camera.backcamera);
// console.log(mobile["camera"]);

// Get the properties and methods
// let screenandmemorysize = mobile.getmemoryandcamera();
// console.log(screenandmemorysize);
// console.log(mobile["memeory"]);

// Update the properties
// console.log(mobile);
// mobile.memeory = "200GB";
// console.log(mobile);
// mobile.RAM = "6GB";
// console.log(mobile);

// //Delete properties
// delete mobile.memeory
// console.log(mobile);

// Array
// let arr = [1, 2, 3, 4, 5, true, "test", null, undefined, Symbol()];
// console.log(typeof arr);
// is a special kind of object
// its not fixed length
// Homoegeneous (anything can be stored in an array)

// 3 ways to create an array
// const arr1 = [1, 2, 3, 4, true, undefined];

// const arr2 = [];
// arr2[0] = 1;
// arr2[1] = "true";
// arr2[2] = 3;
// arr2[3] = 4;

// const arr3 = new Array(1, 2, 3, 4);
// this is not prefered bcoz its slow and it uses the constructer

// const arr4 = new Array(10);
// arr4[1] = "hello";
// create blank array of 10 elements

// console.log(arr1, arr2, arr3);

// Array methods
// Length
// console.log(arr1.length);

// Push/add element
// arr1.push("hundai");
// console.log(arr1);

// // adding the element using index at index 3
// arr1[2] = "bmw";
// console.log(arr1);

// //toString() - default method of array
// // console.log(arr1.toString());

// // pop() -remove last element
// arr1.pop();
// console.log(arr1);

// // Shift() - remove the element but first
// arr1.shift();
// console.log(arr1);

// // Unshift() - add element at the beginning
// arr1.unshift("hundai");
// console.log(arr1);

// splice - remove/add elements
// arr1.splice(1, 0, "bmw", "audi");
// // arr1.splice(index of start, no. of elements to delete, elements to add);
// console.log(arr1);

// slice - recreate any array from the existing array
// const arr5 = arr1.slice(1, 3);
// // arr1.slice(start index, end index(until that index));
// console.log(arr5);

// // concat()- merge two arrays
// let arr6 = arr1.concat(arr2);
// console.log(arr6);

// Looping (for,for in,for of)

// const arr1 = [5, 6, 7, 8, 9, 10, 1, 2, 3, 4];
// for (let i = 0; i < arr1.length; i+2) {
//   console.log(arr1[i]);
// }

// Array - Iteration(forEach,map,filter,reduce,find,IndexOf, lastIndexOf)

//forEach
// Dont need index number
// arr1.forEach((element) => {
//   console.log(element);
// });

// filter
// if you want filter some of the elements/value from array
// filter elements based on condition
// filter return a new array with the required filtered elements

// const filteredarr = ages.filter((age) => {
//   return age > 5;
// });
// // console.log(arr1, "arr1");
// console.log(filteredarr, "filter");

// let students = [
//   {
//     id: 1,
//     name: "swapnil",
//     sport: "cricket",
//   },
//   {
//     id: 2,
//     name: "umesh",
//     sport: "football",
//   },
//   {
//     id: 3,
//     name: "maxxzom",
//     sport: "football",
//   },
// ];

// let cricketplayers = students.filter((student) => {
//   return student.sport == "cricket";
// });

// console.log(cricketplayers, "cricket");

//map - by iterating each element you can modify the things & return new array

// console.log(arr1, "arr1");
// const maparr = arr1.map((element) => {
//   return element - 2;
// });
// console.log(maparr, "maparr");

// const arr1 = [4, 6, 5, 5, 5, 7, 8, 9, 10, 1, 2, 3, 9, 4];

// find- it  will return whether element present or not at first index
// const findarr = arr1.find((element) => {
//   return element == 5;
// });
// console.log(findarr, "find");

//indexOf() - if you want to find element position/index in array

// const indexarr = arr1.indexOf(9);
// console.log(indexarr, "indexarr");

// // lastIndexOf() - one element occure multiple times in array - last element
// const lastindex = arr1.lastIndexOf(9);
// console.log(lastindex, "lastindex");

// reduce()- if we want to add all elements in array together

// let reduce = arr1.reduce((acc, element) => {
//   return element + acc;
// }, 5);
// console.log(reduce, "reduce");

// const arr2 = [4, 8, "maxxzoom", true];
// const arr3 = [3, 7, "company", false];

// const nestedarray = [arr2, arr3];
// console.log(nestedarray, "nestedarray");

// // // e.g of reduce (join/flattened)
// const flattenedarray = nestedarray.reduce((acc, currentValue) => {
//   return acc.concat(currentValue);
// }, []);

// console.log(flattenedarray, "flattenedarray");

// counting occurances
// const fruits = ["apple", "banana", "apple", "apple", "banana", "orange"];
// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// acc[apple]=acc[apple]+1
// acc[banana]=acc[banana]+1
// // {apple:3 ,banana:2, orange:1}
// console.log(count, "count");

// // maximumm number
// const numbers = [1, 11, 9, 7, 8];

// const max = numbers.reduce((acc, curr) => {
//   return curr < acc ? curr : acc;
//   //       1  > 1  ?  1: 1  = 1
//   //         4  > 1 ? 4 :1    = 4
//   //          9 > 4  ?  9 : 4  = 9
//   //          7 > 9 ?  7 : 9  = 9
//   //          8 > 9 ? 8 : 9 = 9
// }, numbers[0]);
// console.log(max, "max");

// 2 types of interation
// for in  =  object(properties)
// for(let key in object){
// }

//  for of  = array
// for(let key of array){
// }

// const arr1 = [5, 6, 7, 8, 9, 10, 5, 1, 2, 3, 9, 4];

// for (let element of arr1) {
//   console.log(element);
// }

// const obj = { id: 10, name: "anuj", city: "pune" };

// for (let prop in obj) {
//   console.log(prop);
//   console.log(obj[prop]);
// }

// Pass by value,
// let j = 5;
// let k = j;
// console.log(j, k);
// k = 7;
// console.log(j, k);

// //  Pass by reference
// let obj1 = { name: "anuj" };
// let obj2 = obj1;
// console.log(obj1, obj2);
// obj2.name = "maxxzoom";
// console.log(obj1, obj2);
// let obj3 = obj2;
// console.log(obj1, obj2, obj3);
// obj3.name = "ug";
// console.log(obj1, obj2, obj3);

// this keyword & few imp point
// global scope
// function scope
// let g = 45;

// function myfun() {
//   console.log(this);
// }
// console.log(this);

// myfun();

// global=> globally if we are using (this) keyword it will be inside the global context

// this - brower(window)
// this - node(global)

// this- this will refer to that object which is being called

// global- window
// this is being called by any other object, it wil refer to that not global

//  ==  it will check only value
//  ===  it will check value along with data type
// let l = true;
// let m = true;

// console.log(l === m);
