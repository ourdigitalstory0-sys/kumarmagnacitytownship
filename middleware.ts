import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ipMap = new Map<string, { count: number, timestamp: number }>();
const RATE_LIMIT = 15; 
const WINDOW_MS = 60 * 1000; 

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // 1. Edge Geolocation (NRI Personalization)
  const geo = request.headers.get('x-vercel-ip-country') || 'UNKNOWN';
  response.headers.set('x-user-geo', geo);

  // 2. Protect API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    
    // Strict Origin / Referer Validation
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const isLocal = origin?.includes('localhost') || origin?.includes('127.0.0.1');
    const isAllowedDomain = origin?.includes('kumarmagnacity') || referer?.includes('kumarmagnacity');

    if (request.method === 'POST') {
      if (!isLocal && !isAllowedDomain) {
        return new NextResponse(
          JSON.stringify({ error: 'Forbidden: Invalid Origin' }),
          { status: 403, headers: { 'content-type': 'application/json' } }
        );
      }
    }

    // IP Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1';
    const now = Date.now();
    
    const record = ipMap.get(ip);
    if (!record) {
      ipMap.set(ip, { count: 1, timestamp: now });
    } else {
      if (now - record.timestamp > WINDOW_MS) {
        ipMap.set(ip, { count: 1, timestamp: now });
      } else {
        record.count++;
        if (record.count > RATE_LIMIT) {
          return new NextResponse(
            JSON.stringify({ error: 'Too Many Requests' }),
            { status: 429, headers: { 'content-type': 'application/json' } }
          );
        }
      }
    }
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|assets|sw.js|workbox-.*).*)',
  ],
};
