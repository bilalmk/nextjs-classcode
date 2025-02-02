# [Use zod for data sanitization and validation](https://zod.dev/)

This project uses Zod, a TypeScript-first schema declaration and validation library, to ensure data integrity through robust type checking, validation, and sanitization. Zod allows us to define the structure of various data objects and ensures that the data matches these definitions before they are processed or stored.

Zod enables you to create schemas for your data models which can be used to perform validation and sanitization

## Installation
```
npm install zod
```

---

# Stripe Payment Integration Project

A project demonstrating how to integrate [Stripe](https://stripe.com) as a payment gateway into your web application.
you can use following link to create strip account

- **Stripe Account:** Create an account on [Stripe](https://stripe.com) to obtain your API keys.
- **Stripe Documentation:** [Read here](https://docs.stripe.com/)

## Overview

This project serves as an example of how to incorporate Stripe payments into your application. It includes secure payment processing, webhook integration to handle events, and error handling to ensure smooth operations. Whether you're building an e-commerce site or a subscription-based service, this project provides a solid foundation for integrating Stripe.

## Features

- **Stripe Payment Integration:** Seamlessly process payments using Stripe.
- **Checkout Process:** A user-friendly interface to accept payment details.
- **Webhook Handling:** Receive and process events from Stripe (e.g., successful payments, failed transactions).
- **Environment Configuration:** Easily manage API keys and configuration using environment variables.

## Install Dependencies:
```
npm install stripe @stripe/stripe-js @stripe/react-stripe-js
```

## Set Up Environment Variables:
Create a .env file in the root directory and add your Stripe API keys:
```
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
