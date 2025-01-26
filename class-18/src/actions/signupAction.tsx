"use server"
const handleSubmitForm = async (prevState:any, fromData:FormData)=>{
        const name = fromData.get("name")
        const email = fromData.get("email")
        const password = fromData.get("password")
    
        const fields = {
            name:name,
            email:email,
            password:password
        }
        
        const response = await fetch("http://localhost:3000/api/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(fields)
        })

        const data = await response.json()
        if(!response.ok)
            return data.message

        return data.message


    }

export default handleSubmitForm