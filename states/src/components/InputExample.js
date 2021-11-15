import { useState } from "react";

function InputExample() {
    /*
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeSurname = (event) => {
        setSurname(event.target.value)
    }
    */

    const [form, setForm] = useState({name: "", surname: ""});

    const onChangeInput = (e) => {

        setForm({...form, [e.target.name] : e.target.value })
    }
    
    return(
        <>
            Please enter a name <br/>
            <input name="name" value={form.name} onChange={onChangeInput}/>
            <br/>
            Please enter a surname <br/>
            <input name="surname" value={form.surname} onChange={onChangeInput}/>
            <h1>NAME - {form.name}</h1>

            <h1>SURNAME - {form.surname}</h1>
        </>
    )
}

export default InputExample