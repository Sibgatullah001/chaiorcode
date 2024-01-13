import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [allwoodNumber, setAllwoodNumber] = useState(false)
  const [allwoodCar, setAllwoodCar] = useState(false)
  const [password, setPassword] = useState("")

  // refer 
  const passwordRef = useRef(null)

  // passGenerator function
  const passwordGanerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(allwoodNumber) str += "0123456789"
    if(allwoodCar) str += "!@#$%^&*(){}[]`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length,allwoodNumber,allwoodCar,setPassword])


  const copyPassClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 8)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGanerator()
  },[length,allwoodNumber,allwoodCar, passwordGanerator])

  return (
    <>
    <h1 style={{textAlign:'center', color:'green'}}>
      Password Generator
    </h1>
    <div style={{display:"flex", gap:"5px", background:"gray", padding:"10px 20px", borderRadius:"10px"}}>
      <div style={{width:"100%", padding:"10px", backgroundColor:"white",borderRadius:"5px"}}>
        <input style={{border:"none", background:"transparent",fontSize:"20px",width:"100%",outline:"none"}}
        type="text" 
        value={password}
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
      </div>
      <button style={{padding:"10px", fontSize:"20px", borderRadius:"5px", outline:"none",border:"none", cursor:"pointer", background:"skyblue"}}
      onClick={copyPassClipboard}
      >
        Copy
      </button>
    </div>

    <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
      <div style={{display:"flex", gap:"5px", alignItems:"center"}}>
        <input style={{cursor:"pointer"}}
        type="range"
        min={6}
        max={100}
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
      </div>
      <div style={{display:"flex", gap:"5px", alignItems:"center"}}>
        <input 
        type="checkbox" 
        defaultChecked={allwoodNumber}
        id='numberInput'
        onChange={() => {
          setAllwoodNumber(prev => !prev)
        }}
        />
        <label>Numbers</label>
      </div>
      <div style={{display:"flex", gap:"5px", alignItems:"center"}}>
        <input 
        type="checkbox" 
        defaultChecked={allwoodNumber}
        id='CharInput'
        onChange={() => {
          setAllwoodCar(prev => !prev)
        }}
        />
        <label>Character</label>

      </div>
    </div>
    </>
  )
}

export default App
