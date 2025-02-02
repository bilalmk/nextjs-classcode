'use client'
import Checkout from "@/components/Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function Home() {
  const amount=50
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  return (
    <div>
      <h1>Hello, Bilal Khan</h1>
      <p>Please proceed to Payment</p>
      <Elements stripe={stripePromise} options={{ amount:amount, currency:"usd", mode:"payment" }}>
        <Checkout amount={amount}/>
      </Elements>
    </div>
  );
}
