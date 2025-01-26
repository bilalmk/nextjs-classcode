import usersInfo from "@/data/users";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request:NextRequest) {
    const body = await request.json()
    const {email,password} = body
    const existingUser = usersInfo.find(user=>user.email==email)

    if(!existingUser)
        return NextResponse.json({status:false,message:"user not exist"},{status:404})

    if(existingUser.password!==password)
        return NextResponse.json({status:false,message:"password is incorrect"},{status:404})
    
    return NextResponse.json({status:true,message:"login successfully"},{status:200})



}