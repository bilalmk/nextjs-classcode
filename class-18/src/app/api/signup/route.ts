import usersInfo from "@/data/users";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const body = await request.json()
    const {email} = body
    const existingUser = usersInfo.find(user=>user.email==email)

    if(existingUser)
        return NextResponse.json({status:false,message:"user already exist"},{status:409})

    usersInfo.push(body)
    return NextResponse.json({status:true,message:"signup successfully"},{status:200})



}