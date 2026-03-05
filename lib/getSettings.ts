import fs from 'fs';
import path from 'path';

export function getSettings() {
    try {
        const settingsPath = path.join(process.cwd(), 'lib/data/settings.json');
        if (fs.existsSync(settingsPath)) {
            return JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
        }
    } catch (e) {
        console.error('Failed to load settings', e);
    }
    return { phoneNumber: "123-456-7890", showTeamSection: false, teamMembers: [] };
}
