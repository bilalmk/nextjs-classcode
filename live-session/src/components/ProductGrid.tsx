import { Product } from "@/types/product.js"
import Image from "next/image"

export default function ProductGrid({products,addToCart}:{products:Product[],addToCart:(product:Product)=>void}){
  return (
  <div className="w-[70%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      {products.map((product: Product) => (
        <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="relative h-40 bg-gray-100 flex items-center justify-center">
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              style={{ objectFit:"cover" }}
              className="p-4"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 truncate">
              {product.name}
            </h2>
            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
              {product.description.substring(0,100)}...
            </p>
            <div className="flex items-center justify-between mt-4">
              <p className="text-lg font-bold text-gray-900">${product.price}</p>
              <p className="text-sm text-yellow-500 flex items-center">
                {product.rating}
              </p>
            </div>
            <button onClick={()=>addToCart(product)} className="w-full mt-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}