import crypto from 'crypto';
import { cookies } from 'next/headers';

export const ADMIN_COOKIE = 'ahvac_admin';
const SESSION_TTL_MS = 1000 * 60 * 60 * 8; // 8 hours

function getSecret(): string {
    const secret = process.env.ADMIN_SESSION_SECRET;
    if (!secret || secret.length < 16) {
        throw new Error('ADMIN_SESSION_SECRET env var must be set (min 16 chars)');
    }
    return secret;
}

export function getAdminPassword(): string {
    const pw = process.env.ADMIN_PASSWORD;
    if (!pw) {
        throw new Error('ADMIN_PASSWORD env var must be set');
    }
    return pw;
}

function sign(payload: string): string {
    return crypto.createHmac('sha256', getSecret()).update(payload).digest('base64url');
}

export function createSessionToken(): string {
    const payload = JSON.stringify({ exp: Date.now() + SESSION_TTL_MS });
    const encoded = Buffer.from(payload).toString('base64url');
    return `${encoded}.${sign(encoded)}`;
}

export function verifySessionToken(token: string | undefined): boolean {
    if (!token) return false;
    const [encoded, mac] = token.split('.');
    if (!encoded || !mac) return false;
    let expected: string;
    try {
        expected = sign(encoded);
    } catch {
        return false;
    }
    const a = Buffer.from(mac);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;
    try {
        const { exp } = JSON.parse(Buffer.from(encoded, 'base64url').toString());
        return typeof exp === 'number' && exp > Date.now();
    } catch {
        return false;
    }
}

export function isAuthenticatedRequest(): boolean {
    const token = cookies().get(ADMIN_COOKIE)?.value;
    return verifySessionToken(token);
}
