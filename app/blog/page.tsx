import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import BlogList from '../../components/feature/BlogList';

export const metadata: Metadata = {
  title: 'HVAC Tips & Industry Insights | Abbotsford HVAC Blog',
  description: 'Expert HVAC advice, maintenance tips, and industry insights for Abbotsford homeowners. Stay informed about heating, cooling, and air quality.',
  openGraph: {
    title: 'HVAC Tips & Industry Insights | Abbotsford HVAC Blog',
    description: 'Expert HVAC advice, maintenance tips, and industry insights for Abbotsford homeowners. Stay informed about heating, cooling, and air quality.',
    images: ['https://abbotsfordhvac.ca/og-blog.jpg']
  }
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'new-1',
      title: 'AC Maintenance in Abbotsford: What\'s Included in a Summer Tune-Up (and Why It Saves You Money)',
      excerpt: 'Discover what a proper AC tune-up includes, how it lowers your power bills, and why Abbotsford homeowners should book before the next heat wave.',
      content: '',
      author: 'AbbotsfordHVAC.ca',
      date: '2025-06-01',
      category: 'AC Maintenance',
      readTime: '7 min read',
      image: '/images/ac-maintenance-abbotsford-hero.png',
      slug: 'ac-maintenance-abbotsford-summer-tune-up'
    },
    {
      id: 'new-2',
      title: 'AC Not Cooling in Abbotsford? 7 Quick Checks Before You Call for AC Repair',
      excerpt: 'Run these 7 safe checks before calling a tech, then learn the most common repair causes, what it costs, and when to replace instead of repair.',
      content: '',
      author: 'AbbotsfordHVAC.ca',
      date: '2025-06-01',
      category: 'AC Repair',
      readTime: '8 min read',
      image: '/images/ac-not-cooling-abbotsford-hero.png',
      slug: 'ac-not-cooling-abbotsford-repair'
    },
    {
      id: 'new-3',
      title: 'Ductless Mini-Split Cooling in Abbotsford: Best Way to Cool Hot Rooms, Suites & Additions',
      excerpt: 'One hot room. A basement suite with no ductwork. Learn when a mini-split beats extending ductwork, what installation costs, and how BC rebates can offset $1,000–$6,000.',
      content: '',
      author: 'AbbotsfordHVAC.ca',
      date: '2025-06-01',
      category: 'Mini-Split Installation',
      readTime: '9 min read',
      image: '/images/ductless-mini-split-abbotsford-hero.png',
      slug: 'ductless-mini-split-cooling-abbotsford'
    },
    {
      id: '4',
      title: 'Indoor Air Quality Solutions for Fraser Valley Allergies',
      excerpt: 'The valley\'s agricultural pollen and wildfire smoke make Fraser Valley homes uniquely challenging for allergy sufferers. Here\'s which HVAC upgrades — HEPA filters, ERVs, UV purifiers — actually move the needle.',
      content: '',
      author: 'AbbotsfordHVAC.ca',
      date: '2025-07-01',
      category: 'Air Quality',
      readTime: '8 min read',
      image: '/images/indoor-air-quality-abbotsford-hero.png',
      slug: 'indoor-air-quality-fraser-valley-allergies'
    },
    {
      id: '5',
      title: 'Heat Pump vs Furnace: Which Is Right for Your Abbotsford Home?',
      excerpt: 'Both systems heat your home. Only one also cools it, qualifies for up to $6,000 in BC rebates, and cuts your carbon footprint. Here\'s the honest comparison for Abbotsford\'s climate.',
      content: '',
      author: 'AbbotsfordHVAC.ca',
      date: '2025-07-01',
      category: 'Heating',
      readTime: '9 min read',
      image: '/images/heat-pump-vs-furnace-abbotsford-hero.png',
      slug: 'heat-pump-vs-furnace-abbotsford'
    },
    {
      id: '6',
      title: 'Home HVAC Maintenance Best Practices for Abbotsford Homeowners',
      excerpt: 'The seasonal maintenance checklist that keeps your furnace, AC, or heat pump running efficiently — and prevents the expensive emergency breakdowns that happen to neglected systems.',
      content: '',
      author: 'AbbotsfordHVAC.ca',
      date: '2025-07-01',
      category: 'HVAC Maintenance',
      readTime: '8 min read',
      image: '/images/hvac-maintenance-abbotsford-hero.png',
      slug: 'home-hvac-maintenance-best-practices-abbotsford'
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Abbotsford HVAC Tips & Insights",
    "description": "Expert advice, maintenance tips, and industry insights for home HVAC systems.",
    "publisher": {
      "@type": "LocalBusiness",
      "@id": "https://abbotsfordhvac.ca"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://abbotsfordhvac.ca/blog/${post.slug}`,
      "image": post.image
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Header />

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-3" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-blue-600 hover:text-blue-700 cursor-pointer">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900">Blog</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            HVAC Tips & Insights Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, maintenance tips, and industry insights to help you make informed decisions about your home's heating, cooling, and air quality systems.
          </p>
        </div>
      </section>

      {/* Blog Posts Interactive List */}
      <BlogList initialPosts={blogPosts} />

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with HVAC Tips
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get expert HVAC advice, maintenance reminders, and exclusive offers delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-green-500 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
