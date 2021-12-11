import {useState} from 'react'

const defaultItems = [
    {
        name: "Item 1"
    },
    {
        name: "Item 2"
    },
    {
        name: "Item 3"
    }
];

function Todo() {
    const [text, setText] = useState("")
    const [items, setItems] = useState(defaultItems);

    return (
        <div>
            <label>
                Text
                <input value={text} onChange={(e) => setText(e.target.value)}/>
            </label>
            <button onClick={() =>{ 
                setItems((prev) => [...prev, {name: text}])
                setText("")
            }}>add</button>        

            <ul>
                {
                    items.map((item, key) => (
                        <li key={key}>{item.name}</li>
                    ))
                }   
            </ul>
        </div>
    )
}

export default Todo
