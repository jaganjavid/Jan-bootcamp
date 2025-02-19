

const posts = [
    {title:"Post one"},
    {title:"Post two"},
];


function createPost(post){

    return new Promise((resolve, reject) => {

        setTimeout(function(){
            posts.push(post);

            const error = true;

            if(!error){
                resolve();
            }else{
                reject();
            }

        }, 2000)


    })

}

function getposts(){

setTimeout(function(){
    let output = "";

    posts.forEach((post) => {
        output += `<li>${post.title}</li>`;
    })

    document.body.innerHTML = output;
}, 1000)
}

createPost({title:"Post three"})
.then(getposts)
.catch(function(){
    console.log("Some thing went wrong")
})