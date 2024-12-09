import { defineField } from "sanity"
 
export const blogs = {
    name:"blogs",
    type:"document",
    title:"Blogs",
    fields:[
        defineField({
            name:"category",
            type:"reference",
            title:"Category",
            validation:(rule)=>{
                return rule.required()
            },
            to:[{
                type:"categories"
            }]
        }),
        defineField({
            name:"heading",
            type:"string",
            title:"Heading",
            validation:(rule)=>{
                return rule.required()
            }
        }),
        defineField({
            name:"slug",
            type:"slug",
            title:"Slug",
            options:{source:"heading"},
            validation:(rule)=>rule.required()
        }),
        defineField({
            name:"author",
            type:"reference",
            title:"Author",
            validation:(rule)=>{
                return rule.required()
            },
            to:[
                {
                    type:"authors"
                }
            ]
        }),
        defineField({
            name:"detail",
            type:"array",
            title:"Detail",
            of:[{type:"block"}],
            validation:(rule)=>rule.required()
        }),
        defineField({
            name:"image",
            type:"image",
            title:"Blog Image"
        }),
        defineField({
            name:"publishAt",
            type:"datetime",
            title:"Post DateTime",
            initialValue:()=>new Date().toISOString()
        }),
    ]
}