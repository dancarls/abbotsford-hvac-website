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
];

for (const file of files) {
    const filePath = path.join(root, file);
    if (!fs.existsSync(filePath)) {
        console.log(`SKIP: ${file}`);
        continue;
    }
    let content = fs.readFileSync(filePath, 'utf8');

    if (content.includes("getSettings()") && !content.includes("import { getSettings }")) {
        // Insert import after the last existing import line
        content = content.replace(
            /^(import .+;\n)(?!import)/m,
            `$1import { getSettings } from '@/lib/getSettings';\n`
        );
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`FIXED import: ${file}`);
    } else {
        console.log(`OK (no change needed): ${file}`);
    }
}
console.log('\nDone!');
