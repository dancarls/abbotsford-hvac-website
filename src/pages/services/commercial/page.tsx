import ProjectServiceForm from '../../../components/feature/ProjectServiceForm';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function CommercialServices() {

  const commercialServices = [
    {
      icon: 'ri-building-line',
      title: 'System Installation',
      description: 'Complete commercial HVAC system design and installation for office buildings, retail spaces, restaurants, and industrial facilities.',
      features: ['Custom System Design', 'Professional Installation', 'Code Compliance', 'Energy Efficient', 'Project Management']
    },
    {
      icon: 'ri-tools-line',
      title: 'Commercial Repairs',
      description: 'Emergency and scheduled commercial HVAC repairs to minimize downtime and maintain comfortable business environments.',
      features: ['24/7 Emergency Service', 'Rapid Response', 'Minimal Downtime', 'All System Types', 'Preventive Solutions']
    },
    {
      icon: 'ri-temp-cold-line',
      title: 'Refrigeration Services',
      description: 'Commercial refrigeration installation, repair, and maintenance for restaurants, grocery stores, and food service businesses.',
      features: ['Walk-in Coolers', 'Display Cases', 'Ice Machines', 'Food Safety Compliance', 'Energy Optimization']
    },
    {
      icon: 'ri-dashboard-line',
      title: 'Building Automation',
      description: 'Smart building automation systems for optimal energy efficiency, comfort control, and remote monitoring capabilities.',
      features: ['Smart Controls', 'Remote Monitoring', 'Energy Management', 'Automated Scheduling', 'Cost Savings']
    },
    {
      icon: 'ri-leaf-line',
      title: 'Energy Solutions',
      description: 'Energy-efficient HVAC solutions and retrofits to reduce operating costs and meet sustainability goals for your business.',
      features: ['Energy Audits', 'Efficiency Upgrades', 'Rebate Assistance', 'Cost Analysis', 'Sustainability Planning']
    },
    {
      icon: 'ri-alarm-warning-line',
      title: 'Emergency Commercial Service',
      description: 'Priority emergency HVAC service for commercial properties to restore comfort and prevent business interruption.',
      features: ['Priority Response', 'Business Continuity', 'Temporary Solutions', 'Fast Repairs', 'Preventive Measures']
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
      question: 'What types of commercial properties do you service?',
      answer: 'We service all types of commercial properties including office buildings, retail stores, restaurants, warehouses, medical facilities, schools, and industrial buildings.'
    },
    {
      question: 'Do you provide 24/7 emergency service for businesses?',
      answer: 'Yes! We understand that HVAC issues can seriously impact your business. We provide 24/7 emergency service with priority response for commercial customers.'
    },
    {
      question: 'Can you help with energy efficiency and cost reduction?',
      answer: 'Absolutely! We offer energy audits, efficiency upgrades, and can help you access utility rebates and incentives to reduce your operating costs.'
    },
    {
      question: 'Do you offer commercial maintenance contracts?',
      answer: 'Yes, we provide comprehensive commercial maintenance agreements with regular inspections, priority service, and discounted repairs to keep your systems running reliably.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
        {/* Blurred Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 blur-[8px] opacity-60"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20commercial%20HVAC%20technician%20installing%20large%20rooftop%20commercial%20air%20conditioning%20unit%20on%20modern%20office%20building%20in%20Abbotsford%2C%20commercial%20HVAC%20installation%2C%20business%20building%20exterior%2C%20professional%20commercial%20service%2C%20industrial%20HVAC%20equipment&width=1920&height=1000&seq=commercial-hero-1&orientation=landscape')`
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
              Commercial HVAC Services in <span className="text-blue-400">Abbotsford</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white drop-shadow-lg font-medium">
              Professional commercial HVAC installation, repair, and maintenance services. Keep your business comfortable and productive.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()}
                className="bg-blue-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-blue-700 transition-all shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center gap-3"
              >
                <i className="ri-user-voice-fill text-2xl"></i>
                Talk to Our AI HVAC Assistant
              </button>
              <button
                onClick={() => document.getElementById('commercial-form-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-xl border-2 border-white/40 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-white/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer shadow-2xl"
              >
                Request Online Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Commercial HVAC Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From system installation to building automation, we handle all your commercial HVAC needs in Abbotsford
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
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

      {/* Why Choose Our Commercial Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Commercial HVAC Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-time-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Minimal Business Disruption</h3>
                    <p className="text-gray-600">We work around your business schedule to minimize disruption and maintain your operations during installation and repairs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-money-dollar-circle-line text-xl text-green-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cost-Effective Solutions</h3>
                    <p className="text-gray-600">Our energy-efficient systems and preventive maintenance programs help reduce your operating costs and maximize ROI.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-shield-check-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Commercial Expertise</h3>
                    <p className="text-gray-600">Our technicians specialize in commercial systems and understand the unique requirements of business environments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20servicing%20large%20commercial%20rooftop%20unit%20on%20modern%20office%20building%2C%20commercial%20HVAC%20maintenance%2C%20business%20building%20rooftop%20with%20city%20skyline%2C%20professional%20commercial%20service%2C%20industrial%20equipment%20maintenance%20in%20Abbotsford&width=600&height=400&seq=commercial-service-1&orientation=landscape"
                alt="Professional commercial HVAC service"
                className="w-full h-auto rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Property Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Commercial Properties We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Professional HVAC services for all types of commercial properties in Abbotsford
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className="ri-building-line text-3xl text-blue-600"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Office Buildings</h3>
              <p className="text-gray-600">
                Climate control for professional office environments and corporate facilities
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className="ri-store-line text-3xl text-green-600"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Retail Spaces</h3>
              <p className="text-gray-600">
                Comfortable shopping environments for retail stores and shopping centers
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className="ri-restaurant-line text-3xl text-blue-600"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Restaurants</h3>
              <p className="text-gray-600">
                Kitchen ventilation, dining area comfort, and refrigeration systems
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className="ri-hospital-line text-3xl text-green-600"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600">
                Precise climate control for medical facilities and healthcare environments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Commercial Service Areas
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
                Areas We Serve for Commercial HVAC
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
                  Need commercial service outside these areas?
                </h4>
                <p className="text-blue-800 mb-4">
                  We may still be able to help! Contact us to discuss your commercial HVAC project.
                </p>
                <button
                  onClick={() => (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block whitespace-nowrap cursor-pointer"
                >
                  Check Service Area via AI
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="commercial-form-section" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectServiceForm
            serviceId="commercial-form"
            serviceName="Commercial HVAC Service"
            formEndpoint="https://readdy.ai/api/form/d3ad1vog3i95tm0o9cig"
            serviceOptions={[
              { value: 'system-installation', label: 'System Installation' },
              { value: 'commercial-repairs', label: 'Commercial Repairs' },
              { value: 'refrigeration', label: 'Refrigeration Services' },
              { value: 'building-automation', label: 'Building Automation' },
              { value: 'energy-solutions', label: 'Energy Solutions' },
              { value: 'emergency-service', label: 'Emergency Service' },
              { value: 'maintenance-contract', label: 'Maintenance Contract' },
              { value: 'other', label: 'Other' }
            ]}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about commercial HVAC services in Abbotsford
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-building-line text-3xl text-blue-600"></i>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Keep Your Business Comfortable
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't let HVAC issues disrupt your business. Get reliable commercial HVAC service from our Abbotsford experts.
          </p>
          <button
            onClick={() => (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()}
            className="bg-white text-blue-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 mx-auto"
          >
            <i className="ri-user-voice-fill"></i>
            Talk to Our AI Assistant 24/7
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
