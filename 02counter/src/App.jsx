import { useState } from 'react'
import './App.css'


function App() {

  const [counter , setCount] = useState(1)

  const addValue = () => {
    setCount(counter + 1)
    if(counter == 20){
      setCount(counter)
    }
  }
  const removeValue = () => {
      setCount(counter - 1)
    if(counter == 0){
      setCount(counter)
    }
  }

  return (
    <>
      <h1>chai aur react {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}
      >add Value</button>
      <br />
      <button
      onClick={removeValue}
      >removeValue</button>
    </>
  )
}

export default App
