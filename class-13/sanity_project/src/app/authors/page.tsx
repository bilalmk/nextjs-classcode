import { client } from "@/sanity/lib/client";
import Link from "next/link";


      
export default async function Authors() {
    const authors = await client.fetch(`*[_type=="authors"]`,{},{cache:"no-store"})
    return (
        <div className="category">
            {authors.map((author)=>(
                <Link key={author._id} href={`/authors/news/${author.slug.current}`}>{author.author}</Link>
            ))}
        </div>
    );
}