"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    schema?: any;
}

export default function SEO({ title, description, canonical, ogImage, ogType = 'website', schema }: SEOProps) {
    const pathname = usePathname();
    const siteUrl = 'https://abbotsfordhvac.ca';

    useEffect(() => {
        const fullTitle = `${title} | Abbotsford HVAC`;
        const fullUrl = canonical || siteUrl + pathname;

        // Update Title
        document.title = fullTitle;

        // Update Standard Meta Tags
        const updateMeta = (name: string, content: string, attr: string = 'name') => {
            let element = document.querySelector(`meta[${attr}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        updateMeta('description', description);
        updateMeta('og:title', fullTitle, 'property');
        updateMeta('og:description', description, 'property');
        updateMeta('og:type', ogType, 'property');
        updateMeta('og:url', fullUrl, 'property');

        if (ogImage) {
            updateMeta('og:image', ogImage, 'property');
            updateMeta('twitter:image', ogImage);
        }

        updateMeta('twitter:card', 'summary_large_image');
        updateMeta('twitter:title', fullTitle);
        updateMeta('twitter:description', description);

        // Update Canonical
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', fullUrl);

        // Inject Schema
        if (schema) {
            let scriptId = 'json-ld-schema';
            let script = document.getElementById(scriptId);
            if (!script) {
                script = document.createElement('script');
                script.id = scriptId;
                script.setAttribute('type', 'application/ld+json');
                document.head.appendChild(script);
            }

            // Handle array or single object
            const schemaData = Array.isArray(schema)
                ? { "@context": "https://schema.org", "@graph": schema }
                : schema;

            script.innerHTML = JSON.stringify(schemaData);
        }

    }, [title, description, canonical, ogImage, ogType, schema, location]);

    return null;
}
