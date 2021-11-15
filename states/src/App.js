import { useState } from "react";

function App() {
  const [name, setName] = useState('Berkay')
  const [age, setAge] = useState(20);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [address, setAddress] = useState({title: 'Ankara', zip: 254})

  return (
    <>
      <h1> Merhaba {name} - {age}</h1>
      <button onClick={() => setName("Nayman")}>CHANGE NAME</button>
      <button onClick={() => setAge(21)}>CHANGE AGE</button>
      <hr/>
      <button onClick={() => setFriends([...friends,"Berkay"])}>
        ADD FRIEND
      </button>
      {
        friends.map((friend, i) => {
          
          return <div key={i}>{friend}</div>
          
        })
      }
      <hr/>
      <h2>Adress</h2>
      <div>{address.title} - {address.zip}</div>
      <button onClick={() => setAddress({ ...address, title:"İstanbul"})}>
        CHANGE ADDRESS
      </button>
    </> 
  );
}

export default App;
