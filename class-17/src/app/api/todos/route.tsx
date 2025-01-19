import { NextRequest, NextResponse } from "next/server"

const todos=[{
    id:1,
    title:"Learn next js",
    status:"open"
},{
    id:2,
    title:"Create hello world",
    status:"open"
},
{
    id:3,
    title:"Deploy on vercel",
    status:"open"
},
{
    id:4,
    title:"Hackathon",
    status:"open"
}
]

export function GET(){
    return NextResponse.json(todos)
}

export async function POST(request:NextRequest)
{
    try{
        const data = await request.json()
        const newId = todos.length+1
        const newTitle = data.title
        const newStatus = data.status
        const newTodos = {id:newId,title:newTitle,status:newStatus}
        todos.push(newTodos)
        return NextResponse.json(todos)
    }
    catch(error)
    {
        return NextResponse.json({error:"invalid parameters"},{status:500})
    }
}

export async function PUT(request:NextRequest)
{
    try{
        const data = await request.json()
        const {id,title,status} = data
        if(!id || !title || !status)
        {
            return NextResponse.json({error:"id,title and status are required"}, {status:404})
        }

        const existingIndex = todos.findIndex((todo)=>todo.id==id)
        console.log(existingIndex)
        if(existingIndex==-1)
        {
            return NextResponse.json({error:"todo not found"}, {status:404}) 
        }

        todos[existingIndex]={...data}
        return NextResponse.json(todos)
    }
    catch(error)
    {
        return NextResponse.json({error:"invalid parameters"}, {status:500})
    }
}

export async function DELETE(request:NextRequest)
{
    try{
        const id = parseInt(request.nextUrl.searchParams.get("id"))

        if(!id)
        {
            return NextResponse.json({error:"id is required"}, {status:404})
        }

        const existingIndex = todos.findIndex((todo)=>todo.id==id)
        console.log(existingIndex)
        if(existingIndex==-1)
        {
            return NextResponse.json({error:"todo not found"}, {status:404}) 
        }
        todos.splice(existingIndex,1)
        
        return NextResponse.json(todos)
    }
    catch(error)
    {
        return NextResponse.json({error:"invalid parameters"}, {status:500})
    }
}
