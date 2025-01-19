import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest)
{
    const name = request.nextUrl.searchParams.get("name")
    return NextResponse.json({message:"hello world "+name})
}