import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { ADMIN_COOKIE, createSessionToken, getAdminPassword } from '../../../../lib/adminAuth';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
    let password = '';
    try {
        const body = await request.json();
        password = typeof body?.password === 'string' ? body.password : '';
    } catch {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    let expected: string;
    try {
        expected = getAdminPassword();
    } catch (e: any) {
        return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
    }

    const a = Buffer.from(password);
    const b = Buffer.from(expected);
    const ok = a.length === b.length && crypto.timingSafeEqual(a, b);
    if (!ok) {
        return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    let token: string;
    try {
        token = createSessionToken();
    } catch {
        return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set(ADMIN_COOKIE, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 8,
    });
    return res;
}

export async function DELETE() {
    const res = NextResponse.json({ ok: true });
    res.cookies.set(ADMIN_COOKIE, '', { httpOnly: true, path: '/', maxAge: 0 });
    return res;
}
