

const taskInput = document.querySelector("#task");

// Key down
// taskInput.addEventListener("keydown", runEvent);

// Key Up
// taskInput.addEventListener("keyup", runEvent); // ***

// Key Press
// taskInput.addEventListener("keypress", runEvent);

// Focus
// taskInput.addEventListener("focus", runEvent);

// Blur
// taskInput.addEventListener("blur", runEvent);

// Cut
// taskInput.addEventListener("cut", runEvent);

// copy
// taskInput.addEventListener("copy", runEvent);

// paste
taskInput.addEventListener("paste", runEvent);



function runEvent(e){

    console.log(e.target.value);
    console.log(e.type);

}