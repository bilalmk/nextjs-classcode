import { Product } from "@/types/product.js"
import Image from "next/image"

export default function ProductGrid({products,addToCart}:{products:Product[],addToCart:(p)=>void})
{
    return (
        <div className="grid grid-cols-3 gap-12 w-[70%] mx-auto">
      {
        products.map((product:Product)=>{
          return (
            <div key={product._id}>
              <Image src={product.image_url} width={100} height={100} alt=""/>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button onClick={()=>addToCart(product)} className="bg-blue-500 text-white rounded-2xl text-2xl px-4 py-2">add to cart</button>
            </div>
          )
        })
      }
      
    </div>
    )
}