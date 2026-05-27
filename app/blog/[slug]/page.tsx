import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { getSettings } from '../../../lib/getSettings';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Post Not Found | Abbotsford HVAC Blog'
    };
  }

  return {
    title: `${post.title} | Abbotsford HVAC Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image]
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const settings = getSettings();
  const currentPost = blogPosts.find(post => post.slug === params.slug);
  const relatedPosts = blogPosts.filter(post => post.slug !== params.slug).slice(0, 3);

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer inline-block"
          >
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": currentPost.title,
    "description": currentPost.excerpt,
    "image": currentPost.image,
    "datePublished": currentPost.date,
    "author": {
      "@type": "Person",
      "name": currentPost.author
    },
    "publisher": {
      "@type": "LocalBusiness",
      "@id": "https://www.abbotsfordhvac.ca"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.abbotsfordhvac.ca/blog/${currentPost.slug}`
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.abbotsfordhvac.ca"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.abbotsfordhvac.ca/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": currentPost.title,
          "item": `https://www.abbotsfordhvac.ca/blog/${currentPost.slug}`
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Header />

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-3" aria-label="Breadcrumb">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-blue-600 hover:text-blue-700 cursor-pointer">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link href="/blog" className="text-blue-600 hover:text-blue-700 cursor-pointer">
                Blog
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900 truncate">{currentPost.title}</li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentPost.category}
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {currentPost.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="font-medium">{currentPost.author}</span>
            <span className="mx-3">•</span>
            <span>{new Date(currentPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="mx-3">•</span>
            <span>{currentPost.readTime}</span>
          </div>
          <img
            src={currentPost.image}
            alt={currentPost.title}
            className="w-full h-64 lg:h-96 object-cover object-top rounded-xl shadow-lg"
          />
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
            className="text-gray-700 leading-relaxed"
          />
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-blue-50 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Professional HVAC Service?
          </h3>
          <p className="text-gray-700 mb-6">
            Don't wait for HVAC problems to escalate. Contact Abbotsford HVAC for expert service, maintenance, and repairs throughout the Fraser Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${settings.phoneRaw}`}
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center cursor-pointer whitespace-nowrap"
            >
              Call {settings.phoneNumber}
            </a>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap text-center inline-block"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {post.category} • {post.readTime}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
