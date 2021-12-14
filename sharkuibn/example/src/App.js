import React from 'react'

import { ExampleComponent, Button } from 'sharkuibn'


import 'sharkuibn/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />
      <Button text="text" onClick={() => alert("asds")}/>
    </>
  )
}

export default App
