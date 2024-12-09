import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "next-sanity";

const getData = async(slug:string)=>{
    try{
        const query = `*[_type=="blogs" && slug.current=="${slug}"][0]{
        _id,
        heading,
        detail,
        publishAt,
        "category":category->category,
        "author":author->author,
        image}`
        //console.log(query)
        const blog = await client.fetch(query,{},{cache:"no-store"})
        if(blog)
        {
            return blog;
        }
        else
        {
            console.log("no record found")
            return null
        }
    }
    catch(error)
    {
        console.error('Fetch error:', error.message);
        return null; // or throw the error, depending on how you want to handle failures
    }
    
}

export default async function Detail({params}:{params:{slug:string}}) {
    const blog = await getData(params.slug)
    console.log(blog)
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <Image
          src={urlFor(blog.image).url()} // Replace with your actual image path
          alt={blog.heading}
          width={1920}
          height={1080}
          className="w-full h-[400px] object-fill"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {blog.heading}
          </h1>
          <div className="text-gray-600 text-sm mb-4">
            <span>{blog.category}</span>
            <span className="mx-2">|</span>
            <span>{new Intl.DateTimeFormat("en-US",{
                year:"numeric",
                month:"long",
                day:"2-digit",
                hour:"2-digit",
                minute:"2-digit",
                hour12: true,
              }).format(new Date(blog.publishAt)).replace(" at ", ", ")}</span>
            <span className="mx-2">|</span>
            <span>by {blog.author}</span>
          </div>
              
              <div className="text-gray-700 leading-relaxed mb-6">
                <PortableText value={blog.detail}/>
               </div>
   
          
          
        </div>
      </div>
    </div>
    );
}