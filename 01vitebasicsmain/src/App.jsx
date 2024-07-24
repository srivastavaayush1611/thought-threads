import Chai from "./trial"

function App() {
 const username="chai aur code"

  return (
    <>
      <Chai/>
      <h1>Chai aur react{username}</h1>
      <p>testing paragraph</p>
    </>
    //{username} always contain evaluated expression
    //in curly brace anything is treated as variable
  )
}

export default App
