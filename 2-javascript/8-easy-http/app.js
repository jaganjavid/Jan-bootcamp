
const http = new EastHTTP();


http.get("https://67bc778ded4861e07b3aa8a9.mockapi.io/users")
.then(data => console.log(data))
.catch(err => console.log(err))

const data = {
    name:"Jagan Javid"
}

// http.post("https://67bc778ded4861e07b3aa8a9.mockapi.io/users", data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

http.put("https://67bc778ded4861e07b3aa8a9.mockapi.io/users/1", data)
.then(data => console.log(data))
.catch(err => console.log(err))

http.delete("https://67bc778ded4861e07b3aa8a9.mockapi.io/users/6")
.then(data => console.log(data))
.catch(err => console.log(err))