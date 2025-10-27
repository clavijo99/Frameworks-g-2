import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { verifyToken } from './app/api/auth/login/route'
import { routesPublics } from '@/lib/routesPublics'


export function middleware(request) {

    if (routesPublics.some(route => request.nextUrl.pathname.startsWith(route))) {
        return NextResponse.next()
    }

    token = request.headers.get('Authorization')?.split(" ")[1]

    if (token != null && !token) {
        return NextResponse.json({ message: "No se envio el token" }, { status: 401 })
    }

    try {
        verifyToken(token)
        return NextResponse.next()
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Token invalido" }, { status: 401 })
    }
}

export const config = {
    matcher: ['/api/:path*'],
    runtime: 'nodejs'
}


