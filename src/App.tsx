import React,{ useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {

  return (
    <div>
    <Counter initialCount={0} />
    </div>
  )
}  

export default App
