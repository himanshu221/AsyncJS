let posts = [
    {
        title: "Post1",
        content: "This is the first blog post"
    },
    {
        title: "Post2",
        content: "This is the second blog post"
    }
]


const getPosts = () => {
    setTimeout(() => {
        let list = ''
        posts.forEach((post) => {
            list += `<li>Title : ${post.title}</li>`
        })
        document.body.innerHTML = list
    },1000)
}

const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000)
}

createPost({title: "Post3", content: "This is the third post"}, getPosts)
