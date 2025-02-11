
// Get, Set, Remove, Clear

// console.log(localStorage);

// console.log(localStorage.getItem("tasks"));

// localStorage.setItem("tasks", "Hello");

// console.log(localStorage.getItem("tasks"));

// localStorage.removeItem("tasks");

// JSON 

const arr = [1,2,3,4,5];

console.log(arr);

const arrToString = JSON.stringify(arr);

console.log(arrToString);

const stringToArr = JSON.parse(arrToString);

console.log(stringToArr);
