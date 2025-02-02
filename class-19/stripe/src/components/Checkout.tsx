'use client'
import { PaymentElement } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

export default function Checkout({amount}:{amount:number}) {
    const [errors, setErrors] = useState("")
    const [clientSecret, setClientSecret] = useState("")
    const stripe = useStripe()
    const elements = useElements()

    useEffect(()=>{
        const getPaymentIntent = async()=>{
            const response = await fetch("/api/create-payment-intent",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({amount:amount})
            })
            const json = await response.json()
            setClientSecret(json.client_secret)
        }
        getPaymentIntent()
    },[amount])

    const handleFormSubmit=(event)=>{
        event.preventDefault()
        if(!stripe || !elements)
        {
            setErrors("invalid operation")
            return
        }

        const {error:submitError} = elements.submit()
        if(submitError)
        {
            setErrors(submitError.message)
            return 
        }

        const {error} = stripe.confirmPayment({
            clientSecret,
            elements,
            confirmParams:{
                return_url:`${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`
            }
        })

        if(error)
        {
            setErrors(error.message)
            return
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            {clientSecret && <PaymentElement/>}
            <button  className="mt-4 bg-blue-500 rounded-2xl px-6 py-2 text-white font-semibold">Pay ${amount}</button>
            {errors && <p>{errors}</p>}
        </form>
    );
}