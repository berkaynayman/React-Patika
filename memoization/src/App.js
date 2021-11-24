import { useState, useMemo, useCallback } from "react"

import './App.css';
import Header from "./components/Header";


function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const increment =  useCallback(() => {
    setNumber((prevState) => prevState + 1)
  }, [])

  /*
  const dataName = useMemo(() => {
    return calculateObject();
  }, []);
  */

  return (
    <div className="App">
      {
        /*
        <Header number={number < 5 ? 0 : number} dataName={dataName}/>
        */
      }
      <Header increment={increment}/>

      <hr/>
      <h1>{number}</h1> 

      {/*
      <button onClick={() => setNumber(number+1)}>+++</button>
      */}
      <br/>
      <br/>   

      <input value={text} onChange={({target}) => setText(target.value)}/>

    </div>
  );
}

/*
function calculateObject(){
  return ["Berkay"]
}
*/

export default App;
