import { useState } from 'react'
import './App.css'

function App() {
  //let counter = 15;
  //React way of declaring variables
  const [counter, setCounter] = useState(15);

  // Function to update the counter

  const addValue = () => {
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>React course with Hitesh {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}> value</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
