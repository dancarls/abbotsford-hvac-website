import { Metadata } from 'next';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ContactForm from '../../components/feature/ContactForm';

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
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Abbotsford HVAC",
      "telephone": "(604) 555-0123",
      "email": "info@abbotsfordhvac.ca",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Abbotsford",
        "addressRegion": "BC",
        "postalCode": "V2S 0A3",
        "addressCountry": "CA"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-(604)-555-0123",
          "contactType": "customer service",
          "areaServed": "CA",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+1-(604)-555-0123",
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20HVAC%20customer%20service%20office%20with%20modern%20communication%20equipment%2C%20friendly%20staff%20ready%20to%20help%20customers%2C%20clean%20business%20environment%20in%20Abbotsford%20BC&width=1200&height=600&seq=contact-hero&orientation=landscape')`
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
                href="tel:6045550123"
                className="inline-block bg-white text-red-600 px-4 py-1 rounded-full text-sm font-bold hover:bg-red-50 transition-all cursor-pointer shadow-sm"
              >
                Call Support Now
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <i className="ri-mail-send-line text-blue-600"></i>
                Get Your Free Quote
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours with a personalized quote. For immediate assistance, please call our support team.
              </p>

              <ContactForm />
            </div>

            {/* Contact Information & AI Focus */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <i className="ri-customer-service-2-fill text-[180px]"></i>
                </div>
                <div className="relative z-10">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">24/7 Support</span>
                  <h3 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    Our expert support team is ready to help with emergency repairs, diagnostic questions, and instant service scheduling. No wait times, just real help.
                  </p>
                  <a
                    href="tel:6045550123"
                    className="inline-flex bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all items-center justify-center gap-3 shadow-xl hover:scale-105 active:scale-95 cursor-pointer text-lg"
                  >
                    <i className="ri-phone-fill text-xl"></i>
                    Call (604) 555-0123 Now
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Business Details</h3>

                <div className="space-y-8 text-gray-600">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                      <i className="ri-map-pin-2-fill text-xl text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Headquarters</h4>
                      <p className="text-sm">123 Main Street, Abbotsford, BC V2S 0A3</p>
                      <p className="text-xs text-gray-400 mt-1 italic">Serving the entire Fraser Valley</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                      <i className="ri-mail-fill text-xl text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Direct Email</h4>
                      <p className="text-sm">info@abbotsfordhvac.ca</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                      <i className="ri-time-fill text-xl text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Service Hours</h4>
                      <div className="text-sm space-y-1 mt-1">
                        <div className="flex justify-between gap-4"><span>Mon - Fri:</span> <span>7 AM - 7 PM</span></div>
                        <div className="flex justify-between gap-4"><span>Sat - Sun:</span> <span>8 AM - 5 PM</span></div>
                        <div className="pt-2 flex justify-between gap-4 text-red-600 font-bold border-t border-gray-50">
                          <span>Emergency:</span> <span>24/7 Priority</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
