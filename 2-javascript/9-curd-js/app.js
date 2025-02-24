
const apiURL = "https://67bc778ded4861e07b3aa8a9.mockapi.io/users";

document.addEventListener("DOMContentLoaded", fetchData);

// Fetch and display data

async function fetchData() {
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        renderData(data);
    }catch(error){
        console.error("Error in fetching data")
    }
}


// Render data list
function renderData(data){
    
    const dataList = document.querySelector("#data-list");

    dataList.innerHTML = "";

    data.forEach(data => {
        
        const listItem = document.createElement("li");

        listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        listItem.innerText = data.name;

        const buttonGroup = document.createElement("div");
        buttonGroup.classList.add("btn-group");
        
        const editButton = createButton("Edit", "btn-warning", () => console.log(data.id));
        const deleteButton = createButton("Delete", "btn-danger", () => console.log(data.id));

        buttonGroup.append(editButton, deleteButton);

        listItem.appendChild(buttonGroup);


        dataList.appendChild(listItem);

    })

}

// Create a button element
function createButton(text, className, onClick){

    const button = document.createElement("button");

    button.innerText = text;
    button.classList.add("btn", className, "mx-2");

    button.addEventListener("click", onClick);

    return button;

}