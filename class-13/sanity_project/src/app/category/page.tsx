import { client } from "@/sanity/lib/client";
import Link from "next/link";


      
export default async function Category() {
    const categories = await client.fetch(`*[_type=="categories"]`)
    
    return (
        <div className="category">
            {categories.map((category)=>(
                <Link key={category._id} href={`/category/news/${category.category}`}>{category.category}</Link>
            ))}
        </div>
    );
}