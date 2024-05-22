import React,{ useState } from 'react'
import './App.css'

interface AppProps {
  initialCount: number;
}
function Counter({initialCount}: AppProps) {
  const [count, setCount] = useState<number>(initialCount)
  const handleIncreament = ()=>{
    setCount((previous) => previous + 1)
   
  }
  const handleDecrement = ()=>{
    setCount((previous) => previous - 1)
   
  }
  const reset = ()=>{
    setCount(0)
  }
  const switchSigns = ()=>{
    setCount((prev) => prev * -1)
  }
  return (
    <div>
     <h1>
      Count: <span data-testid="count">{count}</span>
     </h1>

     <div>
     <button style={{marginRight:"10px"}} onClick={handleIncreament}>Increament</button>
     <button style={{marginRight:"10px"}} onClick={handleDecrement}>Decrement</button>
     <button style={{marginRight:"10px"}} onClick={reset}>Restart</button>
     <button style={{marginRight:"10px"}} onClick={switchSigns}>Switch Signs</button>
     </div>
    </div>
  )
}  

export default Counter
