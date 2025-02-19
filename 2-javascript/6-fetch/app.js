
document.querySelector("#btn-1").addEventListener("click", getText);
document.querySelector("#btn-2").addEventListener("click", getJson);
document.querySelector("#btn-3").addEventListener("click", getApi);


function getText(){
    fetch("text.txt")
    .then(res => res.text())
    .then(data => {
        document.querySelector("#output").innerText = data
    }).catch(function(){
        console.log("Some thing went worng")
    })
}


function getJson(){
    fetch("posts.json")
    .then(res => res.json())
    .then(data => {
       
        let output = "";

        data.forEach(post => {
            output += `<li>${post.title}</li>`
        })

        document.querySelector("#output").innerHTML = output
    }).catch(function(){
        console.log("Some thing went worng")
    })
}

function getApi(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
       
        let output = "";

        data.forEach(post => {
            output += `<li>${post.title}</li>`
        })

        document.querySelector("#output").innerHTML = output
    }).catch(function(){
        console.log("Some thing went worng")
    })
}

