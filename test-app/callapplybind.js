// const student = {
//   id: 10,
//   firstname: "max",
//   lastname: "zoom",

//   getFullname: function (greeting, hwlo) {
//     if (greeting) {
//       return this.firstname + " " + this.lastname + greeting + hwlo;
//     } else {
//       return this.firstname + " " + this.lastname;
//     }
//   },
// };

// console.log(student.getFullname());

// const student2 = {
//   id: 10,
//   firstname: "max",
//   lastname: "zoom",
// };



// Call method
// when we use call method , we can pass the parameeter in normal way
// console.log(student.getFullname.call(student2, "how are you", "hello"), "call");

// // apply method
// // when we use apply method, we have to pass params in array
// console.log(
//   student.getFullname.apply(student2, ["how are you", "hello"]),
//   "apply"
// );

// // bind method
// // it return the new function with specified object
// var bindmethod = student.getFullname.bind(student2, "how are you", "hello");
// console.log(bindmethod(), "bind");
