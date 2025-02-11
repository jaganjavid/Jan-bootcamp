
// Define a UI vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");


// Load all event Listeners

loadEventListerners();

function loadEventListerners() {

    // DOM Load event
    document.addEventListener("DOMContentLoaded", getTasks)

    // Add Task Event
    form.addEventListener("submit", addTask);

    // Remove tasks
    taskList.addEventListener("click", removeTasks);

    // Clear all tasks
    clearBtn.addEventListener("click", clearTask);

};


function getTasks(){
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    
    tasks.forEach(function(task){
         // Create Element
         const li = document.createElement("li");

         // Add class li
         li.className = "collection-item";
 
         // Create innertext
         li.innerText = task;
 
         // Create a link element
         const link = document.createElement("a");
 
         // Add class to link
         link.className = "delete-item secondary-content";
 
         // Add a icon to link
         link.innerHTML = `<i class="fa fa-remove"></i>`;
 
         // append a link to li
         li.appendChild(link);
 
         // Append a li to ul
         taskList.appendChild(li);
    })
}

function addTask(e) {

    e.preventDefault();

    // Validate

    if (taskInput.value === "") {
        alert("Please fill the form");
    } else {

        // Create Element
        const li = document.createElement("li");

        // Add class li
        li.className = "collection-item";

        // Create innertext
        li.innerText = taskInput.value;

        // Create a link element
        const link = document.createElement("a");

        // Add class to link
        link.className = "delete-item secondary-content";

        // Add a icon to link
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // append a link to li
        li.appendChild(link);

        // Append a li to ul
        taskList.appendChild(li);

        // Store in ls
        storeInLocalStrorage(taskInput.value);

        // Clear a input value
        taskInput.value = "";

    }
}

function storeInLocalStrorage(taskvalue){
  
    let tasks;

    if(localStorage.getItem("tasks") === null){
        console.log("STEP-1");

        tasks = [];
    }else {
        console.log("STEP-2");
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(taskvalue);

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Clear task

function clearTask() {

    // taskList.innerHTML = "";

    const listItems = document.querySelectorAll(".collection-item");

    listItems.forEach(function (el) {
        el.remove();
    })

    clearFromLocalStorage()

}

function clearFromLocalStorage(){
    localStorage.removeItem("tasks");
}

// removeTask
function removeTasks(e) {

    // if (e.target.parentElement.className === "delete-item secondary-content") {
    //     e.target.parentElement.parentElement.remove();
    // }

    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm("Are you sure?")){
            e.target.parentElement.parentElement.remove();
        }
    }


}