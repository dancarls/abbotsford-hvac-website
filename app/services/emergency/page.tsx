import ProjectServiceForm from '../../../components/feature/ProjectServiceForm';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = {
  title: "24/7 Emergency HVAC Services | Abbotsford HVAC",
  description: "Fast, reliable emergency heating and cooling repairs in Abbotsford. Available 24/7, 365 days a year for urgent furnace and AC failures.",
  openGraph: {
    title: "24/7 Emergency HVAC Services | Abbotsford HVAC",
    description: "Fast, reliable emergency heating and cooling repairs in Abbotsford. Available 24/7, 365 days a year for urgent furnace and AC failures.",
    images: ['https://abbotsfordhvac.ca/og-emergency.jpg']
  }
};

export default function EmergencyServices() {

  const emergencyServices = [
    {
      icon: 'ri-alarm-warning-line',
      title: '24/7 Emergency Response',
      description: 'Round-the-clock emergency HVAC service available 365 days a year. When your comfort system fails, we\'re here to help immediately.',
      features: ['24/7 Availability', '365 Days a Year', 'Rapid Response', 'Emergency Hotline', 'No Extra Weekend Fees']
    },
    {
      icon: 'ri-time-line',
      title: 'Same-Day Service',
      description: 'Fast same-day emergency repairs to restore your heating or cooling quickly. Priority scheduling for urgent HVAC problems.',
      features: ['Same-Day Response', 'Priority Scheduling', 'Urgent Repairs', 'Fast Diagnosis', 'Quick Solutions']
    },
    {
      icon: 'ri-fire-line',
      title: 'Emergency Heating Repairs',
      description: 'Emergency furnace and heating system repairs when you have no heat. Critical for Abbotsford\'s cold winters.',
      features: ['No Heat Emergencies', 'Furnace Breakdowns', 'Boiler Failures', 'Heat Pump Issues', 'Thermostat Problems']
    },
    {
      icon: 'ri-snowy-line',
      title: 'Emergency AC Repairs',
      description: 'Emergency air conditioning repairs during hot weather. Don\'t suffer in the heat when your AC breaks down.',
      features: ['AC System Failures', 'Cooling Emergencies', 'Refrigerant Leaks', 'Compressor Issues', 'Electrical Problems']
    },
    {
      icon: 'ri-calendar-line',
      title: 'Weekend & Holiday Service',
      description: 'Emergency HVAC service available on weekends and holidays when other companies are closed.',
      features: ['Weekend Service', 'Holiday Availability', 'No Extra Charges', 'Same Quality Service', 'Emergency Coverage']
    },
    {
      icon: 'ri-stethoscope-line',
      title: 'Emergency Diagnostics',
      description: 'Fast emergency system diagnostics to quickly identify and fix HVAC problems, minimizing downtime.',
      features: ['Rapid Diagnosis', 'Advanced Tools', 'System Analysis', 'Problem Identification', 'Efficient Repairs']
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
      question: 'What constitutes an HVAC emergency?',
      answer: 'HVAC emergencies include complete system failures (no heat in winter, no AC in extreme heat), gas leaks, electrical issues, water leaks from systems, or any situation that threatens safety or property.'
    },
    {
      question: 'How quickly do you respond to emergencies?',
      answer: 'We aim to respond to true emergencies within 1-2 hours during business hours and within 2-4 hours after hours, weekends, and holidays, depending on location and weather conditions.'
    },
    {
      question: 'Do you charge extra for emergency service?',
      answer: 'Emergency calls may have a service call fee, but we don\'t charge extra for weekends or holidays. We provide upfront pricing before any work begins.'
    },
    {
      question: 'What should I do while waiting for emergency service?',
      answer: 'For heating emergencies, dress warmly and close off unused rooms. For AC emergencies, stay hydrated and use fans. If you smell gas, leave immediately and call the gas company.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({}) }} />
      {/* SEO tag replaced */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-red-900">
        {/* Blurred Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 blur-[8px] opacity-60"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Emergency%20HVAC%20technician%20responding%20to%20urgent%20service%20call%20at%20night%2C%20professional%20emergency%20van%20with%20lights%2C%20urgent%20HVAC%20repair%20service%20in%20Abbotsford%2C%20emergency%20response%20vehicle%2C%2024-hour%20service%20availability%2C%20critical%20heating%20cooling%20repair&width=1920&height=1000&seq=emergency-hero-1&orientation=landscape')`
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-xl border-2 border-white/40 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <div className="w-12 h-12 flex items-center justify-center">
                <i className="ri-alarm-warning-line text-5xl text-yellow-400 animate-pulse"></i>
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
              24/7 Emergency HVAC Service in <span className="text-yellow-300">Abbotsford</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white drop-shadow-lg font-medium">
              When your heating or cooling system fails, we respond fast. Available 24/7, 365 days a year for emergency HVAC repairs throughout Abbotsford.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:123-456-7890" className="bg-yellow-400 text-red-900 px-10 py-5 rounded-xl text-xl font-bold hover:bg-yellow-300 transition-all shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center gap-3">
                <i className="ri-phone-fill text-2xl"></i>
                Call Now (123) 456-7890
              </a>
              <a href="#emergency-form-section" className="bg-white/20 backdrop-blur-xl border-2 border-white/40 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-white/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer shadow-2xl">
                Request Online Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert Bar */}
      <section className="bg-red-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-white text-center">
            <div className="w-6 h-6 flex items-center justify-center mr-3">
              <i className="ri-alarm-warning-line text-xl"></i>
            </div>
            <p className="text-lg font-semibold">
              HVAC EMERGENCY? Don't wait - call us immediately at (604) 555-0123 for fast response!
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Emergency HVAC Services
            </h2>
            <p className="text-xl text-gray-600">
              When HVAC emergencies strike, we're ready with fast, professional emergency service throughout Abbotsford
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-red-500">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className={`${service.icon} text-2xl text-red-600`}></i>
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

      {/* Emergency Response Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Emergency Response Process
            </h2>
            <p className="text-xl text-gray-600">
              Fast, efficient emergency service when you need it most
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">
                Call our emergency hotline 24/7. We answer immediately and dispatch a technician.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-600">
                Our technician arrives quickly with fully stocked emergency vehicle and diagnostic tools.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Diagnosis</h3>
              <p className="text-gray-600">
                We quickly identify the problem and provide upfront pricing for emergency repairs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Restore Comfort</h3>
              <p className="text-gray-600">
                We complete repairs efficiently to restore your heating or cooling as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Emergency Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Emergency HVAC Service?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-time-line text-xl text-red-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fastest Response Times</h3>
                    <p className="text-gray-600">We prioritize emergency calls and aim for 1-2 hour response times, even during extreme weather conditions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-tools-line text-xl text-red-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fully Stocked Emergency Vehicles</h3>
                    <p className="text-gray-600">Our emergency vehicles carry extensive parts inventory to complete most repairs on the first visit.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-shield-check-line text-xl text-red-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Emergency-Trained Technicians</h3>
                    <p className="text-gray-600">Our technicians are specially trained for emergency situations and safety protocols.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <img
                src="https://readdy.ai/api/search-image?query=Emergency%20HVAC%20technician%20working%20urgently%20to%20repair%20heating%20system%20in%20cold%20weather%2C%20professional%20emergency%20repair%20service%2C%20technician%20with%20emergency%20tools%20and%20parts%2C%20urgent%20HVAC%20repair%20in%20Abbotsford%20home%2C%20emergency%20service%20response&width=600&height=400&seq=emergency-service-1&orientation=landscape"
                alt="Emergency HVAC service"
                className="w-full h-auto rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Emergency Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              24/7 emergency HVAC service throughout Abbotsford and surrounding areas
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
                Areas We Serve for Emergency HVAC
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <h4 className="text-lg font-semibold text-red-900 mb-2">
                  Emergency outside these areas?
                </h4>
                <p className="text-red-800 mb-4">
                  Call us anyway! We may be able to help or recommend emergency service in your area.
                </p>
                <a href="tel:123-456-7890" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block whitespace-nowrap cursor-pointer">
                  Contact for Service Area
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="emergency-form-section" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectServiceForm
            serviceId="emergency-form"
            serviceName="Emergency HVAC Service"
            formEndpoint="https://readdy.ai/api/form/d3ad1vog3i95tm0o9cfg"
            serviceOptions={[
              { value: 'no-heat', label: 'No Heat - Furnace Not Working' },
              { value: 'no-ac', label: 'No AC - Air Conditioner Not Working' },
              { value: 'gas-leak', label: 'Gas Leak or Gas Smell' },
              { value: 'water-leak', label: 'Water Leak from HVAC System' },
              { value: 'electrical-issue', label: 'Electrical Issue with HVAC' },
              { value: 'strange-noises', label: 'Strange Noises or Burning Smells' },
              { value: 'carbon-monooxide', label: 'Carbon Monoxide Detector Alert' },
              { value: 'other-emergency', label: 'Other Emergency' }
            ]}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Emergency Service FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about emergency HVAC services in Abbotsford
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

      {/* Final Emergency CTA */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-phone-line text-3xl text-red-600"></i>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Don't Wait - Call Now!
          </h2>
          <p className="text-xl text-red-100 mb-8">
            HVAC emergencies get worse with time. Call our emergency hotline immediately for fast, professional service.
          </p>
          <a href="tel:123-456-7890" className="bg-yellow-400 text-red-900 px-12 py-6 rounded-xl text-2xl font-bold hover:bg-yellow-300 transition-all shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 mx-auto animate-pulse">
            <i className="ri-phone-fill"></i>
            Call Our Emergency Team Now
          </a>
          <p className="text-red-100 mt-4 text-sm">
            Available 24/7 • 365 Days a Year • Fast Response
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
