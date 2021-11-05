export default (name) => {
    console.log(`hello ${name}`)
};
const topla = (a, b) =>  a + b;
const cikar = (a, b) =>  a - b;
let text = "TEXT"
const user = {
    "name" : "Berkay",
    "surname" : "Nayman"
}
const USERS = [
    {
        "name" : "Berkay",
        "surname" : "Nayman"
    },
    {
        "name" : "Ahmet",
        "surname" : "Mehmet"
    }
]

export {topla, cikar, text, user, USERS}