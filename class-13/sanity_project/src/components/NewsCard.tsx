import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
interface IProps {
    heading:string,
    image:object,
    category:string,
    publishAt:Date,
    author_slug:string,
    author:string,
    slug:string
}
export default function NewsCard(props:IProps) {
    return (
        <div className="blog-section  sm:flex-row">
            {/* Image Section */}
            <Image
              className="blog-section-img sm:w-1/3"
              alt={props.heading}
              src={urlFor(props.image).url()}
              width={200}
              height={200}
            />

            {/* Text Section */}
            <div className="card flex flex-col  sm:w-2/3">
              <div className="datetime">
                <span className="text-[16px] text-gray-500"><Link href={`/category/news/${props.category}`}>{props.category}</Link></span>
                <span>|</span>
                <span className="text-[16px] text-gray-500">
                  {new Intl.DateTimeFormat("en-US",{
                    year:"numeric",
                    month:"long",
                    day:"2-digit",
                    hour:"2-digit",
                    minute:"2-digit",
                    hour12: true,
                  }).format(new Date(props.publishAt)).replace(" at ", ", ")}
                </span>
              </div>
              <h3 className="heading ">
                {props.heading}
              </h3>
              <p className="author flex-grow">by <Link href={`/authors/news/${props.author_slug}`}>{props.author}</Link></p>
              <Link href={`/detail/${props.slug}`} className="read_more">Read More</Link>
            </div>
            
          </div>
    )
}