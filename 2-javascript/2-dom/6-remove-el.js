

// Remove element

const list = document.querySelector("li");

// list.remove();

const lists = document.querySelectorAll("li");

// lists.forEach(function(el){
//     el.remove();
// })

// Class and attr

const firstLi = document.querySelector("li:first-child");

const link = firstLi.children[0];

let val;

val = link.className; // String
val = link.classList;

val.add("Jagan");

val.forEach(function(cls){
    console.log(cls);
})

console.log(val.contains("Jagan"));

val.remove("test");

val.replace("Jagan", "Javid");

