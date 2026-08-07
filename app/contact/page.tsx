import { Metadata } from 'next';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import LeadForm from '../../components/feature/LeadForm';
import { getSettings } from '../../lib/getSettings';

export const metadata: Metadata = {
  title: 'Contact Us | Abbotsford HVAC',
  description: 'Get in touch with Abbotsford HVAC for heating, cooling, and ventilation quotes or emergency service. Available 24/7 across the Fraser Valley.',
  openGraph: {
    title: 'Contact Us | Abbotsford HVAC',
    description: 'Get in touch with Abbotsford HVAC for heating, cooling, and ventilation quotes or emergency service. Available 24/7 across the Fraser Valley.',
    images: ['https://abbotsfordhvac.ca/og-contact.jpg']
  }
};

export default function ContactPage() {
  const settings = getSettings();
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "HVACBusiness",
      "@id": `${settings.baseUrl}/#business`,
      "name": settings.businessName,
      "telephone": settings.phoneNumber,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Abbotsford",
        "addressRegion": "BC",
        "addressCountry": "CA"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": `+1-${settings.phoneRaw}`,
          "contactType": "customer service",
          "areaServed": "CA",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "telephone": `+1-${settings.phoneRaw}`,
          "contactType": "emergency",
          "areaServed": "CA",
          "availableLanguage": "English"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/hvac-maintenance-abbotsford-hero.png')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl leading-relaxed">
              Ready to improve your home's comfort? Get in touch with Abbotsford's HVAC experts today
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contact Bar */}
      <section className="bg-red-600 text-white py-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-bold flex items-center justify-center gap-3">
              <i className="ri-alarm-warning-fill text-2xl animate-pulse"></i>
              HVAC Emergency?
              <a
                href={`tel:${settings.phoneRaw}`}
                className="inline-block bg-white text-red-600 px-4 py-1 rounded-full text-sm font-bold hover:bg-red-50 transition-all cursor-pointer shadow-sm"
              >
                Call Now
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Three Ways to Reach Us</h2>
            <p className="text-xl text-gray-600">Pick whichever works — all three go to the same dispatch line.</p>
          </div>

          {/* Primary: form left, phone right (mobile: stacked) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Lead Form */}
            <div>
              <LeadForm source="contact-page" heading="Send us a message" subheading="Fill in three quick details and we'll call you back — usually within 30 minutes during business hours." />
            </div>

            {/* Call Us */}
            <div className="bg-blue-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 opacity-10">
                <i className="ri-phone-fill text-[150px]"></i>
              </div>
              <div className="relative z-10">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">24/7 Available</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Call Us Directly</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Emergency heating, cooling, or plumbing calls answered any time — including nights, weekends, and holidays. Our AI receptionist takes the call and dispatches to the right person.
                </p>
                <a
                  href={`tel:${settings.phoneRaw}`}
                  className="inline-flex bg-white text-blue-600 px-6 md:px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all items-center gap-3 shadow-xl text-lg"
                >
                  <i className="ri-phone-fill text-xl"></i>
                  {settings.phoneNumber}
                </a>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3 text-blue-50">
                    <i className="ri-chat-smile-2-line text-2xl"></i>
                    <span className="text-sm">Or use the chat widget (bottom-right corner) for a quick text answer any time.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Hours */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <i className="ri-time-fill text-blue-600"></i>
              Service Hours
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="font-bold text-gray-900 mb-1">Mon – Fri</div>
                <div className="text-gray-600">7 AM – 7 PM</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="font-bold text-gray-900 mb-1">Sat – Sun</div>
                <div className="text-gray-600">8 AM – 5 PM</div>
              </div>
              <div className="p-4 bg-red-50 rounded-xl">
                <div className="font-bold text-red-600 mb-1">Emergency</div>
                <div className="text-red-600 font-semibold">24/7 Always</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] bg-gray-100 border-t border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83325.24904165726!2d-122.38308678476562!3d49.05718584863281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d4c89d72c663%3A0x4a2b36750554ba72!2sAbbotsford%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sus!4v1704835000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
          title="Abbotsford HVAC Service Areas Map"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
}
