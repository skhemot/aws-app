import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img from './assets/img.jpeg'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      Hello All
      <img src = {img} alt = 'dummy image'style={{marginTop:"20px",marginBottom:"20px"}}/> 
      <button onClick={()=>setCount(count+1)} style={{background:"black",color:"white"}}>Click</button>
      <div>{count}</div>
    </div>
  )
}

export default App
