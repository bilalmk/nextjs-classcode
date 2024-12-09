import { defineField } from "sanity"
 
export const categories = {
    name:"categories",
    type:"document",
    title:"Categories",
    fields:[
        defineField({
            name:"category",
            type:"string",
            title:"Category",
            validation:(rule)=>{
                return rule.required()
            }
        })
    ]
}