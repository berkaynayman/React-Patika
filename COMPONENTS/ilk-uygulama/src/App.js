import './App.css';
import Header from './components/Header';

const NAME = "Berkay"
const SURNAME = "Nayman"
const isLoggedIn = true

function App() {
  return (
    <>
      <Header/>
      <p className="text-green">
        loremipsumsad
      </p>

      <label htmlFor="myinput">
        Name
         <input id="myinput"></input>
      </label>

      <h1>{`Benim adım ${NAME} Soyadım ${SURNAME}`}</h1>

      <h2>
        { isLoggedIn && `Benim adım ${NAME}, soyadım ${SURNAME}` }

        { !isLoggedIn && `Benim adım ${NAME}, soyadım ${SURNAME}` }
      </h2>

    </>
  );
}

export default App;
