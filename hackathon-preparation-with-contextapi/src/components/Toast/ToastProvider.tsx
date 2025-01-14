'use client'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export const notifySuccess = (message:string)=>{
    toast.success(message)
}

const ToastProvider = ()=>{
    return (
        <ToastContainer position="top-right" hideProgressBar autoClose={3000}/>
    )
}

export default ToastProvider