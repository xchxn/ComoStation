import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('id');

    console.log(currentUser, "currentUserlogout redirection");
    return NextResponse.redirect(new URL('/', request.url))
  }
   
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  }