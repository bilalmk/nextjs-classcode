'use client'
export default function Home() {

  // function greeting()
  // {
  //   console.log("hello")
  // }
  // const greeting = ()=>{
  //   console.log("hello")
  // }
  // greeting()

  const handleClickEvent = ()=>{
    console.log("hello world")
    alert("hello world")
  }

  return (
    <div className="bg-slate-400 w-full h-screen flex justify-center items-center flex-col">
      <button onClick={handleClickEvent} className="bg-blue-500 text-white rounded-2xl px-6 py-2">Click Me</button>
    </div>
  );
}
