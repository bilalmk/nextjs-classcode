"use client"

export default function Home() {
  let test:number = 0
  function sayHello() {
    console.log("Hello");
  }
  return (
    <div className="flex justify-center items-center h-screen " >
  <button onClick={sayHello}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
      <h1 className="text-lg" >
      Click Me
      </h1>
    
     </button>
    <div>
   
  );
}
