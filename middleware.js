import { NextResponse } from 'next/server';

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  // ✅ Allow Googlebot
  if (userAgent.includes('Googlebot')) {
    return NextResponse.next();
  }

  // 🔐 Example block for other bots or conditions
  // return new Response("Forbidden", { status: 403 });

  return NextResponse.next();
}
