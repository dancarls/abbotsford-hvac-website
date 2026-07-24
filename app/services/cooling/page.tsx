import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { getSettings } from '@/lib/getSettings';
import geoData from '@/lib/data/geo-service-data.json';

export const metadata: Metadata = {
  title: "Air Conditioning & Cooling Services in Abbotsford, BC",
  description: "Expert AC installation, repair & ductless mini-split services in Abbotsford. Beat the Fraser Valley heat with same-day cooling service. Licensed & insured. Free estimates.",
  alternates: { canonical: 'https://www.abbotsfordhvac.ca/services/cooling' },
  openGraph: {
    title: "Air Conditioning & Cooling Services in Abbotsford, BC | Abbotsford HVAC",
    description: "Expert AC installation, repair & ductless mini-split services in Abbotsford. Beat the Fraser Valley heat with same-day cooling service.",
    images: ['https://www.abbotsfordhvac.ca/og-cooling.jpg']
  }
};

const coolingSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Air Conditioning Services in Abbotsford, BC",
    "description": "Professional AC installation, repair, ductless mini-split and emergency cooling services in Abbotsford, BC.",
    "provider": { "@type": "HVACBusiness", "@id": "https://www.abbotsfordhvac.ca/#business" },
    "areaServed": { "@type": "City", "name": "Abbotsford" },
    "serviceType": ["AC Installation", "AC Repair", "Ductless Mini-Split", "Central Air Systems", "Emergency AC Repair"]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.abbotsfordhvac.ca" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.abbotsfordhvac.ca/services/cooling" },
      { "@type": "ListItem", "position": 3, "name": "Cooling Services", "item": "https://www.abbotsfordhvac.ca/services/cooling" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does AC installation cost in Abbotsford?",
        "acceptedAnswer": { "@type": "Answer", "text": "Central AC installation in Abbotsford typically ranges from $4,000 to $10,000 depending on home size, existing ductwork, and unit efficiency. Ductless mini-splits start around $2,500 per zone. We provide free, no-obligation estimates." }
      },
      {
        "@type": "Question",
        "name": "Is a ductless mini-split better than central air for Abbotsford homes?",
        "acceptedAnswer": { "@type": "Answer", "text": "For homes without existing ductwork, ductless mini-splits are often the better choice — they're more energy-efficient, allow zone-by-zone control, and can provide both heating and cooling year-round. Central air is more cost-effective if you already have a ducted furnace system." }
      },
      {
        "@type": "Question",
        "name": "How often should I service my air conditioner?",
        "acceptedAnswer": { "@type": "Answer", "text": "Annual AC servicing is recommended, ideally in spring before the cooling season. This includes cleaning coils, checking refrigerant levels, inspecting electrical components, and testing performance — preventing breakdowns during the hottest days." }
      },
      {
        "@type": "Question",
        "name": "What are signs my AC needs repair?",
        "acceptedAnswer": { "@type": "Answer", "text": "Key warning signs include warm air blowing from vents, weak airflow, unusual noises (grinding, squealing), ice forming on the unit, water leaks around the unit, or your energy bill spiking without explanation. Call us for a same-day diagnosis." }
      },
      {
        "@type": "Question",
        "name": "Do you offer emergency AC repair in Abbotsford?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — we offer 24/7 emergency AC repair throughout Abbotsford and the Fraser Valley. When your AC fails on the hottest day of summer, we dispatch a technician within 1–2 hours." }
      }
    ]
  }
];

export default function CoolingServices() {
  const settings = getSettings();

  const coolingServices = [
    {
      icon: 'ri-snowy-line',
      title: 'AC Installation',
      description: 'Professional air conditioning installation for central air systems, ductless mini-splits, and window units. Energy-efficient models with manufacturer warranties.',
      features: ['Central Air Systems', 'Ductless Mini-Splits', 'High-Efficiency Models', 'Professional Installation', 'Warranty Coverage']
    },
    {
      icon: 'ri-tools-line',
      title: 'AC Repair & Service',
      description: 'Expert air conditioning repair for all makes and models. From refrigerant leaks to compressor issues, we diagnose and fix AC problems quickly.',
      features: ['All Makes & Models', 'Same-Day Service', 'Refrigerant Services', 'Compressor Repair', '24/7 Emergency AC']
    },
    {
      icon: 'ri-settings-3-line',
      title: 'AC Maintenance',
      description: 'Regular air conditioning maintenance to keep your system running efficiently. Includes cleaning, tune-ups, and seasonal preparation.',
      features: ['Seasonal Tune-ups', 'Filter Replacement', 'Coil Cleaning', 'System Inspection', 'Preventive Care']
    },
    {
      icon: 'ri-building-4-line',
      title: 'Central Air Systems',
      description: 'Complete central air conditioning systems for whole-home cooling. Ductwork installation, zoning systems, and smart controls available.',
      features: ['Whole-Home Cooling', 'Ductwork Installation', 'Zoning Systems', 'Smart Thermostats', 'Energy Efficient']
    },
    {
      icon: 'ri-home-wifi-line',
      title: 'Ductless Mini-Splits',
      description: 'Ductless mini-split systems perfect for targeted cooling without ductwork. Quiet operation and individual room control.',
      features: ['No Ductwork Required', 'Individual Room Control', 'Quiet Operation', 'Heat Pump Options', 'Easy Installation']
    },
    {
      icon: 'ri-alarm-warning-line',
      title: 'Emergency AC Repairs',
      description: '24/7 emergency air conditioning repairs when your AC fails during hot weather. Fast response to restore your comfort quickly.',
      features: ['24/7 Availability', 'Rapid Response', 'Weekend Service', 'Emergency Diagnostics', 'Same-Day Repairs']
    }
  ];


  const faqs = [
    {
      question: 'How often should I have my air conditioning system serviced?',
      answer: 'It\'s recommended to have your AC system professionally serviced annually, ideally in spring before cooling season begins, to ensure optimal performance and efficiency.'
    },
    {
      question: 'What signs indicate my AC system needs repair?',
      answer: 'Common signs include weak airflow, warm air from vents, strange noises, unusual smells, frequent cycling, rising energy bills, and ice formation on the unit.'
    },
    {
      question: 'How long does a typical air conditioning system last?',
      answer: 'A well-maintained central AC system typically lasts 15-20 years, while ductless mini-splits can last 15-25 years with proper care and maintenance.'
    },
    {
      question: 'What size air conditioner do I need for my home?',
      answer: 'AC sizing depends on square footage, insulation, windows, and climate. Our technicians perform load calculations to determine the right BTU capacity for efficient cooling.'
    },
    {
      question: 'How much does air conditioning installation cost?',
      answer: 'Costs vary widely depending on system type and size but typically range from $3,000 to $10,000+ for central air systems, with ductless systems often less expensive.'
    },
    {
      question: 'What energy efficiency ratings should I consider for AC?',
      answer: 'Higher SEER ratings for cooling (above 14, preferably 16+) are recommended. High-efficiency systems qualify for rebates and significantly reduce energy costs.'
    },
    {
      question: 'How often should I change my AC air filters?',
      answer: 'AC filters should typically be changed every 1-3 months during cooling season, more often if you have pets, allergies, or live in a dusty area.'
    },
    {
      question: 'What are common causes of AC system breakdowns?',
      answer: 'Neglected maintenance, dirty filters, refrigerant leaks, electrical issues, and worn compressor components are typical causes of AC system failures.'
    },
    {
      question: 'Can a ductless mini-split work in Abbotsford\'s climate?',
      answer: 'Yes! Modern ductless systems work efficiently in Abbotsford\'s climate and can provide both heating and cooling with excellent energy efficiency.'
    },
    {
      question: 'What financing options are available for AC installation?',
      answer: 'We offer flexible financing plans, and there may be government or utility rebates available for energy-efficient AC upgrades in BC.'
    },
    {
      question: 'What size air conditioner do I need for my home?',
      answer: 'A professional assessment calculates proper size based on your home\'s square footage, insulation, windows, and local climate conditions in Abbotsford.'
    },
    {
      question: 'What is SEER rating and why does it matter?',
      answer: 'Seasonal Energy Efficiency Ratio measures AC efficiency; higher SEER ratings mean less energy used and lower utility bills. Look for SEER 16+ for best efficiency.'
    },
    {
      question: 'Why is my air conditioner freezing up?',
      answer: 'AC freeze-up is often due to low refrigerant levels, dirty air filters, blocked airflow, or thermostat issues. Professional diagnosis is needed to prevent damage.'
    },
    {
      question: 'How can I reduce my AC energy bills?',
      answer: 'Regular maintenance, clean filters, proper insulation, programmable thermostats, sealing air leaks, and upgrading to high-efficiency systems all help reduce costs.'
    },
    {
      question: 'Should I cover my AC unit in winter?',
      answer: 'It\'s not typically recommended to completely cover your AC unit as it can trap moisture and cause damage. A partial cover for the top is usually sufficient.'
    },
    {
      question: 'What are the benefits of ductless mini-split systems?',
      answer: 'Mini-splits provide individual room control (zoning), are energy efficient, work well in homes without ducts, operate quietly, and can provide both heating and cooling.'
    },
    {
      question: 'When is it time to replace my air conditioner?',
      answer: 'Consider replacement when your AC is over 10-15 years old, requires frequent repairs, has declining efficiency, or repair costs exceed 50% of replacement cost.'
    },
    {
      question: 'How do refrigerants affect AC performance and environment?',
      answer: 'Proper refrigerant levels ensure optimal performance and efficiency. Newer refrigerants like R-410A are more environmentally friendly than older types like R-22.'
    },
    {
      question: 'Can I use my air conditioner as a heat pump?',
      answer: 'Only if it\'s specifically designed as a heat pump system. Standard AC units cannot provide efficient heating - they\'re cooling-only systems.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coolingSchema) }} />
      {/* SEO tag replaced */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-blue-900">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/ac-maintenance-abbotsford-hero.png')`
          }}
        />
        <div className="absolute inset-0 bg-blue-900/60" />

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
              Expert Cooling Services in <span className="text-blue-400">Abbotsford</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white drop-shadow-lg font-medium">
              Professional air conditioning installation, repair, and maintenance services. Stay cool and comfortable all summer long.
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

      {/* Cooling Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Cooling Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From AC installation to emergency repairs, we handle all your cooling needs in Abbotsford
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coolingServices.map((service, index) => (
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

      {/* Why Choose Our Cooling Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Cooling Experts?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-award-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Certified AC Technicians</h3>
                    <p className="text-gray-600">Our cooling specialists are EPA certified for refrigerant handling and trained on all major AC brands and systems.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-speed-up-line text-xl text-green-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Same-Day AC Service</h3>
                    <p className="text-gray-600">Beat the heat with our same-day air conditioning service. We prioritize AC emergencies during hot weather.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-leaf-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Energy-Efficient Solutions</h3>
                    <p className="text-gray-600">We install high-efficiency AC systems that reduce energy costs and qualify for utility rebates and tax credits.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <img
                src="/images/ductless-mini-split-abbotsford-hero.png"
                alt="Professional cooling service"
                className="w-full h-auto rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Abbotsford Climate & Local Knowledge */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">AC Built for Abbotsford Summers</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">After the 2021 BC heat dome hit 49°C, Abbotsford homeowners learned fast that quality cooling isn't optional. Here's what we recommend for Fraser Valley homes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-800 rounded-xl p-6">
              <i className="ri-sun-line text-3xl text-yellow-400 mb-4 block"></i>
              <h3 className="text-xl font-bold mb-3">Heat Dome Ready</h3>
              <p className="text-blue-200">Abbotsford's summers now regularly exceed 35°C. We size AC systems for peak demand — not average temperatures — so your system keeps up on the hottest days without short-cycling.</p>
            </div>
            <div className="bg-blue-800 rounded-xl p-6">
              <i className="ri-home-2-line text-3xl text-blue-300 mb-4 block"></i>
              <h3 className="text-xl font-bold mb-3">Ductless for Older Homes</h3>
              <p className="text-blue-200">Many Abbotsford homes built before 1990 have no ductwork. Ductless mini-splits add whole-home or room cooling without costly duct installation — and they qualify for BC Hydro rebates up to $1,000 per unit.</p>
            </div>
            <div className="bg-blue-800 rounded-xl p-6">
              <i className="ri-leaf-line text-3xl text-blue-300 mb-4 block"></i>
              <h3 className="text-xl font-bold mb-3">Energy Efficiency Ratings</h3>
              <p className="text-blue-200">We recommend SEER2 ratings of 16+ for Abbotsford's climate. Higher-rated units cost more upfront but pay back in 2-4 years through lower hydro bills — especially during peak summer rates.</p>
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-blue-800/50 rounded-xl p-5"><div className="text-3xl font-bold text-yellow-400">15+</div><div className="text-blue-300 text-sm mt-1">Years serving Abbotsford</div></div>
            <div className="bg-blue-800/50 rounded-xl p-5"><div className="text-3xl font-bold text-yellow-400">1,500+</div><div className="text-blue-300 text-sm mt-1">AC units installed</div></div>
            <div className="bg-blue-800/50 rounded-xl p-5"><div className="text-3xl font-bold text-yellow-400">24/7</div><div className="text-blue-300 text-sm mt-1">Emergency AC response</div></div>
            <div className="bg-blue-800/50 rounded-xl p-5"><div className="text-3xl font-bold text-yellow-400">4.9★</div><div className="text-blue-300 text-sm mt-1">Average customer rating</div></div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cooling Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              Professional air conditioning services throughout Abbotsford and surrounding areas
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
                Areas We Serve for Cooling Services
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
                  Need cooling service outside these areas?
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Beat the Heat?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Call us now or use our AI chat assistant — available 24/7 to answer questions, provide estimates, and book your AC service. No forms, no waiting.
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
              Common questions about cooling services in Abbotsford
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
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-snowy-line text-3xl text-blue-600"></i>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            AC Broken? We&apos;re Here to Help!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don&apos;t suffer in the heat with a broken air conditioner. Our emergency AC repair team is available 24/7 throughout Abbotsford.
          </p>
          <a href={`tel:${settings.phoneNumber}`} className="bg-white text-blue-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 mx-auto">
            <i className="ri-phone-fill"></i>
            Call Our Support Team 24/7
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
