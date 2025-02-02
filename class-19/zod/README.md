# Next.js Custom Authentication and Authorization using Server Actions with JWT and Cookies

This project demonstrates how to use **Next.js server actions** in combination with **JWT tokens** (via the `jose` library), **cookies**, and **useFormState** for efficient and secure server-side logic and form handling.

## Features

- **JWT Authentication**: Securely sign and verify JSON Web Tokens using the [`jose`](https://github.com/panva/jose) library.
- **Cookie Management**: Store and retrieve authentication tokens using HTTP cookies for stateless sessions.
- **Next.js Server Actions**: Leverage server actions for seamless server-side logic in Next.js [`Server Actions`](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
- **useFormState Integration**: Simplify form state management in React with better validation and user experience.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bilalmk/nextjs-classcode
   cd nextjs-classcode/class-18

2. create .env file and create variable SECRET

3. use following URL's to generate secret key
   - https://generate-secret.vercel.app/64
   - https://passwordsgenerator.net/

4. set SECRET key value in .env file


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
