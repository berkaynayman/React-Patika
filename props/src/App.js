import User from './components/User';
import './App.css';


function App() {
  return (
    <>
      <User 
        name="Berkay"
        surname="Nayman"
        age={"21"}
        isLoggedIn={true}
        friends={["Ross", "Monica", "Rachel"]}
        address={{
          title: "ANKARA",
          zip: 6
        }}
      />
    </>
  );
}

export default App;
