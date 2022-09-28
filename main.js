async function getPosts() {
    let res = await fetch('http://test/posts');
    let posts = await res.json();

    posts.forEach((post) => {
        document.querySelector(".post-list").innerHTML += `
        <div>
        <h1>${post.title}</h1>
        </div>`
    })
}

getPosts();