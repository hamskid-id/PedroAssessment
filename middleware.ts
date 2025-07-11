import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  //Navigate to dashboard page when home page url is accessed
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/d', request.url))
  }

  return NextResponse.next()
}

function isProtectedRoute(pathname: string) {
  const protectedRoutes = ['/d']
  return protectedRoutes.some((route) => pathname.startsWith(route))
}

// Configure which routes the middleware should run on
export const config = {
  matcher: ['/', '/d/:path*'],
}
