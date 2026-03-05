
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://abbotsfordhvac.ca';
const DATA_PATH = path.join(__dirname, 'src/data/geo-service-data.json');
const SITEMAP_PATH = path.join(__dirname, 'public/sitemap.xml');

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

        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

        const addUrl = (url, priority, freq) => {
            xml += '  <url>\n';
            xml += `    <loc>${BASE_URL}${url}</loc>\n`;
            xml += `    <lastmod>${lastmod}</lastmod>\n`;
            xml += `    <changefreq>${freq}</changefreq>\n`;
            xml += `    <priority>${priority}</priority>\n`;
            xml += '  </url>\n';
        };

        // Static Pages
        staticPages.forEach(p => addUrl(p.url, p.priority, p.freq));

        // Service Area Hubs (21)
        data.areas.forEach(area => {
            addUrl(`/service-areas/${area.slug}`, '0.8', 'weekly');
        });

        // Geo-Service Pages (168 combinations)
        data.services.forEach(service => {
            data.areas.forEach(area => {
                addUrl(`/services/${service.slug}/${area.slug}`, '0.7', 'weekly');
            });
        });

        xml += '</urlset>';

        fs.writeFileSync(SITEMAP_PATH, xml);
        console.log(`Successfully generated sitemap with coverage for all 189+ URLs at ${SITEMAP_PATH}`);
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

generateSitemap();
