
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
}

export default function SEO({ title, description, canonical, ogImage, ogType = 'website' }: SEOProps) {
    const location = useLocation();

    useEffect(() => {
        // Update Title
        const fullTitle = `${title} | Abbotsford HVAC`;
        document.title = fullTitle;

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }

        // Update OG Title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', fullTitle);
        }

        // Update OG Description
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.setAttribute('content', description);
        }

        // Update OG Image if provided
        if (ogImage) {
            const ogImg = document.querySelector('meta[property="og:image"]');
            if (ogImg) {
                ogImg.setAttribute('content', ogImage);
            }
        }

        // Update OG URL
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', window.location.origin + location.pathname);
        }

        // Update Canonical
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            canonicalLink.setAttribute('href', canonical || window.location.origin + location.pathname);
        }

    }, [title, description, canonical, ogImage, location]);

    return null; // This component doesn't render anything
}
