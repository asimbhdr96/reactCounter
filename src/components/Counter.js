import React from 'react'
import { useState } from 'react'
const Counter = () => {

  let [counter,setCounter] = useState(0);
  return (
    <div>Counter
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>

  )
}

export default Counter
