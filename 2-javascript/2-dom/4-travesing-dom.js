

let val;

const list = document.querySelector(".collection");
const listItem = document.querySelector("li:first-child");

// Get the children element nodes

val = list.children;
// val = list.children[0].innerText = "Hai";
val = list.children[1].children[0];
val = list.children[1].children[0].className;

// First child
val = list.firstElementChild;

// last child
val = list.lastElementChild;

// Child count element
val = list.childElementCount;

// Get the parent node
val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

// Get previous element sibling
// val = listItem.previousElementSibling.previousElementSibling.style.color = "blue";


// Get next element siblings
val = listItem.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "blue";

console.log(val);