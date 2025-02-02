import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request:NextRequest, res:NextResponse)
{
    const stripe = new Stripe(process.env.STRIPE_SECURITY_KEY!)
    const payload = await request.text()
    const response = JSON.parse(payload)

    try
    {
        const sig = request.headers.get("Stripe-Signature")

        if(!sig)
        {
            return NextResponse.json({status:"failed",message:"Stripe signatuer not found"},{status:404})
        }

        const event = stripe.webhooks.constructEvent(
            payload,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET!
        )

        console.log("\n\n response",response.data)
        console.log("\n\n event types",event.type)
        return NextResponse.json({status:"success",event:event.type})
    }
    catch(error)
    {
        console.log(error)
        return NextResponse.json({status:"failed",error})
    }
    
}