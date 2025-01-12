"use client"
import { ChildOne } from "@/components/ChildOne";
import { DataContext } from "@/context/context";
import ContextProvider from "@/context/ContextProvider";

export default function Home() {
  // const data = {name :"Sir Hammad"}
  return (
    <>
    <ContextProvider >
    {/* <DataContext.Provider value={data}   >  */}
    {/* <h1>Prop Drilling</h1> */}
   {/* <ChildOne data={data} /> */}
   <h1 className="w-full mx-auto text-center" >Context API</h1>
   <ChildOne />
   {/* </DataContext.Provider > */}
   </ContextProvider>
   </>
  );
}
