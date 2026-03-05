import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const files = [
    'app/services/ventilation/page.tsx',
    'app/services/plumbing/page.tsx',
    'app/services/heating/page.tsx',
    'app/services/maintenance/page.tsx',
    'app/services/emergency/page.tsx',
    'app/services/commercial/page.tsx',
    'app/services/air-quality/page.tsx',
    'app/services/cooling/page.tsx',
    'app/locations/[location]/[service]/page.tsx',
    'app/about/page.tsx',
];

for (const file of files) {
    const filePath = path.join(root, file);
    if (!fs.existsSync(filePath)) {
        console.log(`SKIP (not found): ${file}`);
        continue;
    }
    let content = fs.readFileSync(filePath, 'utf8');

    // Add getSettings import if missing (after last import line)
    if (!content.includes('getSettings')) {
        content = content.replace(/(^import .+;\n)(?!import)/m, `$1import { getSettings } from '@/lib/getSettings';\n`);
    }

    // Add settings const if missing (right after export default function ... {)
    if (!content.includes('const settings = getSettings()')) {
        content = content.replace(/(export default function \w+\([^)]*\) \{)/g, `$1\n  const settings = getSettings();`);
    }

    // Replace href tel: for phone
    content = content.replace(/href="tel:123-456-7890"/g, `href={\`tel:\${settings.phoneNumber}\`}`);
    // Replace inline display of phone number
    content = content.replace(/\(123\) 456-7890/g, `{settings.phoneNumber}`);
    content = content.replace(/Call Now \{settings\.phoneNumber\}/g, `Call Now {settings.phoneNumber}`);

    // Also update export const dynamic = force-dynamic for pages that use this
    if (!content.includes("export const dynamic")) {
        content = content.replace(/(export const metadata)/, `export const dynamic = 'force-dynamic';\n\n$1`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`UPDATED: ${file}`);
}
console.log('\nDone!');
