import axios from "axios";
import { useEffect, useState } from "react"
import {useParams, Link} from 'react-router-dom'

function User() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
            setUser(res.data)
        ).finally(() => setLoading(false))
    }, [id])

    return (
        <div>
            <h1>User Detail</h1>
            {loading && <div>Loading...</div>}
            <code>
                {!loading && JSON.stringify(user)}
            </code>

            <Link to={`/user/${Number(id) + 1}`}>Next User</Link>
        </div>
    )
}

export default User
