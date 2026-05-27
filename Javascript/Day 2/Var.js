//2. By using let

// let is_user_authenticated=true
let isUserAuthenticated=false
console.log("User Authenticated?: ", isUserAuthenticated)
{
    let userPassword = "jsp@123"
    console.log("Password: ", userPassword)
}
// console.log("User password in another application: ", userPassword)
// ReferenceError

let isUserAuthenticated=true
console.log("User Authenticated?: ", isUserAuthenticated)

// //re-dec
// let isUserAuthenticated = "Hello, i'm bug"
// console.log("User Authenticated?: ", isUserAuthenticated)
// Identifier 'isUserAuthenticated' has already been declared