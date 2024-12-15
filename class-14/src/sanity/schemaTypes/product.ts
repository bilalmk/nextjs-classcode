export const Product = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name:'name',
            title:'Name',
            type: 'string',
            validation: (rule: any) => rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name:'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'gender',
            title: 'Gender',
            type: 'string',
            options:{
                list:[
                   {title: 'Male', value: 'male'},
                   {title: 'Female', value: 'female'} 
                ]
            }
        },
        {
            name: 'tags',
            title:'Tags',
            type: 'array',
            of : [{type: 'string'}]
        },
        {
            name:'category',
            title: 'Category',
            type: 'reference',
            to: [{type:'category'}]
        }
    ]

}