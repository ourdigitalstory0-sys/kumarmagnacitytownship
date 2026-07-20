import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Lightweight Edge-compatible Rate Limiter
// Note: In a true multi-region serverless environment, this Map is per-isolate.
// For absolute strictness, Vercel KV / Redis is recommended, but this provides excellent baseline bot mitigation.
const ipMap = new Map<string, { count: number, timestamp: number }>();
const RATE_LIMIT = 15; // Max 15 requests
const WINDOW_MS = 60 * 1000; // per minute

export function middleware(request: NextRequest) {
  // Only protect API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    
    // 1. Strict Origin / Referer Validation (CORS mitigation)
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const isLocal = origin?.includes('localhost') || origin?.includes('127.0.0.1');
    const isAllowedDomain = origin?.includes('kumarmagnacity') || referer?.includes('kumarmagnacity');

    // If it's a POST request to our API, require it to come from our frontend
    if (request.method === 'POST') {
      if (!isLocal && !isAllowedDomain) {
        return new NextResponse(
          JSON.stringify({ error: 'Forbidden: Invalid Origin' }),
          { status: 403, headers: { 'content-type': 'application/json' } }
        );
      }
    }

    // 2. IP Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || request.ip || '127.0.0.1';
    const now = Date.now();
    
    const record = ipMap.get(ip);
    if (!record) {
      ipMap.set(ip, { count: 1, timestamp: now });
    } else {
      if (now - record.timestamp > WINDOW_MS) {
        // Reset window
        ipMap.set(ip, { count: 1, timestamp: now });
      } else {
        record.count++;
        if (record.count > RATE_LIMIT) {
          return new NextResponse(
            JSON.stringify({ error: 'Too Many Requests', retryAfter: WINDOW_MS / 1000 }),
            { 
              status: 429, 
              headers: { 
                'content-type': 'application/json',
                'Retry-After': String(WINDOW_MS / 1000)
              } 
            }
          );
        }
      }
    }
  }

  return NextResponse.next();
}

// Configure middleware to only run on API routes to avoid overhead on static pages
export const config = {
  matcher: '/api/:path*',
};
