import { NextRequest, NextResponse } from "next/server.js"

export function middleware(request: NextRequest){
    
    const isAllowed = false
    if(!isAllowed && request.nextUrl.pathname !== "/"){
        return NextResponse.redirect(new URL("/",request.url ))

    }

    NextResponse.next()
}

export const config = {
  matcher : ["/products", "/about"]
}
