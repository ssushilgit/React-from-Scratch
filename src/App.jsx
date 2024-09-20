import React from 'react'
import './App.css'
const App = () => {
  const handleNameChange = () =>{
    const names = ['Sushil', 'Sugam', 'Sushant']
    const int = Math.floor(Math.random() *3)
    return names[int];
  }
  return (
    <div>
      <h2>Hello {handleNameChange()}</h2>
    </div>
  )
}

export default App