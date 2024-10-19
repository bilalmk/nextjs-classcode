import Card from "../components/Card";
import article from "../../data/posts"
export default function Blogs() {
    // const name = ["Bilal", "Aneeq", "Sohaib"]
    // name[0]
    // console.log(article[0])
    const blogData = article[0]
    const title = blogData.title
    const description = blogData.description
    const image = blogData.urlToImage
    return (
        <>
         <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-4 p-12" >
         <Card title={title} description={description} image={image}  />


         </div>

        </>

    );
}