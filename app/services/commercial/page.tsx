import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { getSettings } from '@/lib/getSettings';
import geoData from '@/lib/data/geo-service-data.json';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Commercial HVAC Services in Abbotsford, BC",
  description: "Commercial HVAC installation, repair, refrigeration & building automation in Abbotsford. Minimize downtime with priority service for Abbotsford & Fraser Valley businesses. Free quotes.",
  alternates: { canonical: 'https://www.abbotsfordhvac.ca/services/commercial' },
  openGraph: {
    title: "Commercial HVAC Services in Abbotsford, BC | Abbotsford HVAC",
    description: "Commercial HVAC installation, repair, refrigeration & building automation in Abbotsford. Minimize downtime with priority service for local businesses.",
    images: ['https://www.abbotsfordhvac.ca/og-commercial.jpg']
  }
};

const commercialSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial HVAC Services in Abbotsford, BC",
    "description": "Commercial HVAC installation, repair, refrigeration systems and building automation for Abbotsford businesses.",
    "provider": { "@type": "HVACBusiness", "@id": "https://www.abbotsfordhvac.ca/#business" },
    "areaServed": [
      { "@type": "City", "name": "Abbotsford" },
      { "@type": "AdministrativeArea", "name": "Fraser Valley Regional District" }
    ],
    "serviceType": ["Commercial HVAC Installation", "Commercial Repairs", "Refrigeration Services", "Building Automation", "Commercial Maintenance Agreements"]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.abbotsfordhvac.ca" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.abbotsfordhvac.ca/services/commercial" },
      { "@type": "ListItem", "position": 3, "name": "Commercial HVAC", "item": "https://www.abbotsfordhvac.ca/services/commercial" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer commercial HVAC service agreements in Abbotsford?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — we offer customized commercial maintenance agreements for offices, retail spaces, restaurants, warehouses, and industrial facilities in Abbotsford. Agreements include scheduled preventive maintenance, priority emergency response, and detailed service documentation." }
      },
      {
        "@type": "Question",
        "name": "How quickly can you respond to a commercial HVAC emergency?",
        "acceptedAnswer": { "@type": "Answer", "text": "For commercial clients on a service agreement, we provide priority dispatch with a target 1–2 hour response time in Abbotsford. We understand that HVAC failure in a commercial setting means lost productivity or revenue, so emergency response is our top priority." }
      },
      {
        "@type": "Question",
        "name": "What commercial building types do you service in the Fraser Valley?",
        "acceptedAnswer": { "@type": "Answer", "text": "We service offices, retail stores, restaurants, food processing facilities, warehouses, medical clinics, schools, and light industrial buildings throughout Abbotsford and the Fraser Valley. Our technicians are trained in both rooftop units and complex multi-zone systems." }
      }
    ]
  }
];

export default function CommercialServices() {
  const settings = getSettings();

  const heatingServices = [
    {
      icon: 'ri-fire-line',
      title: 'Furnace Installation',
      description: 'Professional gas and electric furnace installation with energy-efficient models from top brands. We handle permits, inspections, and warranty registration.',
      features: ['Gas & Electric Options', 'High-Efficiency Models', 'Permit & Inspection Handling', 'Manufacturer Warranties', 'Free Installation Estimates']
    },
    {
      icon: 'ri-tools-line',
      title: 'Furnace Repair',
      description: 'Expert furnace repair services for all makes and models. From pilot light issues to complete system breakdowns, we diagnose and fix it fast.',
      features: ['All Makes & Models', 'Same-Day Service', 'Diagnostic Testing', 'Parts Warranty', '24/7 Emergency Repairs']
    },
    {
      icon: 'ri-leaf-line',
      title: 'Heat Pump Systems',
      description: 'Energy-efficient heat pump installation and maintenance. Perfect for Abbotsford\'s moderate climate with year-round heating and cooling.',
      features: ['Air Source Heat Pumps', 'Ground Source Options', 'Dual Fuel Systems', 'Energy Rebates Available', 'Year-Round Comfort']
    },
    {
      icon: 'ri-water-percent-line',
      title: 'Boiler Services',
      description: 'Complete boiler installation, repair, and maintenance services. Specializing in high-efficiency condensing boilers and hydronic heating systems.',
      features: ['Boiler Installation', 'Repair & Maintenance', 'Hydronic Systems', 'Radiant Floor Heating', 'Steam & Hot Water']
    },
    {
      icon: 'ri-home-wifi-line',
      title: 'Smart Thermostats',
      description: 'Upgrade to programmable and smart thermostats for better comfort and energy savings. Professional installation and setup included.',
      features: ['WiFi-Enabled Models', 'Energy Savings', 'Remote Control', 'Professional Setup', 'Compatibility Check']
    },
    {
      icon: 'ri-alarm-warning-line',
      title: 'Emergency Heating',
      description: '24/7 emergency heating repairs when your system fails. Fast response times to get your Abbotsford home warm again quickly.',
      features: ['24/7 Availability', 'Rapid Response', 'All System Types', 'Emergency Diagnostics', 'Temporary Solutions']
    }
  ];


  const faqs = [
    {
      question: 'How often should I have my heating system serviced?',
      answer: 'It\'s recommended to have your heating system professionally serviced annually, ideally in fall before heating season begins, to ensure it runs efficiently and reliably throughout winter.'
    },
    {
      question: 'What signs indicate my heating system needs repair?',
      answer: 'Common signs include strange noises, uneven temperatures, weak airflow, unusual smells, frequent cycling, rising energy bills, and the system not reaching set temperatures.'
    },
    {
      question: 'How long does a typical heating system last?',
      answer: 'A well-maintained heating system typically lasts 15-20 years for gas furnaces and 20-30 years for electric systems, depending on usage and maintenance quality.'
    },
    {
      question: 'What size furnace do I need for my Abbotsford home?',
      answer: 'Furnace sizing depends on square footage, insulation, windows, and local climate. Our technicians perform load calculations to determine the right size for optimal efficiency and comfort.'
    },
    {
      question: 'What warranties do heating systems usually come with?',
      answer: 'Warranties usually cover parts for 5-10 years, with labor coverage for 1-2 years, depending on the manufacturer. We help you understand and register all warranties.'
    },
    {
      question: 'How much does heating system installation or replacement cost?',
      answer: 'Costs range widely depending on system size and complexity but typically fall between $3,000 and $8,000+ for residential installations in Abbotsford.'
    },
    {
      question: 'What are common causes of heating system breakdowns?',
      answer: 'Neglected maintenance, dirty filters, worn parts, thermostat issues, and electrical problems are typical causes of heating system failures.'
    },
    {
      question: 'Can I install a smart thermostat with my existing heating system?',
      answer: 'Most modern heating systems support smart thermostats, which can improve comfort and cut energy use by 10-20% through better scheduling and control.'
    },
    {
      question: 'What energy efficiency ratings should I consider?',
      answer: 'Higher AFUE ratings for heating (above 90%) are recommended. High-efficiency systems qualify for utility rebates and significantly reduce energy costs.'
    },
    {
      question: 'What brands of heating equipment do you recommend?',
      answer: 'Popular brands are Carrier, Lennox, Trane, Goodman, and Rheem for reliability and parts availability. We help you choose the best option for your needs.'
    },
    {
      question: 'What is the difference between a furnace and a heat pump?',
      answer: 'A furnace burns fuel to generate heat while a heat pump transfers heat from outside air to inside, also providing cooling. Heat pumps are more efficient in moderate climates like Abbotsford.'
    },
    {
      question: 'How do I know if my furnace needs to be replaced?',
      answer: 'Frequent repairs, uneven heating, excessive noise, and age over 15 years indicate replacement might be necessary. Rising energy bills also suggest declining efficiency.'
    },
    {
      question: 'What types of furnaces are best for Canadian winters?',
      answer: 'High-efficiency gas furnaces with AFUE above 90% perform excellently in cold climates like Abbotsford, providing reliable heat even in extreme cold.'
    },
    {
      question: 'What is AFUE and why is it important?',
      answer: 'Annual Fuel Utilization Efficiency shows furnace efficiency percentage; higher AFUE saves energy and lowers bills. Modern furnaces should have AFUE above 90%.'
    },
    {
      question: 'How do I prevent my furnace from breaking down?',
      answer: 'Regular annual maintenance, timely filter changes every 1-3 months, and professional inspections prevent most breakdowns and extend system life.'
    },
    {
      question: 'Can I convert my oil furnace to gas or electric?',
      answer: 'Yes, but a professional should assess your home and install the proper equipment. Gas conversion often provides better efficiency and lower operating costs.'
    },
    {
      question: 'What safety checks should I perform on my heating system?',
      answer: 'Check for carbon monoxide leaks with detectors, ensure proper ventilation clearances, inspect gas connections, and have annual professional safety inspections.'
    },
    {
      question: 'What are signs of carbon monoxide leaks from heating?',
      answer: 'Headaches, dizziness, nausea, flu-like symptoms, and unusual odors necessitate immediate action. Leave the house and call emergency services if suspected.'
    },
    {
      question: 'How does radiant floor heating compare to baseboard heaters?',
      answer: 'Radiant heating is more energy-efficient and provides even heat distribution but is costlier to install. Baseboard heaters are less expensive but can create uneven temperatures.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(commercialSchema) }} />
      {/* SEO tag replaced */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-blue-900">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/ductless-mini-split-abbotsford-hero.png')`
          }}
        />
        <div className="absolute inset-0 bg-blue-900/60" />

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
              Commercial HVAC Services in <span className="text-blue-400">Abbotsford</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white drop-shadow-lg font-medium">
              Professional furnace installation, repair, and maintenance services. Keep your home warm and comfortable all winter long.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={`tel:${settings.phoneNumber}`} className="bg-blue-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-blue-700 transition-all shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center gap-3">
                <i className="ri-phone-fill text-2xl"></i>
                Call Now {settings.phoneNumber}
              </a>
              <a href="/contact" className="bg-white/20 backdrop-blur-xl border-2 border-white/40 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-white/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer shadow-2xl">
                Chat or Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Heating Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Heating Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From furnace installation to emergency repairs, we handle all your heating needs in Abbotsford
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heatingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className={`${service.icon} text-2xl text-blue-600`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Heating Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Heating Experts?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-shield-check-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Licensed & Certified Technicians</h3>
                    <p className="text-gray-600">Our heating specialists are fully licensed, bonded, and continuously trained on the latest heating technologies and safety protocols.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-time-line text-xl text-green-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fast Response Times</h3>
                    <p className="text-gray-600">We understand heating emergencies can't wait. Our team provides same-day service and 24/7 emergency repairs throughout Abbotsford.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-award-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Workmanship Guarantee</h3>
                    <p className="text-gray-600">All our heating installations and repairs come with comprehensive warranties and our satisfaction guarantee.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <img
                src="/images/heat-pump-vs-furnace-abbotsford-hero.png"
                alt="Professional heating service"
                className="w-full h-auto rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial HVAC Context */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Commercial HVAC for Abbotsford Businesses</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">Abbotsford's industrial parks, retail corridors, and agricultural processing facilities each have unique HVAC demands. We design and maintain systems that keep your business running.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-800 rounded-xl p-6">
              <i className="ri-building-line text-3xl text-blue-300 mb-4 block"></i>
              <h3 className="text-xl font-bold mb-3">Retail & Office Spaces</h3>
              <p className="text-blue-200">Consistent temperature and air quality keeps staff productive and customers comfortable. We design zoned commercial HVAC systems for Abbotsford's commercial strip — from small boutiques to multi-tenant office buildings.</p>
            </div>
            <div className="bg-blue-800 rounded-xl p-6">
              <i className="ri-store-line text-3xl text-blue-300 mb-4 block"></i>
              <h3 className="text-xl font-bold mb-3">Food & Agricultural Facilities</h3>
              <p className="text-blue-200">Abbotsford's food processing and cold storage operations require specialized refrigeration and ventilation. We service commercial refrigeration units, walk-in coolers, and industrial ventilation systems throughout the Fraser Valley.</p>
            </div>
            <div className="bg-blue-800 rounded-xl p-6">
              <i className="ri-time-line text-3xl text-blue-300 mb-4 block"></i>
              <h3 className="text-xl font-bold mb-3">Preventive Maintenance Plans</h3>
              <p className="text-blue-200">Commercial HVAC downtime costs money. Our preventive maintenance contracts include quarterly inspections, priority service response, and documented maintenance records — keeping your equipment running and your warranties valid.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Commercial HVAC Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              Professional commercial HVAC services throughout Abbotsford and surrounding areas
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-gray-100 rounded-xl p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83325.24904165726!2d-122.38308678476562!3d49.05718584863281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d4c89d72c663%3A0x4a2b36750554ba72!2sAbbotsford%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sus!4v1704835000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Areas We Serve for Heating Services
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {geoData.areas.map((area) => (
                  <Link key={area.slug} href={`/locations/${area.slug}`} className="flex items-center group">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{area.name}</span>
                  </Link>
                ))}
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Need heating service outside these areas?
                </h4>
                <p className="text-blue-800 mb-4">
                  We may still be able to help! Contact us to see if we can service your location.
                </p>
                <a href={`tel:${settings.phoneNumber}`} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block whitespace-nowrap cursor-pointer">
                  Contact for Service Area
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-robot-2-line text-2xl text-white"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get a Commercial HVAC Quote</h2>
          <p className="text-xl text-gray-600 mb-8">
            Call us now or use our AI chat assistant — available 24/7 for commercial HVAC assessments, system design consultations, and service scheduling. No forms, no waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${settings.phoneNumber}`} className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg text-lg inline-flex items-center justify-center gap-3">
              <i className="ri-phone-fill"></i>
              Call {settings.phoneNumber}
            </a>
            <a href="/contact" className="bg-white text-blue-600 border-2 border-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all text-lg inline-flex items-center justify-center gap-3">
              <i className="ri-chat-smile-2-line"></i>
              Chat with Our AI
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about heating services in Abbotsford
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-alarm-warning-line text-3xl text-red-600"></i>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            No Heat? We're Here to Help!
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Don't let a broken heating system leave you in the cold. Our emergency heating repair team is available 24/7 throughout Abbotsford.
          </p>
          <a href={`tel:${settings.phoneNumber}`} className="bg-white text-red-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 mx-auto">
            <i className="ri-phone-fill"></i>
            Call Our Support Team 24/7
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
