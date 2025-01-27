"use server"

import { redirect } from "next/navigation"
import * as jose from 'jose'
import { cookies } from "next/headers.js"

const handleSubmitForm = async (prevState:any, fromData:FormData)=>{
    try{
   
        const fields = {
            email:fromData.get("email"),
            password:fromData.get("password")
        }
        
        // post data to end point for login
        const response = await fetch("http://localhost:3000/api/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(fields)
        })

        const data = await response.json()

        //return error message if user not found
        if(!response.ok)
            return data.message

        const user = data.user
        
        // payload stored in generated token
        const payload = {
            user:user,
            roles:['admin','user'],
            permissions:{
                read:true,
                write:true
            }
        }

        // generate jwt token
        const secret = new TextEncoder().encode(process.env.SECRET)
        const alg = 'HS256'
        const token = await new jose.SignJWT(payload)
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setSubject(user.id.toString())
        .setExpirationTime('2h')
        .sign(secret)

        // save token in cookie
        const expirationDate = new Date(Date.now() + 10*60*1000)

        cookies().set("token",token,{
            expires:expirationDate,
            httpOnly:true,
            path:"/",
            sameSite:"strict"
        })
    }
    catch(error)
    {
        console.log(error.message)
        return error.message
    }
    redirect("/dashboard")
}

export default handleSubmitForm