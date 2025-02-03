

const name = "Javid";
const age = 27;
const job = "Web Dev";
const city = "Chennai";

let html;

// Without template strings

html = "My name is" + " " + name + " " + "im" + " " + age + " " + "my job is" + " " + job + " " + "im from" + " " + city;


// With template string

html = `My name is ${name} im ${age} my job is ${job} im from ${job}`;

console.log(html);