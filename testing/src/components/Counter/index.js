import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>increase</button>
            <button onClick={() => setCount(count - 1)}>decrease</button>
        </div>
    )
}

export default Counter
