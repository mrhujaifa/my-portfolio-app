import { NextResponse } from "next/server";

export function middleware(request) {
  // এখানে কোনো block নেই, সব রিকোয়েস্ট চলবে
  return NextResponse.next();
}

export const config = {
  matcher: [
    // middleware চলবে সব path এ _next/static, robots.txt, sitemap.xml বাদ দিয়ে
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api).*)',
  ],
};
