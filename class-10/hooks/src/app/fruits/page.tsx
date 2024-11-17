'use client'
import {useState} from 'react'
export default function Todo() {
    const [fruitList,setFruitList]  = useState(['Apple','Mango'])
    const [fruitName, setFruitName] = useState("")

    const handleAddFruit = ()=>{
        setFruitList([...fruitList, fruitName])
        setFruitName("")
    }

    const handleFruitName = (e)=>{
        setFruitName(e.target.value)
    }

    const handleDeleteFruit = (index:number)=>{
        setFruitList(fruitList.filter((c,i)=>{
            return i!=index
        }))
    }

    return (
        <div className="grid place-items-center h-screen bg-blue-900/30">
            <div className="space-y-10">
                <input type="text" name="fruit" id="fruit" value={fruitName} onChange={(e)=>handleFruitName(e)} className="block leading-10 rounded-2xl w-96 px-4 py-2"/>
                <div className="space-y-5 flex items-center flex-col">
                <button className="bg-blue-600/70 px-6 py-4 text-white font-bold rounded-2xl text-2xl" onClick={handleAddFruit}>Add Fruits</button>
                <ul className="font-normal text-xl space-y-5 ">
                    {
                        fruitList.map((c,i)=>{
                            return (
                            <li key={i} className="bg-gray-600 text-white px-4 py-2 rounded-2xl w-[400px] flex justify-between items-center">
                                <div className='inline-block w-[250px]'>{c}</div>
                                <span><button className="bg-yellow-400/50 rounded-lg text-xl h-8 w-8 text-white" onClick={()=>handleDeleteFruit(i)}>x</button></span>
                            </li>)
                        })
                    }
                </ul>
                </div>
            </div>
        </div>
    );
}