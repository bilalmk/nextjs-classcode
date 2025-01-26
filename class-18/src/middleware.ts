import { NextResponse, NextRequest } from 'next/server'
import * as jose from 'jose'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const token = await request.cookies.get("token")
    if(!token)
        return NextResponse.redirect(new URL('/signin', request.url))

    const secret = new TextEncoder().encode(process.env.SECRET
      )
      const jwt = token
      
      const { payload } = await jose.jwtVerify(jwt.value, secret, {})
      if(!payload)
        return NextResponse.redirect(new URL('/signin', request.url))
}
 
export const config = {
  matcher: ['/dashboard/:path*','/todos/:path*'],
}