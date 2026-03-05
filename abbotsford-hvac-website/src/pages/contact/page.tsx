
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: 'phone',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [sentCode, setSentCode] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStartVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate sending a code
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      console.log('Verification code for testing:', code);
      setSentCode(code);

      // In a real app, you'd call an API to send this via email/SMS
      await new Promise(resolve => setTimeout(resolve, 800));

      setIsVerifying(true);
      setSubmitStatus('A 6-digit verification code has been sent to your email.');
    } catch (error) {
      setSubmitStatus('Error initializing verification. Please try our AI assistant.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (verificationCode !== sentCode) {
      setSubmitStatus('Invalid verification code. Please check your email.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://readdy.ai/api/form/d3an9r9439c4o52mk9i0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          ...formData,
          name: `${formData.firstName} ${formData.lastName}`,
          verification_code: verificationCode
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('Thank you! Your verified request has been received. We\'ll contact you shortly.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          preferredContact: 'phone',
          urgency: 'normal'
        });
        setIsVerifying(false);
        setVerificationCode('');
      } else {
        setSubmitStatus('There was an error sending your message. Please use our AI assistant.');
      }
    } catch (error) {
      setSubmitStatus('There was an error sending your message. Please use our AI assistant.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
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
              <button
                onClick={() => (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()}
                className="bg-white text-red-600 px-4 py-1 rounded-full text-sm font-bold hover:bg-red-50 transition-all cursor-pointer shadow-sm"
              >
                Talk to Our AI Assistant 24/7
              </button>
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
                Fill out the form below and we'll get back to you within 24 hours with a personalized quote. For immediate assistance, use our AI technician.
              </p>

              <form onSubmit={isVerifying ? handleSubmit : handleStartVerification} className="space-y-6" data-readdy-form id="contact-form">
                {!isVerifying ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 transition-all"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 transition-all"
                          placeholder="(604) 555-0123"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 appearance-none transition-all cursor-pointer"
                      >
                        <option value="">Select a service...</option>
                        <option value="heating">Heating Services</option>
                        <option value="cooling">Cooling Services</option>
                        <option value="ventilation">Ventilation Services</option>
                        <option value="air-quality">Indoor Air Quality</option>
                        <option value="plumbing">Plumbing & Water Heating</option>
                        <option value="maintenance">Maintenance Services</option>
                        <option value="commercial">Commercial HVAC</option>
                        <option value="emergency">Emergency Services</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 resize-vertical transition-all"
                        placeholder="Tell us about your HVAC needs..."
                      />
                      <p className="text-right text-xs text-gray-400 mt-1">{formData.message.length}/500</p>
                    </div>
                  </>
                ) : (
                  <div className="py-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="ri-shield-user-line text-3xl text-blue-600"></i>
                    </div>
                    <label htmlFor="verification_code" className="block text-lg font-bold text-gray-900 mb-4">
                      Enter Verification Code
                    </label>
                    <input
                      type="text"
                      id="verification_code"
                      name="verification_code"
                      required
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      placeholder="6-digit code"
                      className="w-48 px-4 py-4 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 text-center text-3xl tracking-widest font-mono mx-auto block mb-4"
                    />
                    <p className="text-sm text-gray-500">
                      We've sent a code to <span className="font-semibold text-gray-700">{formData.email}</span> to verify your request.
                    </p>
                  </div>
                )}

                {submitStatus && (
                  <div className={`p-4 rounded-xl text-sm font-medium ${submitStatus.includes('Thank you') ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-blue-50 text-blue-700 border border-blue-100'}`}>
                    <i className={`ri-${submitStatus.includes('Thank you') ? 'checkbox-circle' : 'information'}-line mr-2`}></i>
                    {submitStatus}
                  </div>
                )}

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50 shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    {isSubmitting ? 'Processing...' : (isVerifying ? 'Verify & Securely Submit' : 'Verify & Get Free Quote')}
                  </button>

                  {isVerifying ? (
                    <button
                      type="button"
                      onClick={() => setIsVerifying(false)}
                      className="w-full text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
                    >
                      Wait, let me fix something in the form
                    </button>
                  ) : (
                    <div className="text-center">
                      <span className="text-gray-400 text-sm italic">Or for instant scheduling:</span>
                      <button
                        type="button"
                        onClick={() => (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()}
                        className="block w-full mt-2 text-blue-600 font-bold hover:text-blue-700 cursor-pointer text-sm"
                      >
                        Talk to our AI Assistant Now →
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Information & AI Focus */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <i className="ri-user-voice-fill text-[180px]"></i>
                </div>
                <div className="relative z-10">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">Recommended</span>
                  <h3 className="text-3xl font-bold mb-4">Meet Your AI HVAC Technician</h3>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    Our AI assistant can diagnose common issues, provide instant ballpark quotes, and schedule emergency appointments without the wait.
                  </p>
                  <button
                    onClick={() => (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()}
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-3 shadow-xl hover:scale-105 active:scale-95 cursor-pointer text-lg"
                  >
                    <i className="ri-chat-voice-line text-xl"></i>
                    Start Talking to AI Now
                  </button>
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
    </div>
  );
}
