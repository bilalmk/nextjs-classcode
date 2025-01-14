'use client'
import { notifySuccess } from '@/components/Toast/ToastProvider'
import { Product } from '@/types/product.js'
import React, {useContext, createContext, useState, ReactNode, useEffect} from 'react'

interface CartContextType {
    cart:Product[],
    handleAddToCart:(product:Product)=>void,
    handleRemoveFromCart:(product_id:string)=>void
} 

const CartContext = createContext<CartContextType|undefined>(undefined)

export const CartContextProvider = ({children}:{children:ReactNode})=>{

    const [isHydrated, setIsHydrated] = useState(false);
    
    const [cart, setCart] = useState<Product[]>(()=>{
        if(typeof window !=="undefined")
        {
            const cartData = localStorage.getItem("cart")
            return cartData? JSON.parse(cartData):[]
        }
        return []
    })
    
    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])

    
    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) {
        return null; // Avoid rendering on the server
    }

    const handleAddToCart = (product:Product)=>{
        setCart((prevProducts)=>[...prevProducts,product])
        notifySuccess("Item added in cart successfully")
    }

    const handleRemoveFromCart = (product_id:string)=>{
        setCart(
            cart.filter((item:Product)=>{
                return item._id!==product_id
            })
        )
        notifySuccess("Item remove from cart")
    }

    return (
        <CartContext.Provider value={{ cart, handleAddToCart, handleRemoveFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ():CartContextType=>{
    const context = useContext(CartContext)
    if(!context)
        throw new Error("useCart must be used within a CartProvider")
    return context
}