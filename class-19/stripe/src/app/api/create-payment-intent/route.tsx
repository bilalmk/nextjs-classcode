import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request:NextRequest)
{
    const payload = await request.json()
    const {amount} = payload

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    try
    {
        const payment_intent = await stripe.paymentIntents.create(
            {
                amount:amount*100,
                currency:"usd",
                automatic_payment_methods:{
                    enabled:true
                }
            }
        )

        return NextResponse.json({client_secret:payment_intent.client_secret})
    } 
    catch(error)
    {
        console.log(error)
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
   
    }
}