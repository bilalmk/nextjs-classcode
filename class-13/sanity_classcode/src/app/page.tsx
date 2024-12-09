import { client } from "@/sanity/lib/client";
import {urlFor} from "@/sanity/lib/image"
import Image from "next/image";

export default async function Home() {
  const data = await client.fetch(`*[_type == "blogs"]{_id,heading,image,"category":category->category}`,{},{cache:"no-store"})
  
  console.log(data)
  return (
    <div>
      Blogs: 
      {
        data.map((data,index) => (
          <div key={index}>
            {data.heading}
            {/* <img src={urlFor(data.image).url()} width="200px"/> */}
            <Image src={urlFor(data.image).url()} alt={data.heading} width={200} height={400}/>
            {data.category}
          </div>
        ))
      }
    </div>
  );
}
