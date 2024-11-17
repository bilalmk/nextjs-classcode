"use client"
import { useEffect, useState } from "react";
export default function Page() {
const [counter, setCounter] = useState(0)
const [name, setName] = useState("Bilal")


useEffect(() => {
    setCounter(counter + 10)
},[])

const handleName = () => {
    setName("Moiz")
}
    return (
        <div className="bg-slate-400 w-full h-screen flex justify-center items-center flex-col">
        <div>Counter Value : {counter}</div>
        <div>Name : {name}</div>
      <button className="bg-blue-500 text-white rounded-2xl px-6 py-2">Add Counter</button>
      <button onClick={handleName} className="bg-blue-500 text-white rounded-2xl px-6 py-2">Click Me</button>

    </div>
    );
}