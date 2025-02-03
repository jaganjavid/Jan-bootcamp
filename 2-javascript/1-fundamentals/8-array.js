

const numbers = [2,4,56,76,34,23,86,23,12,43];


// console.log(numbers);

let val;

// Get the array length
val = numbers.length;

// Check if it is array
val = Array.isArray(numbers);

// Get a single value
val = numbers[6];

// Change into array index value
// val = numbers[6] = 100;

// Find the index of value
val = numbers.indexOf(34);
val = numbers.indexOf(1000); // if array match its return the index if not means it return -1

// Mutating array

// Add on the end
// numbers.push(1000);

// Add on the front
// numbers.unshift(2000);

// Take off the end
// numbers.pop();
// numbers.pop();

// Take off from the front
// numbers.shift();
// numbers.shift();

// console.log(numbers);

// Splice to remove and add

const fruits = ["Apple", "Orange", "kiwi", "bananna"];

val = fruits;


// To remove
// val = fruits.splice(1, 2);

// To add
// val = fruits.splice(2, 1, "Lemon");


// console.log(fruits);


// Reverse the array
val = numbers.reverse();

console.log(val);
