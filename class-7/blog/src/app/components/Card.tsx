import Image from "next/image";

export default function Card(props)
{

    console.log("props>>>",props)
    return (
        <div className=" w-full  rounded" >
            <div> 
                <Image src={props.image} alt="blog's image" width={150} height={150}  />
            </div>
            <div  >
                <h1>{props.title}</h1>
                <p className="text-gray-500 text-sm" >{props.description}</p>
                <button className="text-gray-500 text-sm" >Read More</button>
            </div>
        </div>
    )
}