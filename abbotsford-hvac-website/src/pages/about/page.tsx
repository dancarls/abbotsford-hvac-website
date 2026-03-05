
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20team%20working%20on%20modern%20heating%20and%20cooling%20systems%20in%20a%20clean%20workshop%20environment%20with%20tools%20and%20equipment%2C%20emphasizing%20expertise%20and%20reliability%20in%20British%20Columbia%20Canada&width=1200&height=600&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">About Abbotsford HVAC</h1>
            <p className="text-xl leading-relaxed">
              Your trusted local HVAC experts with over 15 years of experience serving Abbotsford and the Fraser Valley
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, Abbotsford HVAC began as a family-owned business with a simple mission: to provide reliable, professional heating and cooling services to our local community. What started as a small operation has grown into the Fraser Valley's most trusted HVAC company.
                </p>
                <p>
                  Over the years, we've installed thousands of heating and cooling systems, performed countless repairs, and helped families stay comfortable year-round. Our commitment to quality workmanship, honest pricing, and exceptional customer service has earned us a reputation as Abbotsford's premier HVAC contractor.
                </p>
                <p>
                  Today, we're proud to serve not just Abbotsford, but the entire Fraser Valley region, bringing the same dedication and expertise that built our reputation to every job we undertake.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20HVAC%20company%20office%20building%20exterior%20with%20company%20vehicles%20parked%20outside%2C%20professional%20business%20appearance%20in%20Abbotsford%20British%20Columbia%2C%20clean%20architectural%20design%20with%20glass%20windows&width=600&height=500&seq=company-building&orientation=landscape"
                alt="Abbotsford HVAC Office"
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and ensure we deliver the best possible service to our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Reliability</h3>
              <p className="text-gray-600">
                We show up on time, complete work as promised, and stand behind our services with comprehensive warranties.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer First</h3>
              <p className="text-gray-600">
                Your comfort and satisfaction are our top priorities. We listen to your needs and provide personalized solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Our certified technicians bring years of experience and ongoing training to every job, ensuring quality results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-hand-heart-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Honesty & Integrity</h3>
              <p className="text-gray-600">
                We provide transparent pricing, honest assessments, and ethical business practices in all our interactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-leaf-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Environmental Responsibility</h3>
              <p className="text-gray-600">
                We promote energy-efficient solutions and proper disposal practices to minimize environmental impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-community-line text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Focused</h3>
              <p className="text-gray-600">
                As a local business, we're committed to supporting our community and building lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified technicians and support staff are dedicated to providing exceptional HVAC services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20HVAC%20company%20owner%20manager%20in%20business%20attire%20standing%20confidently%20in%20modern%20office%20environment%2C%20middle-aged%20experienced%20leader%2C%20clean%20professional%20appearance&width=400&height=300&seq=team-owner&orientation=landscape"
                alt="Mike Thompson - Owner"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mike Thompson</h3>
                <p className="text-blue-600 font-medium mb-3">Owner & Founder</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years in the HVAC industry, Mike founded Abbotsford HVAC to bring reliable, honest service to the Fraser Valley.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Experienced%20HVAC%20technician%20in%20uniform%20working%20on%20heating%20system%2C%20professional%20appearance%20with%20tools%2C%20expertise%20and%20competence%20in%20residential%20setting&width=400&height=300&seq=team-tech1&orientation=landscape"
                alt="Sarah Chen - Lead Technician"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sarah Chen</h3>
                <p className="text-blue-600 font-medium mb-3">Lead Technician</p>
                <p className="text-gray-600 text-sm">
                  Red Seal certified with 15 years experience, Sarah specializes in complex installations and system diagnostics.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20customer%20service%20representative%20in%20modern%20office%20environment%2C%20friendly%20approachable%20person%20answering%20phone%20calls%2C%20clean%20business%20atmosphere&width=400&height=300&seq=team-service&orientation=landscape"
                alt="David Kim - Service Manager"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">David Kim</h3>
                <p className="text-blue-600 font-medium mb-3">Service Manager</p>
                <p className="text-gray-600 text-sm">
                  David coordinates our service operations and ensures every customer receives prompt, professional attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by industry organizations and satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-3xl text-blue-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Red Seal Certified</h4>
              <p className="text-sm text-gray-600">All technicians certified</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-3xl text-green-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h4>
              <p className="text-sm text-gray-600">Fully bonded business</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-3xl text-orange-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">BBB A+ Rating</h4>
              <p className="text-sm text-gray-600">Accredited member</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-medal-line text-3xl text-purple-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Awards Winner</h4>
              <p className="text-sm text-gray-600">Local business excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <i className="ri-user-voice-fill text-[200px] text-white"></i>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Better HVAC Service?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Our AI HVAC Assistant is standing by 24/7 to help you with troubleshooting, quotes, or scheduling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()}
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center gap-2 text-lg"
            >
              <i className="ri-chat-voice-line"></i>
              Talk to Our AI Assistant
            </button>
            <button
              onClick={() => window.REACT_APP_NAVIGATE?.('/contact')}
              className="bg-blue-500 border border-blue-400/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-400 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer text-lg"
            >
              Get a Quote Online
            </button>
          </div>
          <p className="mt-8 text-blue-100 text-sm font-medium">
            <i className="ri-shield-flash-line mr-2"></i>
            24/7 Priority Emergency Dispatching Available
          </p>
        </div>
      </section>
    </div>
  );
}
