import NewsCard from "@/components/NewsCard"
import { client } from "@/sanity/lib/client"

export default async function Page({params}:{params:{author_slug:string}}) {
    const query = `
        *[_type=="blogs" && author->slug.current=="${params.author_slug}"]{
        _id,
        "slug":slug.current,
        image,
        heading,
        "category": category->category,
        "author": author->author,
          publishAt
        }
        `
        
    const blogs = await client.fetch(query,{},{cache:"no-store"})

        return (
            <div className="main sm:px-6 lg:px-8">
                {blogs.length>0 && <h1 className="inline-block px-6 py-2 mb-8 text-xl">Author News : <span className="text-2xl font-bold">{blogs[0].author}</span></h1>}
                <div className="space-y-4">
                {
                blogs.length>0?
                blogs.map((blog, index) => (
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
                ))
                :
                "No Blog found"
            }
                </div>
        </div>
        )
}