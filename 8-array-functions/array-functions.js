const users = ["Didem", "Berkay", "Asli", "Cansu"]

const users1 = [
    { 
        name: "Didem",
        age : 22
    },
    {   
        name: "Berkay",
        age : 21
    },
    { 
        name: "Berkay",
        age: 24
    },
    {
        name: "Cansu",
        age : 28
    }
]


/*
push
map
find
filter
some
every
includes
*/

//push
users.push("Ahmet")
//console.log(users);

//map
//users.map( (item) => console.log(item))

//find
const findIt = users.find((item) => item === "Didem")
//console.log(findIt);

//filter
//const filtered = users.filter((item) => item.length == 4)
const filtered   = users1.filter(({name, age }) => name === "Berkay" && age == 24)
//console.log(filtered);

//some
const some = users1.some(item => item.age > 27)
//console.log(some); true

//every
const every = users1.every(item => item.age >27)
//console.log(every) false

const meyveler =  ["elma", "armut", "muz"]
const isIncluded = meyveler.includes('muz')
console.log(isIncluded) //true