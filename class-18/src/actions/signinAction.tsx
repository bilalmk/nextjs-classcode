"use server"

import { redirect } from "next/navigation"
import * as jose from 'jose'
import { cookies } from "next/headers.js"

const handleSubmitForm = async (prevState:any, fromData:FormData)=>{
        const email = fromData.get("email")
        const password = fromData.get("password")
    
        const fields = {
            email:email,
            password:password
        }
        
        const response = await fetch("http://localhost:3000/api/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(fields)
        })

        const data = await response.json()
        if(!response.ok)
            return data.message

        //return data.message
        // token generate
        const secret = new TextEncoder().encode(process.env.SECRET)
        
          const alg = 'HS256'
        
          const token = await new jose.SignJWT()
            .setProtectedHeader({ alg })
            .setExpirationTime('2h')
            .sign(secret)

        // cookie

        cookies().set("token",token,{
            expires:new Date(Date.now()+2*60*1000)
        })
        redirect("/dashboard")

    }

export default handleSubmitForm