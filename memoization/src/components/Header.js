import React from 'react'

function Header({number, dataName, increment}) {
    console.log("header component re-rendered");

    return (
        <div>
            Header - {number}
            <br/>
            <button onClick={increment}>+++</button>

            {
                /*
                    <h3>{dataName}</h3>
                */
            }
        </div>
    )
}

export default React.memo(Header)
