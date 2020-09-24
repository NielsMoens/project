// Destructuring #1
// const obj =  { one : 1, two : 2 };
// var { one, two } = obj;
// const {one: anotherOne} =obj
//console.log(anotherOne);

// // Destructuring #2
// const obj =  { one : 3 ,two : 2};
// var { one= "1", two="1"} = obj;
// console.log(one); 

// // Destructuring #3
// const obj =  { first: "James", last: "Baker", alias: "JB"  }
// var { first = "John", last = "Doe", alias : nickname ="default value" } = obj
// console.log(nickname) // outputs nickname is not defined

// // Destructuring #4
// let names = []
// let users = [
//   { name: "John", email: "john@example.com" },
//   { name: "Jason", email: "jason@example.com" },
//   { name: "Jeremy", email: "jeremy@example.com" },
//   { name: "Jacob", email: "jacob@example.com" }
// ]

// for (let {name} of users) {
//     names.push(name);
// }
// console.log(names) // should log ["John", "Jason", "Jeremy", "Jacob"]

// // Destructuring #5
// let users = [
//     { name: "John", email: "john@example.com" },
//     { name: "Jason", email: "jason@example.com" },
//     { name: "Jeremy", email: "jeremy@example.com" },
//     { name: "Jacob", email: "jacob@example.com" }
//   ]
  
//   let [,,{name:thu}] = users;
//   console.log(thu);

// Destructing #6 spread operator 
const { name, email, ...rest } = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}
console.log(rest); // should output {city: "Phoenix", state: "AZ", country: "USA"}

// Destructing #7
const arr = [1, 2, 3, 4, 5, 6]
const [a,b];

console.log(a) // outputs 1
console.log(b) // outputs 2

// Destructing #8
const arr = ["cars", "planes", ["trains", ["motorcycles"]]]
const [trans1, trans2,[trans3, [trans4]]];
let trans1 = arr[0]
let trans2 = arr[1]
let trans3 = arr[2][0]
let trans4 = arr[2][1][0]

console.log(trans1) // outputs "cars"
console.log(trans2) // outputs "planes"
console.log(trans3) // outputs "trains"
console.log(trans4) // outputs "motorcycles"


// Destructing #9
const arr = ["eyes", "nose", "lips", "ears"]
let [,,lips,]= arr;
console.log(lips);

// Destructing #10
var [head, ...tail] = [1, 2, 3, 4]
console.log(head) // outputs  1
console.log(tail) // outputs 2
