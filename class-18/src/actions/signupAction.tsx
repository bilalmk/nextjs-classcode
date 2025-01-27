"use server"
const handleSubmitForm = async (prevState:any, formData:FormData)=>
{
    try{
        const fields = {
            name:formData.get("name"),
            email:formData.get("email"),
            password:formData.get("password")
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
    catch(error)
        {
            console.log(error.message)
            return error.message
        }

}

export default handleSubmitForm