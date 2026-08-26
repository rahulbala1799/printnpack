import { NextResponse } from 'next/server';

const CANONICAL_HOST = 'www.printnpack.ie';

/** Force all traffic to https://www.printnpack.ie (single canonical origin for SEO). */
export function middleware(request) {
  const hostname = (request.nextUrl.hostname || '').toLowerCase();

  if (!hostname || hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1') {
    return NextResponse.next();
  }

  if (hostname !== CANONICAL_HOST) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.hostname = CANONICAL_HOST;
    url.port = '';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
