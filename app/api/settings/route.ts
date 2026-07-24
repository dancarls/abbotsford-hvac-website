import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { isAuthenticatedRequest } from '../../../lib/adminAuth';

export const runtime = 'nodejs';

const settingsFilePath = path.join(process.cwd(), 'lib/data/settings.json');
const PUBLIC_KEYS = ['phoneNumber', 'phoneRaw', 'businessName', 'primaryCity', 'baseUrl', 'email', 'address', 'showTeamSection'];

function readSettings(): Record<string, any> {
    if (!fs.existsSync(settingsFilePath)) {
        return { phoneNumber: '(236) 477-3002', phoneRaw: '2364773002', showTeamSection: false, teamMembers: [] };
    }
    return JSON.parse(fs.readFileSync(settingsFilePath, 'utf8'));
}

export async function GET() {
    try {
        const data = readSettings();
        if (isAuthenticatedRequest()) {
            return NextResponse.json(data);
        }
        // Public callers get non-sensitive keys only (no raw script blobs, etc.)
        const publicView: Record<string, any> = {};
        for (const k of PUBLIC_KEYS) publicView[k] = data[k];
        return NextResponse.json(publicView);
    } catch (error) {
        console.error('Error reading settings:', error);
        return NextResponse.json({ error: 'Failed to read settings' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    if (!isAuthenticatedRequest()) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    try {
        const body = await request.json();
        const current = readSettings();
        const updated = { ...current, ...body };
        fs.writeFileSync(settingsFilePath, JSON.stringify(updated, null, 2), 'utf8');
        return NextResponse.json(updated);
    } catch (error) {
        console.error('Error saving settings:', error);
        return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 });
    }
}
