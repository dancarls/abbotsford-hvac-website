import { MetadataRoute } from 'next';
import geoData from '../lib/data/geo-service-data.json';

const BASE_URL = 'https://abbotsfordhvac.ca';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
        { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
        { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ];

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

    const geoServicePages: MetadataRoute.Sitemap = geoData.areas.flatMap((area) =>
        geoData.services.map((service) => ({
            url: `${BASE_URL}/locations/${area.slug}/${service.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }))
    );

    return [...staticPages, ...servicePages, ...locationPages, ...geoServicePages];
}
