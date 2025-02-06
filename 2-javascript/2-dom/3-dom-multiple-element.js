

const items = document.getElementsByClassName("collection-item"); // HTMLCOLLECTION

// console.log(items);
// console.log(items[0]);


// Change style
// items[0].style.color = "blue";
// items[1].style.color = "blue";
// items[2].style.color = "blue";

// For loop

// for(let i = 0; i < items.length; i++){
//     items[i].style.color = "blue";
// }

// let lists = Array.from(items);

// lists.forEach(function(el, index) {
//     el.style.color = "blue";
// })

// document.querySelectorAll();

const listItems = document.querySelectorAll(".collection-item"); // Nodelist

listItems.forEach(function(el){
    el.style.color = "blue";
})