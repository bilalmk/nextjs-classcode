'use client'

import { useCart } from "@/context/CartContext";

export default function Cart() {
    const {cart} = useCart()
    return (
        <a href="/cart">{`${cart.length>0?"cart("+cart.length+")":"cart"}`}</a>
    );
}