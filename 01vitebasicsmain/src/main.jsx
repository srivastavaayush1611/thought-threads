import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
} 
//we try another way using react to create element rather than function
//we have to follow the rules of react

const anotherUser=" chai aur code"//it is variable

const reactElement= React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'to google',
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement

)
