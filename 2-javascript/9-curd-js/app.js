
const apiURL = "https://67bdc829321b883e790de61d.mockapi.io/users";
let editID = null;
let allPost = [];

console.log("Hello")


// Add post
document.querySelector(".add-button").addEventListener("click", handleData);

// Get Data
document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
    try{
        const response = await fetch(apiURL);
        allPost = await response.json();
        renderData();
    }catch(err){
        alert("Error");
    }
}

function showAlert(message, className){

    const divElement = document.createElement("div");
    divElement.className = `alert ${className} fixed-top text-center`;
    divElement.innerText = message;

    document.querySelector(".show-alert").appendChild(divElement);

    setTimeout(() => divElement.remove(), 3000);


}


// Handle Data
async function handleData() {

    const inputData = document.querySelector("#inputData").value.trim();

   if(!inputData){
    alert("Please fill the field");
    return;
   }

   const method = editID ? "PUT" : "POST"

   const url = editID ? `${apiURL}/${editID}` : apiURL;

   const paylaod = {
    name:inputData
   }

   try{
    await fetch(url, {
        method:method,
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(paylaod)
    })

    fetchData();
    showAlert(editID ? "Post updated successfully" : "Post added successfully", "alert-success");
    resetForm();
   }catch(err){
     console.log(err);
   }
    
}

async function deleteData(id){
    try{
        await fetch(`${apiURL}/${id}`, {method:"DELETE"});
        console.log("Post deleted");
        fetchData()
    }catch(err){
        console.log("error");
    }
}

async function editData(id, name) {
    document.querySelector("#inputData").value = name;
    editID = id;

    document.querySelector(".add-button").innerText = "Update Post";
}


function renderData(){

    const dataList = document.querySelector("#dataList");
    dataList.innerHTML = "";

    

    allPost.forEach(post => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${post.name}`;

        const div = document.createElement("div");

       

        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.classList.add("btn", "btn-warning", "mx-2");
        editButton.addEventListener("click", () => editData(post.id, post.name));

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.addEventListener("click", () => deleteData(post.id));

        div.appendChild(editButton)
        div.appendChild(deleteButton)

        listItem.appendChild(div);
        dataList.append(listItem);
    })

    

}

function resetForm(){
    editID = null;
    document.querySelector("#inputData").value = "";
    document.querySelector(".add-button").innerText = "Add Post";
}