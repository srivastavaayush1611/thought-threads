import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myjObj={
    username: "ayush",
    age: 22
  }

  return (
    <>
      <h1 className='bg-green-400' >Tailwind Test</h1>
      <Card username="chai aur code" btnText="click here"/>
      <Card username="learning react" btnText="not here"/>
    </>
  )
}

export default App
