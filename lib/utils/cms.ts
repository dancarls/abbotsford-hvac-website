
// Utility functions for loading CMS content
import { useState, useEffect } from 'react';

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  body: string;
  seoTitle?: string;
  seoDescription?: string;
  published: boolean;
}

export interface ServicePage {
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  heroImage: string;
  body: string;
  subServices: string[];
  startingPrice?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  serviceType: string;
  featured: boolean;
}

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  photo: string;
  experience: number;
  certifications: string[];
  specialties: string[];
}

export interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  businessName: string;
  phone: string;
  email: string;
  address: string;
  businessHours: {
    weekdays: string;
    weekends: string;
    emergency: string;
  };
  serviceAreas: string[];
  social: {
    facebook?: string;
    instagram?: string;
    google?: string;
    linkedin?: string;
  };
}

// Hook to load blog posts
export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would load from the CMS
    // For now, return the existing mock data
    const mockPosts: BlogPost[] = [
      {
        title: 'Preparing Your HVAC System for Abbotsford\'s Winters',
        slug: 'preparing-hvac-abbotsford-winters',
        date: '2024-01-15',
        author: 'Robert Wilson',
        category: 'Winter Maintenance',
        readTime: '6 min read',
        excerpt: 'Essential winterization tips to ensure your heating system performs efficiently during BC\'s cold temperatures.',
        image: 'https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20performing%20winter%20maintenance%20on%20residential%20furnace%20system%20in%20Abbotsford%20BC%20home%2C%20winter%20weather%20preparation%2C%20high-efficiency%20heating%20equipment&width=600&height=300&seq=abbotsford-blog-1&orientation=landscape',
        body: '# Preparing Your HVAC System for Abbotsford\'s Winters\n\nAbbotsford winters can be unpredictable...',
        published: true
      },
      {
        title: 'Best Energy-Efficient Heating Solutions for BC Homes',
        slug: 'best-energy-efficient-heating-bc-homes',
        date: '2024-01-10',
        author: 'Amanda Martinez',
        category: 'Energy Efficiency',
        readTime: '5 min read',
        excerpt: 'Discover the most cost-effective and environmentally friendly heating options for Abbotsford\'s climate and energy costs.',
        image: 'https://readdy.ai/api/search-image?query=Modern%20energy-efficient%20furnace%20and%20heat%20pump%20system%20in%20Abbotsford%20home%2C%20smart%20thermostat%2C%20high-efficiency%20HVAC%20equipment%2C%20BC%20energy%20savings%2C%20winter%20heating%20solutions&width=600&height=300&seq=abbotsford-blog-2&orientation=landscape',
        body: '# Best Energy-Efficient Heating Solutions for BC Homes\n\nWith BC\'s winters...',
        published: true
      }
    ];

    setPosts(mockPosts);
    setLoading(false);
  }, []);

  return { posts, loading };
}

// Hook to load site settings
export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would load from the CMS
    const mockSettings: SiteSettings = {
      siteTitle: 'Abbotsford HVAC - Expert Heating, Cooling & Air Quality Services',
      siteDescription: 'Professional HVAC services in Abbotsford, BC. Expert heating, cooling, ventilation & air quality solutions. 24/7 emergency service.',
      businessName: 'Abbotsford HVAC',
      phone: '(604) 555-0123',
      email: 'info@abbotsfordhvac.ca',
      address: '123 Main Street, Abbotsford, BC V2S 0A3',
      businessHours: {
        weekdays: 'Monday - Friday: 7:00 AM - 7:00 PM',
        weekends: 'Saturday - Sunday: 8:00 AM - 5:00 PM',
        emergency: '24/7 Emergency Service Available'
      },
      serviceAreas: ['Abbotsford', 'Chilliwack', 'Mission', 'Langley', 'Aldergrove'],
      social: {
        facebook: 'https://www.facebook.com/abbotsfordhvac',
        instagram: 'https://www.instagram.com/abbotsfordhvac'
      }
    };

    setSettings(mockSettings);
    setLoading(false);
  }, []);

  return { settings, loading };
}
