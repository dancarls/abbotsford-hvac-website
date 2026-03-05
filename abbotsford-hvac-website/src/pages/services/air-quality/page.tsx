import ProjectServiceForm from '../../../components/feature/ProjectServiceForm';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function AirQualityServices() {

  const airQualityServices = [
    {
      icon: 'ri-flashlight-line',
      title: 'UV Air Purifiers',
      description: 'Advanced UV-C light air purification systems that eliminate bacteria, viruses, mold, and other airborne pathogens from your HVAC system.',
      features: ['UV-C Light Technology', 'Pathogen Elimination', 'HVAC Integration', 'Low Maintenance', 'Continuous Protection']
    },
    {
      icon: 'ri-filter-3-line',
      title: 'Air Filtration Systems',
      description: 'High-efficiency air filtration systems including HEPA filters, electronic air cleaners, and media filters for superior air quality.',
      features: ['HEPA Filtration', 'Electronic Air Cleaners', 'Media Filters', 'Allergen Removal', 'Dust Control']
    },
    {
      icon: 'ri-drop-line',
      title: 'Humidifiers & Dehumidifiers',
      description: 'Whole-home humidity control systems to maintain optimal indoor humidity levels for comfort and health year-round.',
      features: ['Whole-Home Humidity Control', 'Mold Prevention', 'Comfort Enhancement', 'Wood Protection', 'Health Benefits']
    },
    {
      icon: 'ri-alarm-warning-line',
      title: 'CO Detectors',
      description: 'Professional carbon monoxide detector installation and monitoring systems to protect your family from this deadly gas.',
      features: ['Professional Installation', 'Monitoring Systems', 'Battery Backup', 'Safety Compliance', 'Regular Testing']
    },
    {
      icon: 'ri-bug-line',
      title: 'Mold Remediation',
      description: 'Complete mold inspection, testing, and remediation services to eliminate harmful mold and prevent future growth.',
      features: ['Mold Inspection', 'Air Quality Testing', 'Safe Removal', 'Prevention Solutions', 'Health Protection']
    },
    {
      icon: 'ri-test-tube-line',
      title: 'Air Quality Testing',
      description: 'Comprehensive indoor air quality testing to identify pollutants, allergens, and other air quality issues in your home.',
      features: ['Comprehensive Testing', 'Pollutant Identification', 'Allergen Detection', 'Professional Analysis', 'Improvement Recommendations']
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
      question: 'How do I know if I have poor indoor air quality?',
      answer: 'Signs include frequent allergies, respiratory issues, lingering odors, excessive dust, humidity problems, visible mold, and feeling better when you leave home.'
    },
    {
      question: 'How can I improve indoor air quality with HVAC?',
      answer: 'Use high-quality air filters, install UV purifiers, add humidity control, ensure proper ventilation, schedule duct cleaning, and maintain your HVAC system regularly.'
    },
    {
      question: 'What\'s the difference between air purifiers and air filters?',
      answer: 'Air filters remove particles from air passing through your HVAC system. Air purifiers use additional technologies like UV light or ionization to eliminate microorganisms and odors.'
    },
    {
      question: 'How often should I change my air filters for better air quality?',
      answer: 'Change standard filters every 1-3 months, high-efficiency filters every 6-12 months. Check monthly and replace when dirty, especially if you have allergies or pets.'
    },
    {
      question: 'Can air quality systems help with allergies?',
      answer: 'Yes! Proper filtration, humidity control, and air purification can significantly reduce allergens like pollen, dust mites, pet dunder, and mold spores.'
    },
    {
      question: 'What are the benefits of UV air purifiers?',
      answer: 'UV purifiers eliminate bacteria, viruses, mold, and other pathogens, reduce odors, require minimal maintenance, and provide continuous air sanitization through your HVAC system.'
    },
    {
      question: 'How do humidity levels affect indoor air quality?',
      answer: 'Low humidity causes dry skin and respiratory irritation. High humidity promotes mold and dust mites. Optimal humidity (30-50%) improves comfort and air quality.'
    },
    {
      question: 'What causes poor indoor air quality in homes?',
      answer: 'Common causes include inadequate ventilation, dirty HVAC systems, household chemicals, cooking fumes, pet dunder, dust mites, mold, and outdoor pollutants.'
    },
    {
      question: 'How much do air quality improvements cost?',
      answer: 'Costs vary from $100 for basic filters to $3,000+ for whole-home air purification systems. Many improvements provide immediate health benefits and long-term savings.'
    },
    {
      question: 'What are the newest technologies in air quality systems?',
      answer: 'Latest tech includes smart air quality monitors, photocatalytic oxidation, plasma air purifiers, advanced HEPA filtration, and integrated whole-home air treatment systems.'
    },
    {
      question: 'How can an air purifier improve indoor air quality?',
      answer: 'Air purifiers remove allergens, dust, bacteria, viruses, and odors from your indoor air, creating a healthier environment especially beneficial for those with allergies or asthma.'
    },
    {
      question: 'What are common indoor air pollutants and how to remove them?',
      answer: 'Common pollutants include dust, mold, pet dunder, pollen, VOCs, and smoke. They can be removed through proper filtration, ventilation, air purification, and source control.'
    },
    {
      question: 'Can I install a humidifier or dehumidifier with my HVAC?',
      answer: 'Yes, whole-home humidifiers and dehumidifiers can be integrated with your HVAC system to automatically maintain optimal humidity levels throughout your home.'
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20installing%20advanced%20air%20purification%20system%20with%20HEPA%20filter%20and%20UV%20light%20in%20modern%20Abbotsford%20home%2C%20clean%20indoor%20air%20quality%20equipment%2C%20healthy%20home%20environment%2C%20professional%20air%20quality%20service%2C%20advanced%20filtration%20technology&width=1920&height=1000&seq=air-quality-hero-1&orientation=landscape')`
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
              Indoor Air Quality Services in <span className="text-blue-400">Abbotsford</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white drop-shadow-lg font-medium">
              Professional air purification, filtration, and humidity control services. Breathe cleaner, healthier air in your home.
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
                onClick={() => document.getElementById('air-quality-form-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-xl border-2 border-white/40 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-white/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer shadow-2xl"
              >
                Request Online Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Air Quality Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From air purification to humidity control, we improve your indoor air quality in Abbotsford
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {airQualityServices.map((service, index) => (
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

      {/* Why Choose Our Air Quality Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Air Quality Experts?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-heart-pulse-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Health-Focused Solutions</h3>
                    <p className="text-gray-600">Our air quality solutions are designed to reduce allergens, eliminate pathogens, and create a healthier indoor environment for your family.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-test-tube-line text-xl text-green-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Testing & Analysis</h3>
                    <p className="text-gray-600">We use advanced testing equipment to identify specific air quality issues and recommend targeted solutions for your home.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-star-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Premium Equipment & Technology</h3>
                    <p className="text-gray-600">We install only the highest quality air purification and filtration systems from trusted manufacturers with proven performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20home%20interior%20with%20family%20enjoying%20clean%20healthy%20air%2C%20advanced%20air%20purification%20system%20visible%2C%20comfortable%20living%20room%20setting%20in%20Abbotsford%20home%2C%20healthy%20indoor%20environment%2C%20air%20quality%20improvement%20results%2C%20happy%20family%20breathing%20clean%20air&width=600&height=400&seq=air-quality-service-1&orientation=landscape"
                alt="Professional air quality service"
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
              Air Quality Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              Professional air quality services throughout Abbotsford and surrounding areas
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
                Areas We Serve for Air Quality Services
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
                  Need air quality service outside these areas?
                </h4>
                <p className="text-blue-800 mb-4">
                  We may still be able to help! Contact us to see if we can service your location.
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

      <section id="air-quality-form-section" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectServiceForm
            serviceId="air-quality-form"
            serviceName="Air Quality Service"
            formEndpoint="https://readdy.ai/api/form/d3ad1vog3i95tm0o9cg0"
            serviceOptions={[
              { value: 'uv-air-purifiers', label: 'UV Air Purifiers' },
              { value: 'air-filtration', label: 'Air Filtration Systems' },
              { value: 'humidity-control', label: 'Humidifiers/Dehumidifiers' },
              { value: 'co-detectors', label: 'CO Detectors' },
              { value: 'mold-remediation', label: 'Mold Remediation' },
              { value: 'air-quality-testing', label: 'Air Quality Testing' },
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
              Common questions about air quality services in Abbotsford
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

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-leaf-line text-3xl text-green-600"></i>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Breathe Cleaner, Healthier Air Today
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Improve your family's health and comfort with professional air quality solutions from our Abbotsford experts.
          </p>
          <button
            onClick={() => (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()}
            className="bg-white text-green-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 mx-auto"
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
