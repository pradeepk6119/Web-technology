// //1. Arithmetic Operator
// let x=32;
// console.log("--x :",--x)
// console.log("x-- :",x--)
// console.log("x-- :",x--)
// console.log("x++ :",x++)
// console.log("++x :",++x)
// console.log("x :",x)

// //Comparison
// let a=100;
// let b="100";
// let c=101;
// let d="101";
// console.log("a == b: ",a == b);
// console.log("a === b: ",a === b);
// console.log("c !== d: ",c !== d);

// // Ternary operator - ?
// // condition ? statement 1 : statment 2

// let age =18
// let res =age>18 ? "You're adult":"You're a kid"
// console.log(`Entered age is ${age} :${res}`)

// //Logical Operator
// let userName="user111"
// let password="user@11"
// const userAuth = userName === "user111" && password === "user@11" ? `Hello ${userName}, Welcome to Home page` : "Please check username and password"
// console.log(userAuth)

const prompt = require("prompt-sync")({sigint:true})
let userInput=prompt("Enter your input:")
console.log(userInput)
