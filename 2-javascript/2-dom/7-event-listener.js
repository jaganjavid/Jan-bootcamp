

// document.querySelector(".clear-tasks").addEventListener("click", function(){
//     console.log("Hello");
// })

let count = 0;

document.querySelector(".clear-tasks").addEventListener("click", onClick)

document.querySelector("#task-title").innerText = 0;

function onClick(){
    
    count += 1;

    document.querySelector("#task-title").innerText = count;

}