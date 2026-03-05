import fs from 'fs';
import path from 'path';

const servicesDir = "C:\\Users\\danca\\Projects\\app\\services";
const services = fs.readdirSync(servicesDir).filter(f => fs.statSync(path.join(servicesDir, f)).isDirectory());

services.forEach(service => {
    const pagePath = path.join(servicesDir, service, 'page.tsx');
    if (!fs.existsSync(pagePath)) return;

    let content = fs.readFileSync(pagePath, 'utf8');

    // Skip if already refactored
    if (content.includes('export const metadata: Metadata = {') || !content.includes('<SEO')) return;

    // 1. Add Metadata import and remove SEO import
    content = content.replace(/import SEO from '.*?';/, "import { Metadata } from 'next';\nimport Link from 'next/link';");

    // 2. Extract SEO title, description, schema
    const titleMatch = content.match(/title="([^"]+)"/);
    const descMatch = content.match(/description="([^"]+)"/);

    const title = titleMatch ? titleMatch[1] : `${service.charAt(0).toUpperCase() + service.slice(1)} Services`;
    const description = descMatch ? descMatch[1] : `Professional ${service} services in Abbotsford. Experience expert HVAC solutions today.`;

    // Provide Metadata export at the top (after imports)
    const metadataBlock = `
export const metadata: Metadata = {
  title: "${title} | Abbotsford HVAC",
  description: "${description}",
  openGraph: {
    title: "${title} | Abbotsford HVAC",
    description: "${description}",
    images: ['https://abbotsfordhvac.ca/og-${service}.jpg']
  }
};
`;

    // Insert metadata export before export default function
    content = content.replace(/(export default function)/, `${metadataBlock}\n$1`);

    // 3. Extract schema from SEO tag if present
    let schemaBlock = "";
    let schemaContent = "{}";
    const schemaRegex = /schema=\{\{([\s\S]*?)\}\}\n\s*\/>/;
    const schemaMatch = content.match(schemaRegex);

    if (schemaMatch) {
        schemaContent = `{${schemaMatch[1]}}`;
        // Remove the entire SEO tag
        content = content.replace(/<SEO[\s\S]*?\/>/, `{/* SEO tag replaced */}`);
    } else {
        // Just remove the SEO tag
        content = content.replace(/<SEO[\s\S]*?\/>/, '{/* SEO tag replaced */}');
    }

    // Inject script for schema right after <div className="min-h-screen bg-white">
    content = content.replace(
        /(<div className="min-h-screen bg-white">)/,
        `$1\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(${schemaContent}) }} />`
    );

    // 4. Replace onClick scrollIntoView with anchor tag
    content = content.replace(
        /<button\s+onClick=\{\(\) => document\.getElementById\('([^']+)'\)\?\.scrollIntoView\(\{ behavior: 'smooth' \}\)\}\s+className="([^"]+)"\s*>([\s\S]*?)<\/button>/g,
        '<a href="#$1" className="$2">$3</a>'
    );

    // 5. Replace onClick window.location.href telephone links with anchor tag
    content = content.replace(
        /<button\s+onClick=\{\(\) => window\.location\.href\s*=\s*'tel:([^']+)'\}\s+className="([^"]+)"\s*>([\s\S]*?)<\/button>/g,
        '<a href="tel:$1" className="$2">$3</a>'
    );

    // Replace onClick window.REACT_APP_NAVIGATE with Link
    content = content.replace(
        /<button\s+onClick=\{\(\) => window\.REACT_APP_NAVIGATE\?\.\('([^']+)'\)\}\s+className="([^"]+)"\s*>([\s\S]*?)<\/button>/g,
        '<Link href="$1" className="$2">$3</Link>'
    );

    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`Updated ${service}/page.tsx`);
});
