
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEO from '../../components/common/SEO';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferred_time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');


  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [sentCode, setSentCode] = useState('');

  const handleStartVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;

    setIsSubmitting(true);
    // Simulate sending a verification code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("SIMULATED VERIFICATION CODE:", code);
    setSentCode(code);
    setIsVerifying(true);
    setIsSubmitting(false);
    setSubmitStatus('A verification code has been sent to your email. Please enter it below to confirm.');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode !== sentCode) {
      setSubmitStatus('Invalid verification code. Please check your email.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d3aa5q7hm68tmmd6s6qg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus('Thank you! Your verified request has been received. Our team will contact you soon.');
        setFormData({ name: '', phone: '', email: '', service: '', preferred_time: '' });
        setIsVerifying(false);
        setSentCode('');
        setVerificationCode('');
      } else {
        setSubmitStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Abbotsford HVAC - Expert Heating, Cooling & Air Quality Services"
        description="Professional HVAC services in Abbotsford, BC. Expert heating, cooling, ventilation & air quality solutions. 24/7 emergency service by licensed technicians."
        ogImage="https://abbotsfordhvac.ca/og-image.jpg"
        schema={{
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
        }}
      />
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
                <button
                  onClick={() => document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-blue-700 transition-all shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                >
                  <i className="ri-calendar-check-line text-2xl"></i>
                  Book Online Service
                </button>
                <button
                  onClick={() => window.location.href = 'tel:6045550123'}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all whitespace-nowrap cursor-pointer"
                >
                  Call (604) 555-0123
                </button>
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
            <form onSubmit={isVerifying ? handleSubmit : handleStartVerification} data-readdy-form id="service-request-form" className="grid md:grid-cols-2 gap-6">
              {!isVerifying ? (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      aria-describedby="name-help"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      aria-describedby="phone-help"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      aria-describedby="email-help"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none"
                        aria-describedby="service-help"
                      >
                        <option value="">Select HVAC service</option>
                        <option value="furnace-repair">Furnace Repair</option>
                        <option value="furnace-installation">Furnace Installation</option>
                        <option value="ac-repair">AC Repair</option>
                        <option value="ac-installation">AC Installation</option>
                        <option value="heat-pump">Heat Pump Service</option>
                        <option value="ductless">Ductless Mini-Split</option>
                        <option value="air-quality">Indoor Air Quality</option>
                        <option value="maintenance">Maintenance Service</option>
                        <option value="emergency">Emergency Service</option>
                        <option value="other">Other HVAC Service</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i className="ri-arrow-down-s-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="preferred_time" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Appointment Time
                    </label>
                    <input
                      type="text"
                      id="preferred_time"
                      name="preferred_time"
                      value={formData.preferred_time}
                      onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })}
                      placeholder="e.g., Tomorrow morning, This weekend, ASAP"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      aria-describedby="time-help"
                    />
                  </div>
                </>
              ) : (
                <div className="md:col-span-2">
                  <label htmlFor="verification_code" className="block text-sm font-medium text-gray-700 mb-2">
                    Verification Code *
                  </label>
                  <input
                    type="text"
                    id="verification_code"
                    name="verification_code"
                    required
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="Enter 6-digit code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl tracking-widest"
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Check your email for the code to confirm your request.
                  </p>
                </div>
              )}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  {isSubmitting ? 'Processing...' : (isVerifying ? 'Verify & Submit Request' : 'Get Verified Quote')}
                </button>
                {submitStatus && (
                  <p className={`mt-4 text-center p-3 rounded-lg ${submitStatus.includes('Thank you') ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'}`} role="status" aria-live="polite">
                    {submitStatus}
                  </p>
                )}
                {isVerifying && (
                  <button
                    type="button"
                    onClick={() => setIsVerifying(false)}
                    className="w-full mt-4 text-gray-500 hover:text-gray-700 text-sm font-medium cursor-pointer"
                  >
                    Back to Form
                  </button>
                )}
              </div>
            </form>
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
                  <button
                    onClick={() => window.REACT_APP_NAVIGATE?.(service.link)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    View Service Details
                  </button>
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
                  <button
                    onClick={() => window.REACT_APP_NAVIGATE?.(`/blog/${post.slug}`)}
                    className="text-blue-600 font-bold hover:text-blue-700 transition-colors cursor-pointer whitespace-nowrap mt-auto flex items-center gap-1"
                  >
                    Read Full Article <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => window.REACT_APP_NAVIGATE?.('/blog')}
              className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Browse All Articles
            </button>
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
                  <button
                    key={index}
                    onClick={() => window.REACT_APP_NAVIGATE?.(`/service-areas/${areaName.toLowerCase().replace(/ /g, '-')}`)}
                    className="flex items-center text-left hover:text-blue-600 transition-all cursor-pointer group"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(37,99,235,0.6)] transition-all" aria-hidden="true"></div>
                    <span className="text-gray-700 font-semibold group-hover:translate-x-1 transition-transform text-sm">{areaName}</span>
                  </button>
                ))}
              </div>
              <div className="mt-10 p-6 bg-blue-600 rounded-2xl shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <i className="ri-customer-service-2-fill text-6xl text-white"></i>
                </div>
                <div className="relative z-10">
                  <p className="text-blue-100 font-medium mb-1 text-sm uppercase tracking-wider">Don't see your area?</p>
                  <h4 className="text-xl font-bold text-white mb-4 leading-tight">We may still be able to help you today.</h4>
                  <button
                    onClick={() => window.location.href = 'tel:6045550123'}
                    className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <i className="ri-phone-fill"></i>
                    Call Our Support Team
                  </button>
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
