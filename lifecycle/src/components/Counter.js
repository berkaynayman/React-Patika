import { useState, useEffect } from "react"
// useState, useEffect lere hook deriz bu hooklar if içinde çalıştırılamaz
function Counter() {
  const [number, setNumber] = useState(0)
  const [name, setName] = useState("Berkay")

  //bu ifade herhange bir statein güncellenmesi halinde çalışır
  useEffect(() => {
    console.log("state güncellendi");
  })

  useEffect(() => {
    console.log("Number state güncellendi");
  }, [number])


  useEffect(() => {
    console.log("component mount edildi");
 
    const interval = setInterval(() => {
        setNumber((n) => n + 1)
    }, 2000)

    return () => clearInterval(interval)
  }, []) //depencies array(bağımlılık arrayı denir)



  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>CLICK CHANGE NUMBER</button>
      <hr/>
      <h1>{name}</h1>
      <button onClick={() => setName("Nayman")}>CLICK CHANGE NAME</button>
    </>
  );
}

export default Counter;
