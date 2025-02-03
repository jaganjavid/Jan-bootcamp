

const firstName = "Jagan";
const lastName = "Javid";
const age = 27;


let val;


val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";
// val = val + " Doe";
val = val += " Doe";

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Get index
val = firstName[0];
val = firstName[1];

// charAt()
val = firstName.charAt(2);


// Slice 
const fruit = "Orange";

val = fruit.slice(1,4);


const str = "Hello im jagan and im a web dev";
const tags = "WEB DEV,APP DEV,UI/UX";

val = str;

// Split
val = str.split("");
val = str.split(" ");
val = tags.split(",");

// Replace
val = str.replace("jagan", "javid");

// includes
val = str.includes("app");


console.log(val);