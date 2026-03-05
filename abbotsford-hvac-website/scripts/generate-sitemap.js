
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://abbotsfordhvac.ca';
const DATA_PATH = path.join(__dirname, '../src/data/geo-service-data.json');
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

async function generateSitemap() {
    try {
        const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
        const lastmod = new Date().toISOString().split('T')[0];

        const staticPages = [
            { url: '/', priority: '1.0', freq: 'daily' },
            { url: '/about', priority: '0.8', freq: 'monthly' },
            { url: '/contact', priority: '0.9', freq: 'monthly' },
            { url: '/blog', priority: '0.8', freq: 'weekly' },
            { url: '/services/heating', priority: '0.8', freq: 'weekly' },
            { url: '/services/cooling', priority: '0.8', freq: 'weekly' },
            { url: '/services/ventilation', priority: '0.7', freq: 'weekly' },
            { url: '/services/air-quality', priority: '0.7', freq: 'weekly' },
            { url: '/services/plumbing', priority: '0.7', freq: 'weekly' },
            { url: '/services/maintenance', priority: '0.7', freq: 'weekly' },
            { url: '/services/commercial', priority: '0.7', freq: 'weekly' },
            { url: '/services/emergency', priority: '0.8', freq: 'weekly' },
        ];

        let urlSet = `<?xml version="1.0" encoding="UTF-8"?>\n`;
        urlSet += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

        // Static pages
        staticPages.forEach(page => {
            urlSet += `  <url>\n`;
            urlSet += `    <loc>${BASE_URL}${page.url}</loc>\n`;
            urlSet += `    <lastmod>${lastmod}</lastmod>\n`;
            urlSet += `    <changefreq>${page.freq}</changefreq>\n`;
            urlSet += `    <priority>${page.priority}</priority>\n`;
            urlSet += `  </url>\n`;
        });

        // Area Hub Pages
        data.areas.forEach(area => {
            urlSet += `  <url>\n`;
            urlSet += `    <loc>${BASE_URL}/service-areas/${area.slug}</loc>\n`;
            urlSet += `    <lastmod>${lastmod}</lastmod>\n`;
            urlSet += `    <changefreq>weekly</changefreq>\n`;
            urlSet += `    <priority>0.8</priority>\n`;
            urlSet += `  </url>\n`;
        });

        // Geo-Service Pages (only for combinations that have content)
        Object.keys(data.content).forEach(key => {
            const [service, area] = key.split('-');
            urlSet += `  <url>\n`;
            urlSet += `    <loc>${BASE_URL}/services/${service}/${area}</loc>\n`;
            urlSet += `    <lastmod>${lastmod}</lastmod>\n`;
            urlSet += `    <changefreq>weekly</changefreq>\n`;
            urlSet += `    <priority>0.7</priority>\n`;
            urlSet += `  </url>\n`;
        });

        urlSet += `</urlset>`;

        fs.writeFileSync(SITEMAP_PATH, urlSet);
        console.log(`Successfully generated sitemap at ${SITEMAP_PATH}`);
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

generateSitemap();
