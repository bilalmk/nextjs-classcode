import { defineField } from "sanity";

export const Blogs = {
    name: "blogs",
    title: "Blogs",
    type: "document",
    fields: [
        {
            name: "heading",
            title: "Heading",
            type: "string",
            validation:(rule)=>rule.required()
        },
        {
            name: "image",
            title: "Blog Image",
            type: "image"
        },
        {
            name:"category",
            title:"Category",
            type:"reference",
            to:[{
                type:"Category"
            }]
        }
    ]
}