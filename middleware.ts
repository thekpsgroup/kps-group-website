import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  try {
    const origin = request.nextUrl.origin;
    
    const response = NextResponse.next();

    // Set brand headers for Modern Brands
    response.headers.set('x-brand', 'modern-brands');
    response.headers.set('x-brand-domain', 'modernbrands.co');
    response.headers.set('x-brand-name', 'Modern Brands');
    response.headers.set('x-url-origin', origin);

    // Add security headers
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');

    return response;
  } catch (error) {
    console.error('Middleware error:', error);
    
    // Fallback response with Modern Brands brand
    const response = NextResponse.next();
    response.headers.set('x-brand', 'modern-brands');
    response.headers.set('x-brand-domain', 'modernbrands.co');
    response.headers.set('x-brand-name', 'Modern Brands');
    
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};