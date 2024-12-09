import NewsCard from "@/components/NewsCard";
import {client} from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const blogs = await client.fetch(`
  *[_type=="blogs"]{
  _id,
  "slug":slug.current,
  image,
  heading,
  "category": category->category,
  "author": author->author,
  "author_slug":author->slug.current,
    publishAt
  }
  `,{},{cache:"no-store"})
    
  return (
    <div className="main sm:px-6 lg:px-8">
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <NewsCard 
          author={blog.author} 
          author_slug={blog.author_slug} 
          category={blog.category} 
          heading={blog.heading} 
          image={blog.image}
          publishAt={blog.publishAt}
          slug={blog.slug}
          key={index}
          />
          
        ))}
    </div>
</div>


  );
}
