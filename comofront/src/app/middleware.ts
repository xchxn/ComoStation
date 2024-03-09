import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('id')?.value
   
    if (currentUser && !request.nextUrl.pathname.startsWith('/Logout')) {
      return Response.redirect(new URL('/', request.url))
    }
   
    if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
      return Response.redirect(new URL('/login', request.url))
    }
  }
   
export const config = {
    matcher: ['/:path','/Logout','/Logout/:path'],
  }
 
export async function getSession() {
  const sessionId = cookies().get('sessionId')?.value
  return sessionId
}