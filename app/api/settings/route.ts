import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const settingsFilePath = path.join(process.cwd(), 'lib/data/settings.json');

export async function GET() {
    try {
        if (!fs.existsSync(settingsFilePath)) {
            return NextResponse.json({ phoneNumber: '123-456-7890', showTeamSection: false, teamMembers: [] });
        }
        const data = fs.readFileSync(settingsFilePath, 'utf8');
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        console.error('Error reading settings:', error);
        return NextResponse.json({ error: 'Failed to read settings' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        let currentSettings = { phoneNumber: '123-456-7890', showTeamSection: false, teamMembers: [] };
        if (fs.existsSync(settingsFilePath)) {
            currentSettings = JSON.parse(fs.readFileSync(settingsFilePath, 'utf8'));
        }

        const updatedSettings = { ...currentSettings, ...body };
        fs.writeFileSync(settingsFilePath, JSON.stringify(updatedSettings, null, 2), 'utf8');

        return NextResponse.json(updatedSettings);
    } catch (error) {
        console.error('Error saving settings:', error);
        return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 });
    }
}
