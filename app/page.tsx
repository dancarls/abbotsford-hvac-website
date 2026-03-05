import Link from 'next/link';
import Header from '../components/feature/Header';
import Footer from '../components/feature/Footer';
import HomeContactForm from '../components/feature/HomeContactForm';

export default function Home() {
  const services = [
    {
      icon: 'ri-temp-hot-line',
      iconColor: 'text-red-600',
      bgColor: 'bg-red-50',
      title: 'Heating Services',
      description: 'Expert furnace installation, boiler repair, heat pump systems, radiant floor heating, smart thermostats, and 24/7 emergency heating repairs to keep your Abbotsford home warm all winter.',
      subServices: ['Furnace Installation & Repair', 'Boiler Services', 'Heat Pump Systems', 'Radiant Floor Heating', 'Smart Thermostats', 'Emergency Heating Repairs'],
      link: '/services/heating'
    },
    {
      icon: 'ri-snowflake-line',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      title: 'Cooling Services',
      description: 'Complete air conditioning installation, maintenance, repair, central air systems, ductless mini-splits, and emergency AC repairs for optimal cooling comfort in Abbotsford.',
      subServices: ['AC Installation', 'AC Maintenance & Repair', 'Central Air Systems', 'Ductless Mini-Splits', 'Emergency AC Repairs', 'Cooling System Upgrades'],
      link: '/services/cooling'
    },
    {
      icon: 'ri-windy-line',
      iconColor: 'text-teal-600',
      bgColor: 'bg-teal-50',
      title: 'Ventilation Services',
      description: 'Professional whole-home ventilation systems, exhaust fans, attic fans, air balancing, ERV/HRV installation, and duct cleaning services for better indoor air circulation.',
      subServices: ['Whole-Home Ventilation', 'Exhaust & Attic Fans', 'Air Balancing', 'ERV/HRV Systems', 'Duct Cleaning', 'Ventilation Maintenance'],
      link: '/services/ventilation'
    },
    {
      icon: 'ri-leaf-line',
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      title: 'Indoor Air Quality',
      description: 'Advanced UV air purifiers, air filtration systems, humidifiers, dehumidifiers, carbon monoxide detectors, and mold remediation to ensure healthy indoor air quality.',
      subServices: ['UV Air Purifiers', 'Air Filtration Systems', 'Humidifiers & Dehumidifiers', 'CO Detectors', 'Mold Remediation', 'Air Quality Testing'],
      link: '/services/air-quality'
    },
    {
      icon: 'ri-drop-line',
      iconColor: 'text-sky-600',
      bgColor: 'bg-sky-50',
      title: 'Plumbing & Water Heating',
      description: "Water heater installation and repair, plumbing repairs, pipe insulation, and related services to complement your home's comfort systems in Abbotsford.",
      subServices: ['Water Heater Services', 'Plumbing Repairs', 'Pipe Insulation', 'Hot Water Systems', 'Tankless Water Heaters', 'Emergency Plumbing'],
      link: '/services/plumbing'
    },
    {
      icon: 'ri-tools-line',
      iconColor: 'text-slate-600',
      bgColor: 'bg-slate-50',
      title: 'Maintenance Services',
      description: 'Comprehensive annual HVAC inspections, filter replacements, thermostat upgrades, and maintenance agreements to keep your systems running efficiently year-round.',
      subServices: ['Annual Inspections', 'Filter Replacement', 'Thermostat Upgrades', 'Maintenance Agreements', 'System Tune-ups', 'Preventive Care'],
      link: '/services/maintenance'
    },
    {
      icon: 'ri-building-line',
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      title: 'Commercial HVAC',
      description: 'Professional commercial HVAC system installation, repairs, refrigeration, building automation, and energy-efficient solutions for Abbotsford businesses.',
      subServices: ['System Installation', 'Commercial Repairs', 'Refrigeration Services', 'Building Automation', 'Energy Solutions', 'Emergency Commercial Service'],
      link: '/services/commercial'
    },
    {
      icon: 'ri-alarm-warning-line',
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      title: 'Emergency Services',
      description: '24/7 emergency HVAC repairs in Abbotsford. No heating in winter? AC broken in summer? We respond fast with same-day emergency service to restore your comfort.',
      subServices: ['24/7 Emergency Response', 'Same-Day Service', 'Emergency Heating Repairs', 'Emergency AC Repairs', 'Weekend & Holiday Service', 'Emergency Diagnostics'],
      link: '/services/emergency'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Abbotsford West',
      rating: 5,
      text: 'Excellent service! They installed our new furnace quickly and professionally. The team was knowledgeable and cleaned up perfectly after the job.',
      date: '2024-01-15'
    },
    {
      name: 'Mike Chen',
      location: 'Clayburn Village',
      rating: 5,
      text: 'Called for emergency AC repair on a Saturday. They came out within 2 hours and had us cool again. Great customer service and fair pricing.',
      date: '2024-02-08'
    },
    {
      name: 'Jennifer Smith',
      location: 'Eagle Mountain',
      rating: 5,
      text: 'Professional, reliable, and honest. They maintained our HVAC system for 3 years now. Highly recommend their maintenance plans!',
      date: '2024-01-22'
    }
  ];

  const serviceAreas = [
    'Abbotsford West', 'Abbotsford East', 'Clayburn Village', 'McMillan',
    'Auguston', 'Eagle Mountain', 'Sandy Hill', 'Clearbrook Centre',
    'Townline Hill', 'Mill Lake', 'West Clearbrook', 'South Clearbrook',
    'Aberdeen', 'South Poplar', 'Kilgard', 'Gifford', 'Mission',
    'Hatzic', 'Dewdney', 'Glen Valley', 'Silverhill'
  ];

  const blogPosts = [
    {
      id: '1',
      title: 'How to Prepare Your HVAC System for Winter in Abbotsford',
      excerpt: 'Essential maintenance tips to ensure your heating system runs efficiently during Fraser Valley\'s cold months.',
      author: 'Mike Thompson',
      date: '2024-01-15',
      category: 'Maintenance',
      readTime: '5 min read',
      image: 'https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20performing%20winter%20maintenance%20on%20residential%20furnace%20system%20in%20Abbotsford%20home%2C%20checking%20filters%20and%20equipment%2C%20cold%20weather%20preparation&width=600&height=300&seq=home-blog-1&orientation=landscape',
      slug: 'prepare-hvac-system-winter-abbotsford'
    },
    {
      id: '2',
      title: 'Signs Your Air Conditioner Needs Repair Before Summer',
      excerpt: 'Don\'t wait for the hottest day of the year to discover your AC isn\'t working. Watch for these warning signs.',
      author: 'Sarah Chen',
      date: '2024-01-10',
      category: 'Cooling',
      readTime: '4 min read',
      image: 'https://readdy.ai/api/search-image?query=Air%20conditioning%20unit%20showing%20signs%20of%20wear%20and%20repair%20needs%2C%20residential%20exterior%20AC%20unit%20with%20visible%20issues%2C%20professional%20diagnostic%20assessment&width=600&height=300&seq=home-blog-2&orientation=landscape',
      slug: 'air-conditioner-repair-signs-summer'
    },
    {
      id: '3',
      title: 'Energy-Efficient HVAC Upgrades That Save Money',
      excerpt: 'Discover which HVAC improvements offer the best return on investment for Abbotsford homeowners.',
      author: 'David Kim',
      date: '2024-01-08',
      category: 'Energy Efficiency',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Modern%20energy-efficient%20HVAC%20system%20installation%20in%20contemporary%20home%2C%20smart%20thermostat%20and%20high-efficiency%20equipment%2C%20cost%20savings%20visualization&width=600&height=300&seq=home-blog-3&orientation=landscape',
      slug: 'energy-efficient-hvac-upgrades-save-money'
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Abbotsford HVAC",
    "image": "https://abbotsfordhvac.ca/logo.jpg",
    "@id": "https://abbotsfordhvac.ca",
    "url": "https://abbotsfordhvac.ca",
    "telephone": "(604) 555-0123",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Abbotsford",
      "addressRegion": "BC",
      "postalCode": "V2S 0A3",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.057186,
      "longitude": -122.308681
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/abbotsfordhvac",
      "https://www.instagram.com/abbotsfordhvac"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20comfortable%20family%20home%20in%20Abbotsford%20British%20Columbia%20with%20clean%20architectural%20lines%2C%20HVAC%20equipment%20visible%20on%20exterior%2C%20beautiful%20residential%20neighborhood%20setting%2C%20professional%20photography%2C%20natural%20lighting%2C%20blue%20sky%20background%2C%20well-maintained%20landscaping%2C%20Canadian%20residential%20architecture%20style&width=1920&height=1080&seq=hero-1&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Local HVAC Experts in <span className="text-blue-400">Abbotsford, BC</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Professional heating, cooling, ventilation & air quality solutions for homes & businesses. Licensed technicians serving Fraser Valley with 24/7 emergency service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#service-form"
                  className="bg-blue-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-blue-700 transition-all shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                >
                  <i className="ri-calendar-check-line text-2xl"></i>
                  Book Online Service
                </a>
                <a
                  href="tel:6045550123"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all whitespace-nowrap cursor-pointer flex items-center justify-center"
                >
                  Call (604) 555-0123
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Service Request Form */}
      <section id="service-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Request HVAC Service Today
            </h2>
            <HomeContactForm />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Abbotsford HVAC?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're your trusted local HVAC experts, committed to keeping your home comfortable year-round
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-50 rounded-[2rem] flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-sm border border-blue-100">
                <i className="ri-medal-line text-4xl text-blue-600" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Elite Standards</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                As a locally owned business, we maintain the highest quality standards in the Abbotsford region.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-red-50 rounded-[2rem] flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-sm border border-red-100">
                <i className="ri-timer-flash-line text-4xl text-red-600" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Rapid Response</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our dedicated dispatch ensures lightning-fast 24/7 emergency service when it matters most.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-emerald-50 rounded-[2rem] flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-sm border border-emerald-100">
                <i className="ri-shield-check-line text-4xl text-emerald-600" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Certified Excellence</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Fully licensed, insured, and background-checked technicians for your total peace of mind.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-50 rounded-[2rem] flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-sm border border-amber-100">
                <i className="ri-heart-line text-4xl text-amber-600" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Community Driven</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                From Clearbrook to Eagle Mountain, we take pride in serving every Abbotsford neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete HVAC Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete HVAC Services in Abbotsford
            </h2>
            <p className="text-xl text-gray-600">
              Professional heating, cooling, ventilation, and air quality solutions for your home and business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100 group">
                <div
                  className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 border border-white/50 shadow-sm transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <i className={`${service.icon} text-3xl ${service.iconColor}`} aria-hidden="true"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3 pt-6 border-t border-gray-50 text-sm font-medium">
                  <Link
                    href={service.link}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    View Service Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest HVAC Tips & Insights
            </h2>
            <p className="text-xl text-gray-600">
              Expert advice and industry insights to help you make informed HVAC decisions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                    <span className="flex items-center gap-1"><i className="ri-user-line"></i> {post.author}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><i className="ri-calendar-line"></i> {new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><i className="ri-time-line"></i> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-bold hover:text-blue-700 transition-colors cursor-pointer whitespace-nowrap mt-auto flex items-center gap-1"
                  >
                    Read Full Article <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Browse All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Local HVAC Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proudly serving your neighborhood in Abbotsford and throughout the Fraser Valley.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83325.24904165726!2d-122.38308678476562!3d49.05718584863281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d4c89d72c663%3A0x4a2b36750554ba72!2sAbbotsford%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sus!4v1704835000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="Abbotsford HVAC Service Areas Map"
              ></iframe>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {serviceAreas.map((areaName, index) => (
                  <Link
                    key={index}
                    href={`/locations/${areaName.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-center text-left hover:text-blue-600 transition-all cursor-pointer group"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(37,99,235,0.6)] transition-all" aria-hidden="true"></div>
                    <span className="text-gray-700 font-semibold group-hover:translate-x-1 transition-transform text-sm">{areaName}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-10 p-6 bg-blue-600 rounded-2xl shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <i className="ri-customer-service-2-fill text-6xl text-white"></i>
                </div>
                <div className="relative z-10">
                  <p className="text-blue-100 font-medium mb-1 text-sm uppercase tracking-wider">Don't see your area?</p>
                  <h4 className="text-xl font-bold text-white mb-4 leading-tight">We may still be able to help you today.</h4>
                  <a
                    href="tel:6045550123"
                    className="inline-flex bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <i className="ri-phone-fill"></i>
                    Call Our Support Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from satisfied customers across Abbotsford and Fraser Valley
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg p-8" itemScope itemType="https://schema.org/Review">
                <div className="flex items-center mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-star-fill text-yellow-400" aria-hidden="true"></i>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic" itemProp="reviewBody">
                  "{testimonial.text}"
                </p>
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  <p className="font-semibold text-gray-900" itemProp="name">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
                <meta itemProp="datePublished" content={testimonial.date} />
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness">
                  <meta itemProp="name" content="Abbotsford HVAC" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
