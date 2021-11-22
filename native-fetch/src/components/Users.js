import {useEffect, useState} from "react";
import axios from "axios"

function Users(){
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /*
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false))
    }, []); 
    */

    //axios
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false))
    }, []); 


    return(
        <div>
            {isLoading && <div>Loading...</div>}
            {
                users.map((user) => (
                    <div key={user.id}>{user.name}</div>
                ))
            }
        </div>
    )
}

export default Users;