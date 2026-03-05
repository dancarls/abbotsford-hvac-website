import fs from 'fs';
import path from 'path';

function fixFile(filePath, addUseClient = false) {
    let content = fs.readFileSync(filePath, 'utf8');

    if (addUseClient && !content.includes('"use client"')) {
        content = '"use client";\n' + content;
    }

    // Ensure Link is imported if we are going to use it
    if (!content.includes("import Link from 'next/link';")) {
        content = content.replace(/(import .*?;)/, "$1\nimport Link from 'next/link';");
    }

    // Replace onClick window.REACT_APP_NAVIGATE with Link
    content = content.replace(
        /<button\s+onClick=\{\(\) => window\.REACT_APP_NAVIGATE\?\.\('([^']+)'\)\}\s+className="([^"]+)"\s*(style=\{.*?\})?>([\s\S]*?)<\/button>/g,
        '<Link href="$1" className="$2" $3>$4</Link>'
    );

    // For the dropdown cases where onClick sets state AND navigates, we can't easily use Link 
    // without keeping the onClick. But Next.js Link accepts onClick!
    content = content.replace(
        /onClick=\{\(\) => \{\s*window\.REACT_APP_NAVIGATE\?\.\('([^']+)'\);\s*([^\}]+)\s*\}\}/g,
        'href="$1" onClick={() => { $2 }}'
    );
    // And replace those buttons with Link
    content = content.replace(
        /<button\s+key=\{([^}]+)\}\s+href="([^"]+)"\s+onClick=\{([^}]+)\}\s+className="([^"]+)"\s*>([\s\S]*?)<\/button>/g,
        '<Link key={$1} href="$2" onClick={$3} className="$4">$5</Link>'
    );
    content = content.replace(
        /<button\s+href="([^"]+)"\s+onClick=\{([^}]+)\}\s+className="([^"]+)"\s*>([\s\S]*?)<\/button>/g,
        '<Link href="$1" onClick={$2} className="$3">$4</Link>'
    );

    // Replace window.location.href = 'tel:...' with a tags
    content = content.replace(
        /<button\s+onClick=\{\(\) => window\.location\.href\s*=\s*'tel:([^']+)'\}([\s\S]*?)className="([^"]+)"\s*>([\s\S]*?)<\/button>/g,
        '<a href="tel:$1"$2className="$3">$4</a>'
    );

    // Ensure any lingering REACT_APP_NAVIGATE inside button onClick with other logic is replaced
    // wait we handled the block ones above.

    fs.writeFileSync(filePath, content, 'utf8');
}

fixFile("C:\\Users\\danca\\Projects\\components\\feature\\Header.tsx", true);
fixFile("C:\\Users\\danca\\Projects\\app\\admin\\page.tsx", true);
fixFile("C:\\Users\\danca\\Projects\\app\\privacy\\page.tsx", false);

console.log("Fixed files!");
