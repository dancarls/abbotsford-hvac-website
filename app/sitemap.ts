import { MetadataRoute } from 'next';
import geoData from '../lib/data/geo-service-data.json';

const BASE_URL = 'https://www.abbotsfordhvac.ca';

const blogSlugs = [
    'ac-maintenance-abbotsford-summer-tune-up',
    'ac-not-cooling-abbotsford-repair',
    'bc-heat-pump-rebates-abbotsford',
    'ductless-mini-split-cooling-abbotsford',
    'heat-pump-vs-furnace-abbotsford',
    'home-hvac-maintenance-best-practices-abbotsford',
    'indoor-air-quality-fraser-valley-allergies',
];

// High-priority geo+service landing pages (money keywords)
const geoServiceLandingPages = [
    'ac-repair-abbotsford',
    'furnace-repair-abbotsford',
    'heat-pump-abbotsford',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
        { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
        { url: `${BASE_URL}/service-areas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ];

    const geoServiceLandingPageEntries: MetadataRoute.Sitemap = geoServiceLandingPages.map((slug) => ({
        url: `${BASE_URL}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.95,
    }));

    const servicePages: MetadataRoute.Sitemap = geoData.services.map((service) => ({
        url: `${BASE_URL}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
    }));

    const locationPages: MetadataRoute.Sitemap = geoData.areas.map((area) => ({
        url: `${BASE_URL}/locations/${area.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // Note: /locations/[area]/[service] combo pages are intentionally excluded
    // from the sitemap and set to noindex — they were templated (find/replace on
    // area+service name) which triggers Google's Helpful Content Update signal,
    // and 165 of 168 were already stuck at "discovered but not indexed" per GSC.
    // Ranking weight consolidates on the 21 area pages + 8 service pages + 3 dedicated
    // /services/*-abbotsford money-keyword landing pages. Combo pages remain
    // reachable via direct link and internal navigation, but Google won't index them.

    const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [...staticPages, ...geoServiceLandingPageEntries, ...servicePages, ...locationPages, ...blogPages];
}
