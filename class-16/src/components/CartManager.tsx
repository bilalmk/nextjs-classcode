'use client'

import React from 'react'
import {useState} from 'react'
import ProductGrid from './ProductGrid'
import { Product } from '@/types/product.js'

const CartManager = ({products}:{products:Product[]}) => {
    const [cart,setCart] = useState([])

    const handleAddToCart=(product)=>
    {
        setCart((prevProduct)=>[...prevProduct,product])
    }

    const handleRemoveFromCart = (product_id:string)=>
    {
        const newData = cart.filter((item)=>{
            return item._id!=product_id
        })
        setCart(newData)
    }

  return (
    <>
    <ProductGrid products={products} addToCart={handleAddToCart}/>
    <div className='w-[80%] mx-auto my-8'>
        <table className='w-full'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item:Product)=>{
                    return (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>1</td>
                            <td><button onClick={()=>handleRemoveFromCart(item._id)} className='bg-red-500 rounded-xl p-4 text-white'>Remove</button></td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    </div>
    </>
    
  )
}

export default CartManager