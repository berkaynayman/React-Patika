/*
setTimeout(() => {
    console.log("merhaba")
}, 4000)

setInterval(() => {
    console.log("merhaba ben her saniye çalışacağım")
}, 1000)
*/

/*
const sayHi = (cb) => {
    cb();
}
sayHi(() => {
    console.log("hello");
})
*/

import fetch from "node-fetch";
import axios from "axios";

/*
fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => console.log(users))
*/

/*
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((data) => data.json())
    .then((user) => {
        console.log(`USER YÜKLENDİ ${user}`)

        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((data) => data.json())
            .then((post) => {
                console.log(`POST YÜKLENDİ ${post}`)

                fetch("https://jsonplaceholder.typicode.com/posts/2")
                    .then((data) => data.json())
                    .then((post2) => console.log(`POST 2 YÜKLENDİ ${post2}`))
            });
    });
*/

/*
async function getData(){
    const user = await(
        await fetch("https://jsonplaceholder.typicode.com/users/1")
    ).json();

    const post1 = await(
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const post2 = await(
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();

    console.log(`USER YUKLENDİ ${user}`);
    console.log(user);

    console.log(`POST1 YUKLENDİ ${post1}`);
    console.log(post1);

    console.log(`POST2 YUKLENDİ ${post2}`);
    console.log(post2);
}
getData()
*/

/*
(async() => {
    const user = await(
        await fetch("https://jsonplaceholder.typicode.com/users/1")
    ).json();

    const post1 = await(
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const post2 = await(
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();

    console.log(`USER YUKLENDİ ${user}`);
    console.log(user);

    console.log(`POST1 YUKLENDİ ${post1}`);
    console.log(post1);

    console.log(`POST2 YUKLENDİ ${post2}`);
    console.log(post2);
})()
*/

//AXIOS
/*
(async() => {
    const { data: user }  = await axios("https://jsonplaceholder.typicode.com/users/1")

    const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1")

    const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2")

    console.log(`USER YUKLENDİ ${user}`);
    console.log(user);

    console.log(`POST1 YUKLENDİ ${post1}`);
    console.log(post1);

    console.log(`POST2 YUKLENDİ ${post2}`);
    console.log(post2);
})()
*/

/*
const getComments = (number) => {
    return new Promise((resolve, reject) => {
        if(number === 1){
            resolve({ text: "Selam" })
        }
        reject("bir problem oluştu")
    });
};

getComments(2)
    .then((data) => console.log(data))
    .catch((e) => console.log(e))
*/

const getUser = () => {
    return new Promise(async (resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/users/1")
        resolve(data)
        reject("bir problem var")
    });
};

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    resolve(data)
    });
};

/*
getUser()
    .then((data) => console.log(data))
    .catch((e)   => console.log(e))

getPost(1)
    .then((data) => console.log(data))
*/

/*
(async () => {
    await getUser()
    .then((data) => console.log(data))
    .catch((e)   => console.log(e))

    await getPost(1)
        .then((data) => console.log(data))
})();
*/

/*
(async () => {
    try {
        const users = await getUser()
        const post  = await getPost(1)
    
        console.log(users);
        console.log(post); 
    } catch (e) {
        console.log(e);
    }
    
})()
*/

Promise.all([getUser(), getPost(1)])
.then(console.log)
.catch(console.log)