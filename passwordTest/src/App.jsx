import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(6)
  const [allowNumber, setAllowNumber] = useState(false)
  const [allowChar, setAllowChar] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordGenerator = () => useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(allowNumber) str += "0123456789"
    if(allowChar) str += "~`!@#$%^&*(){}[]"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass = str.charAt(char)

      setPassword(pass)
      
    }

  },[])

  return (
    <>
      <h1 style={{fontSize:"40px", textDecoration:"underline", color:"green"}}>Password Generator</h1>
      <div>
        <input type="text" />
        <button>Copy</button>

        <br />
        <input
        min={6}
        max={100}
        type="range" 
        />
        <span>length: {le}</span>

        <br />
        <input 
        id='number'
        type="checkbox"
        />
        <label htmlFor='number'>Number</label>

        <br />
        <input 
        type="checkbox"
        id="char" />
        <label htmlFor="char">Character</label>
      </div>
    </>
  )
}

export default App
