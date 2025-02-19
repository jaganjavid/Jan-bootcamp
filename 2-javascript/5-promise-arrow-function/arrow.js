

// const sayHello = function(){
//     console.log("Hello");
// }

// Arrow Function

// const sayHello = () => {
//     console.log("Hello");
// }

// One line function does not need a braces

// const sayHello = () => console.log("Hello");

// One line return
// const sayHello = () => "Hello";

// const sayHello = () => {
//     return "Hello"
// }

// Return Object
// const sayHello = () => ({msg:"Hello"})

// Single params does not need a parenthese

// const sayHello = name => console.log(`Hello ${name}`)

// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello("Jagan", "Javid");

const users = ["Jagan", "Javid", "Akash"];

// users.forEach(function(user){
//     console.log(user);
// })

users.forEach((user, index) => console.log(`${user} - ${index}`));