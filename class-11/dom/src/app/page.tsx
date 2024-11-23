'use client'


export default function Home() {
  let counter=0
  const handleClick = ()=>{
    counter=counter+1
    const elm = document.getElementById("counter")
    const elm1 = document.getElementById("counter1")
    if(elm)
      elm.innerHTML = `Counter Value : ${counter}`

    if(elm1)
      elm1.innerHTML = `Counter Value : ${counter}`
  }
  return (
    <div className="bg-blue-500/50 min-h-screen justify-center flex items-center flex-col gap-6">
      <div id="counter" className="text-white text-2xl">Counter Value : 0</div>
      <button onClick={handleClick} className="bg-yellow-500 rounded-2xl px-6 py-2">Click Me</button>
      <div id="counter1" className="text-white text-2xl">Counter Value : 0</div>
    </div>
  );
}
