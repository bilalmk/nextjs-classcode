import Image from "next/image";
import {client} from "../sanity/lib/client"
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {

  const getData =async () => {
    const res = await client.fetch(`*[_type == "product"]{
      name,
      description,
      price,
      image,
      gender
      }`)
    // console.log("res>>>",res)
    return res
   
  }

  const data =await getData()

  return (
 <div className="flex mt-4 items-center h-screen flex-col" >
  
  {data.map((product: any, index: number)=> (
    <div key={index} >
     <div>Name: {product.name}</div>
     <div>Description: {product.description}</div>
     <div>Price: {product.price}</div>
     <div>Gender: {product.gender}</div>
     {
      product.image && (
        <div><Image src={urlFor(product.image).url()} alt="" width={200} height={100}  /></div>

      )
     }
    </div>
  ))}
   </div>
  );
}
