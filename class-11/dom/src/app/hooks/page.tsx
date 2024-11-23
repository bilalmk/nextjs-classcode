'use client'
import {useState} from 'react'
export default function Hooks() {
    const [counter, setCounter] = useState(0)
  const handleClick = ()=>{
    setCounter(counter+1)
    
    
  }
  return (
    <div className="bg-blue-500/50 min-h-screen justify-center flex items-center flex-col gap-6">
      <div id="counter" className="text-white text-2xl">Counter Value : {counter}</div>
      <button onClick={handleClick} className="bg-yellow-500 rounded-2xl px-6 py-2">Click Me</button>
      <div id="counter1" className="text-white text-2xl">Counter Value : {counter}</div>
    </div>
  );
}
