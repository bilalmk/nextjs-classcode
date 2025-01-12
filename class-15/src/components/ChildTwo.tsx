import { useContext } from "react"
import { ChildThree } from "./ChildThree"
import { DataContext } from "@/context/context"

export const ChildTwo = (
    // props: any
) => {
    // const data = props.data
    const value = useContext(DataContext)
console.log("value in component two>>>",value)
    return (
        <div>
            Child Two

            <p>this is child three component</p>
            {/* <p>this is DATA from  Child One: {data.name}</p> */}
            {/* <ChildThree data={data}  /> */}
            <ChildThree />
        </div>
    )
    }
    