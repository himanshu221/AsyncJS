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

const createPost = (post) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false;

            if(error == false)
                resolve();
            else reject('An error ocuured')
        },2000)
    })
}

// createPost({title: "Post3", content: "This is the third post"})
// .then(getPosts)
// .catch(err => console.log(err))




/////// Promise.all

// const promise1 = Promise.resolve('Hello World')
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve,2000,'GoodBye')
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(values => values.json())

// // -> it will wait until all promise completed

// Promise.all([promise1,promise2,promise3, promise4]
// ).then((values) => console.log(values))
// .catch(err => console.log(err))

/////// In below example promise1 will fail hence promse all will fail and go to catch block

// const promise1 = Promise.reject('Hello World')
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve,2000,'GoodBye')
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(values => values.json())

// // -> it will wait until all promise completed or any one is rejected

// Promise.all([promise1,promise2,promise3, promise4]
// ).then((values) => console.log(values))
// .catch(err => console.log(err))



// Async / await
// for function to use await we need to declare it async
// async function init() {

//     // await makes the execution wait for createPost to end before the function executes further
//     await createPost({title: "Post3", content: "This is the third post"})

//     getPosts()
// }

// init()


// Async / Await / fetch

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    console.log(data)
}

getUsers()