import { ChildTwo } from "./ChildTwo"

export const ChildOne = (
    // props:any
) => {
    // const data = props.data
return (
    <div className="flex justify-center items-center flex-col w-full h-screen">
        Child One
        <p>this is child two component</p>
        {/* <p>this is DATA from  Parent: {data.name}</p> */}
        {/* <ChildTwo data={data} /> */}
        <ChildTwo  />
    </div>
)
}
