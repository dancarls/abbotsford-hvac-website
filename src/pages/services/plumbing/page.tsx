import ProjectServiceForm from '../../../components/feature/ProjectServiceForm';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import SEO from '../../../components/common/SEO';

export default function PlumbingServices() {

  const plumbingServices = [
    {
      icon: 'ri-drop-line',
      title: 'Water Heater Services',
      description: 'Complete water heater installation, repair, and maintenance for tank and tankless systems. Gas, electric, and hybrid options available.',
      features: ['Tank & Tankless Options', 'Gas & Electric Models', 'Installation & Repair', 'Energy Efficient Units', 'Warranty Coverage']
    },
    {
      icon: 'ri-tools-line',
      title: 'Plumbing Repairs',
      description: 'Expert plumbing repairs for leaks, clogs, pipe issues, and fixture problems. Fast, reliable service for all your plumbing needs.',
      features: ['Leak Repairs', 'Drain Cleaning', 'Pipe Repairs', 'Fixture Installation', 'Emergency Service']
    },
    {
      icon: 'ri-temp-cold-line',
      title: 'Pipe Insulation',
      description: 'Professional pipe insulation services to prevent freezing, reduce heat loss, and improve energy efficiency in your plumbing system.',
      features: ['Freeze Protection', 'Energy Savings', 'Hot Water Lines', 'Cold Water Lines', 'Professional Installation']
    },
    {
      icon: 'ri-fire-line',
      title: 'Hot Water Systems',
      description: 'Complete hot water system design and installation including circulation pumps, expansion tanks, and temperature control.',
      features: ['System Design', 'Circulation Pumps', 'Expansion Tanks', 'Temperature Control', 'Efficiency Optimization']
    },
    {
      icon: 'ri-leaf-line',
      title: 'Tankless Water Heaters',
      description: 'Space-saving tankless water heater installation and service. Endless hot water with improved energy efficiency.',
      features: ['Endless Hot Water', 'Space Saving Design', 'Energy Efficient', 'Long Lifespan', 'Professional Installation']
    },
    {
      icon: 'ri-alarm-warning-line',
      title: 'Emergency Plumbing',
      description: '24/7 emergency plumbing services for burst pipes, major leaks, and other urgent plumbing issues that can\'t wait.',
      features: ['24/7 Availability', 'Rapid Response', 'Burst Pipe Repair', 'Leak Detection', 'Water Damage Prevention']
    }
  ];

  const serviceAreas = [
    'Abbotsford West', 'Abbotsford East', 'Clayburn Village', 'McMillan',
    'Auguston', 'Eagle Mountain', 'Sandy Hill', 'Clearbrook Centre',
    'Townline Hill', 'Mill Lake', 'West Clearbrook', 'South Clearbrook',
    'Aberdeen', 'South Poplar', 'Kilgard', 'Gifford', 'Mission',
    'Hatzic', 'Dewdney', 'Glen Valley', 'Silverhill'
  ];

  const faqs = [
    {
      question: 'How long do water heaters typically last?',
      answer: 'Tank water heaters last 8-12 years, while tankless units can last 15-20 years with proper maintenance. Regular servicing extends lifespan and maintains efficiency.'
    },
    {
      question: 'Should I choose a tank or tankless water heater?',
      answer: 'Tankless heaters provide endless hot water and save space but have higher upfront costs. Tank heaters cost less initially but take up more space. We\'ll help you choose based on your needs.'
    },
    {
      question: 'How do I know if my pipes need insulation?',
      answer: 'Signs include frozen pipes in winter, long waits for hot water, high energy bills, or condensation on cold water pipes. Insulation helps with all these issues.'
    },
    {
      question: 'Do you offer emergency plumbing services?',
      answer: 'Yes! We provide 24/7 emergency plumbing services for burst pipes, major leaks, and other urgent issues that can cause property damage.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Expert Plumbing & Water Heating Services"
        description="Professional water heater installation, plumbing repairs, and pipe insulation services in Abbotsford. Expert plumbing solutions for your home."
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
        {/* Blurred Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 blur-[8px] opacity-60"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20plumber%20installing%20modern%20tankless%20water%20heater%20in%20clean%20Abbotsford%20home%20basement%2C%20professional%20plumbing%20installation%2C%20modern%20water%20heating%20system%2C%20expert%20plumbing%20service%2C%20Canadian%20residential%20plumbing%20work%2C%20clean%20technical%20installation&width=1920&height=1000&seq=plumbing-hero-1&orientation=landscape')`
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
              Expert Plumbing & Water Heating in <span className="text-blue-400">Abbotsford</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white drop-shadow-lg font-medium">
              Professional water heater installation, plumbing repairs, and pipe insulation services. Keep your water flowing and heating systems running efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => window.location.href = 'tel:123-456-7890'}
                className="bg-blue-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-blue-700 transition-all shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center gap-3"
              >
                <i className="ri-phone-fill text-2xl"></i>
                Call Now (123) 456-7890
              </button>
              <button
                onClick={() => document.getElementById('plumbing-form-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-xl border-2 border-white/40 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-white/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer shadow-2xl"
              >
                Request Online Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plumbing Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Plumbing & Water Heating Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From water heater installation to emergency repairs, we handle all your plumbing needs in Abbotsford
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plumbingServices.map((service, index) => (
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

      {/* Why Choose Our Plumbing Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Plumbing Experts?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-shield-check-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Licensed Plumbing Professionals</h3>
                    <p className="text-gray-600">Our plumbers are fully licensed, bonded, and experienced in all aspects of residential and commercial plumbing systems.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-water-percent-line text-xl text-green-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Water Damage Prevention</h3>
                    <p className="text-gray-600">We focus on preventing water damage through quality installations, leak detection, and prompt emergency response services.</p>
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
                    <p className="text-gray-600">We install high-efficiency water heaters and plumbing systems that reduce energy costs and environmental impact.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20plumber%20performing%20water%20heater%20maintenance%20service%2C%20checking%20temperature%20and%20pressure%20settings%2C%20modern%20residential%20water%20heating%20system%2C%20professional%20plumbing%20service%20in%20Abbotsford%20home%2C%20expert%20technical%20work&width=600&height=400&seq=plumbing-service-1&orientation=landscape"
                alt="Professional plumbing service"
                className="w-full h-auto rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Plumbing Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              Professional plumbing services throughout Abbotsford and surrounding areas
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
                Areas We Serve for Plumbing Services
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Need plumbing service outside these areas?
                </h4>
                <p className="text-blue-800 mb-4">
                  We may still be able to help! Contact us to see if we can service your location.
                </p>
                <button
                  onClick={() => window.location.href = 'tel:123-456-7890'}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block whitespace-nowrap cursor-pointer"
                >
                  Contact for Service Area
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="plumbing-form-section" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectServiceForm
            serviceId="plumbing-form"
            serviceName="Plumbing Service"
            formEndpoint="https://readdy.ai/api/form/d3ad1vog3i95tm0o9chg"
            serviceOptions={[
              { value: 'water-heater-installation', label: 'Water Heater Installation' },
              { value: 'water-heater-repair', label: 'Water Heater Repair' },
              { value: 'plumbing-repairs', label: 'Plumbing Repairs' },
              { value: 'pipe-insulation', label: 'Pipe Insulation' },
              { value: 'tankless-water-heater', label: 'Tankless Water Heater' },
              { value: 'emergency-plumbing', label: 'Emergency Plumbing' },
              { value: 'other', label: 'Other' }
            ]}
          />
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
              Common questions about plumbing services in Abbotsford
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
              <i className="ri-drop-line text-3xl text-red-600"></i>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Plumbing Emergency? We're Here to Help!
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Don't let a plumbing emergency cause water damage. Our emergency plumbing team is available 24/7 throughout Abbotsford.
          </p>
          <button
            onClick={() => window.location.href = 'tel:123-456-7890'}
            className="bg-white text-red-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 mx-auto"
          >
            <i className="ri-phone-fill"></i>
            Call Our Support Team 24/7
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
