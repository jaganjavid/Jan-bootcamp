

// document.getElementById();


// console.log(document.getElementById("task-title"));

const taskTitle = document.getElementById("task-title");

// Change style
taskTitle.style.backgroundColor = "blue";
taskTitle.style.color = "#ffffff";
taskTitle.style.padding = "10px";

// Change content
taskTitle.innerText = "Hello javid";
taskTitle.innerHTML = "<span>Hai jagan</span>";

// document.querySelector("");

console.log(document.querySelector("#task-title"));