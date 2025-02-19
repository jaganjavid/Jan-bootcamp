

document.querySelector("#btn").addEventListener("click", loadData);

function loadData(){

    // Create an Xhr Object

    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open("GET", "data.txt", true);

    xhr.onload = function(){
     
       if(this.status === 200){
         document.querySelector("#output").innerText = this.response;
       }else{
        document.querySelector("#output").innerText = "Not Found";
       }
        
    }

    xhr.send();

}