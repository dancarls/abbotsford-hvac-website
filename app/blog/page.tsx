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
      id: '1',
      title: 'How to Prepare Your HVAC System for Winter in Abbotsford',
      excerpt: 'Essential maintenance tips to ensure your heating system runs efficiently during Fraser Valley\'s cold months.',
      content: 'Full article content here...',
      author: 'Mike Thompson',
      date: '2024-01-15',
      category: 'Maintenance',
      readTime: '5 min read',
      image: 'https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20performing%20winter%20maintenance%20on%20residential%20furnace%20system%20in%20Abbotsford%20home%2C%20checking%20filters%20and%20equipment%2C%20cold%20weather%20preparation&width=800&height=400&seq=blog-1&orientation=landscape',
      slug: 'prepare-hvac-system-winter-abbotsford'
    },
    {
      id: '2',
      title: 'Signs Your Air Conditioner Needs Repair Before Summer',
      excerpt: 'Don\'t wait for the hottest day of the year to discover your AC isn\'t working. Watch for these warning signs.',
      content: 'Full article content here...',
      author: 'Sarah Chen',
      date: '2024-01-10',
      category: 'Cooling',
      readTime: '4 min read',
      image: 'https://readdy.ai/api/search-image?query=Air%20conditioning%20unit%20showing%20signs%20of%20wear%20and%20repair%20needs%2C%20residential%20exterior%20AC%20unit%20with%20visible%20issues%2C%20professional%20diagnostic%20assessment&width=800&height=400&seq=blog-2&orientation=landscape',
      slug: 'air-conditioner-repair-signs-summer'
    },
    {
      id: '3',
      title: 'Energy-Efficient HVAC Upgrades That Save Money',
      excerpt: 'Discover which HVAC improvements offer the best return on investment for Abbotsford homeowners.',
      content: 'Full article content here...',
      author: 'David Kim',
      date: '2024-01-08',
      category: 'Energy Efficiency',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Modern%20energy-efficient%20HVAC%20system%20installation%20in%20contemporary%20home%2C%20smart%20thermostat%20and%20high-efficiency%20equipment%2C%20cost%20savings%20visualization&width=800&height=400&seq=blog-3&orientation=landscape',
      slug: 'energy-efficient-hvac-upgrades-save-money'
    },
    {
      id: '4',
      title: 'Indoor Air Quality Solutions for Fraser Valley Allergies',
      excerpt: 'Combat seasonal allergies and improve your home\'s air quality with these professional HVAC solutions.',
      content: 'Full article content here...',
      author: 'Sarah Chen',
      date: '2024-01-05',
      category: 'Air Quality',
      readTime: '5 min read',
      image: 'https://readdy.ai/api/search-image?query=Indoor%20air%20quality%20improvement%20system%20with%20air%20purifiers%20and%20filtration%20equipment%20in%20modern%20home%20interior%2C%20clean%20fresh%20air%20visualization&width=800&height=400&seq=blog-4&orientation=landscape',
      slug: 'indoor-air-quality-fraser-valley-allergies'
    },
    {
      id: '5',
      title: 'Heat Pump vs Furnace: Which is Right for Your Home?',
      excerpt: 'Compare the pros and cons of heat pumps and furnaces for Abbotsford\'s climate and your home\'s needs.',
      content: 'Full article content here...',
      author: 'Mike Thompson',
      date: '2024-01-02',
      category: 'Heating',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=Side%20by%20side%20comparison%20of%20modern%20heat%20pump%20and%20furnace%20systems%2C%20residential%20heating%20equipment%20installation%2C%20professional%20comparison%20visualization&width=800&height=400&seq=blog-5&orientation=landscape',
      slug: 'heat-pump-vs-furnace-abbotsford-homes'
    },
    {
      id: '6',
      title: 'Commercial HVAC Maintenance Best Practices',
      excerpt: 'Keep your business comfortable and energy-efficient with proper commercial HVAC maintenance schedules.',
      content: 'Full article content here...',
      author: 'David Kim',
      date: '2023-12-28',
      category: 'Commercial',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=Commercial%20HVAC%20system%20maintenance%20in%20office%20building%2C%20large%20scale%20heating%20and%20cooling%20equipment%2C%20professional%20technicians%20working&width=800&height=400&seq=blog-6&orientation=landscape',
      slug: 'commercial-hvac-maintenance-best-practices'
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
