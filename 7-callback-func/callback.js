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