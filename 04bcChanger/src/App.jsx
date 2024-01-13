import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState("olive")

  return (
    <>
    <div style={{background: color, width: "100%", height: "100vh",display:"flex", gap:"10px",alignItems:"end",paddingBottom:"50px",paddingLeft:"50px"}}>
      <button
      onClick={() => setColor("red")}
       style={{background:"red",padding:"5px 20px",borderRadius:"5px", color:"#fff",fontWeight:"700",fontSize:"30px",boxShadow:"1px 1px 4px #000"}}>Red</button>
      <button
      onClick={() => setColor("green")}
      style={{background:"green",padding:"5px 20px",borderRadius:"5px", color:"#fff",fontWeight:"700",fontSize:"30px",boxShadow:"1px 1px 4px #000"}}>Green</button>
      <button 
      onClick={() => setColor("blue")}
      style={{background:"blue",padding:"5px 20px",borderRadius:"5px", color:"#fff",fontWeight:"700",fontSize:"30px",boxShadow:"1px 1px 4px #000"}}>blue</button>
      <button 
      onClick={() => setColor("black")}
      style={{background:"#000456",padding:"5px 20px",borderRadius:"5px", color:"#fff",fontWeight:"700",fontSize:"30px",boxShadow:"1px 1px 4px #000"}}>Black</button>
      <button 
      onClick={() => setColor("white")}
      style={{background:"white",padding:"5px 20px",borderRadius:"5px", color:"black",fontWeight:"700",fontSize:"30px",boxShadow:"1px 1px 4px #000"}}>White</button>
    </div>
    </>
  )
}

export default App
