import { NextRequest, NextResponse } from 'next/server';
import { resolveBrand } from '@kps/config';

export async function GET(request: NextRequest) {
  const host = request.headers.get('host');
  const brand = resolveBrand(host || undefined);
  
  return NextResponse.json({
    ok: true,
    brand: brand.key,
    domain: brand.domain,
    name: brand.name,
    timestamp: new Date().toISOString()
  });
}