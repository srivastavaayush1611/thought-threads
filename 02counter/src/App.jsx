import { useState } from 'react'// hooks come from here
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(6)
   //let counter =6
   const addValue=()=>{
    console.log("clicked", counter);
    counter=counter+1 
    setCounter(counter)
   }
   const reduceValue=()=>{
    console.log("clicked", counter);
    counter=counter-1 
    setCounter(counter)
   }
  return (
    <>

      <h1>Chai aur React</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}>Add Value</button>
      <br/>
      <button
      onClick={reduceValue}>reduce Value</button>
    </>
  )
}

export default App
