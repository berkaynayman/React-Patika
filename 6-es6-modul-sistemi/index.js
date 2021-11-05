import hello, {topla, cikar, text, user, USERS} from './my-module.js'
//import Topla from './my-module.js'
import slugify from "slugify"



const title = slugify("merhaba berkay nayman", '**')
console.log(title)
console.log("hello node")
//console.log(Topla(33,44))
console.log(topla(33,44))
hello("berkay")
console.log(cikar(5,10))
console.log(text);
console.log(user);
console.log(USERS);