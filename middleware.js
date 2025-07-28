import { NextResponse } from 'next/server';

/**
 * Middleware to allow Googlebot and avoid interfering with sitemap.xml and robots.txt
 */
export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  // ✅ Allow Googlebot
  if (userAgent.includes('Googlebot')) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

// ✅ Exclude sitemap.xml, robots.txt, favicon.ico, _next, static assets etc.
export const config = {
  matcher: ['/((?!sitemap\\.xml|robots\\.txt|favicon\\.ico|_next|static|images).*)'],
};
