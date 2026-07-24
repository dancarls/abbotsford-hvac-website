import { NextResponse } from 'next/server';
import { isAuthenticatedRequest } from '../../../../lib/adminAuth';

export const runtime = 'nodejs';

export async function GET() {
    return NextResponse.json({ authenticated: isAuthenticatedRequest() });
}
