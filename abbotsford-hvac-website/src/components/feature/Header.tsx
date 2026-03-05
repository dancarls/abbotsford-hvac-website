
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);

  const services = [
    { name: 'Heating Services', path: '/services/heating' },
    { name: 'Cooling Services', path: '/services/cooling' },
    { name: 'Ventilation Services', path: '/services/ventilation' },
    { name: 'Indoor Air Quality', path: '/services/air-quality' },
    { name: 'Plumbing & Water Heating', path: '/services/plumbing' },
    { name: 'Maintenance Services', path: '/services/maintenance' },
    { name: 'Commercial HVAC', path: '/services/commercial' },
    { name: 'Emergency Services', path: '/services/emergency' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => window.REACT_APP_NAVIGATE?.('/')}
              className="text-2xl font-bold text-blue-600 cursor-pointer"
              style={{ fontFamily: '"Pacifico", serif' }}
            >
              Abbotsford HVAC
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => window.REACT_APP_NAVIGATE?.('/')}
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer flex items-center text-sm"
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center cursor-pointer text-sm"
              >
                Services
                <div className="w-4 h-4 flex items-center justify-center ml-1 text-xs">
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border z-50">
                  <div className="py-2">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          window.REACT_APP_NAVIGATE?.(service.path);
                          setIsServicesOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAreasOpen(true)}
              onMouseLeave={() => setIsAreasOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center cursor-pointer text-sm"
              >
                Service Areas
                <div className="w-4 h-4 flex items-center justify-center ml-1 text-xs">
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </button>

              {isAreasOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border z-50">
                  <div className="py-2">
                    {[
                      'Abbotsford West', 'Abbotsford East', 'Clayburn Village', 'McMillan',
                      'Auguston', 'Eagle Mountain', 'Sandy Hill', 'Clearbrook Centre',
                      'Townline Hill', 'Mill Lake', 'West Clearbrook', 'South Clearbrook',
                      'Aberdeen', 'South Poplar', 'Kilgard', 'Gifford', 'Mission',
                      'Hatzic', 'Dewdney', 'Glen Valley', 'Silverhill'
                    ].map((areaName, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const slug = areaName.toLowerCase().replace(/ /g, '-');
                          window.REACT_APP_NAVIGATE?.(`/service-areas/${slug}`);
                          setIsAreasOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                      >
                        {areaName}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => window.REACT_APP_NAVIGATE?.('/about')}
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer flex items-center text-sm"
            >
              About
            </button>
            <button
              onClick={() => window.REACT_APP_NAVIGATE?.('/blog')}
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer flex items-center text-sm"
            >
              Blog
            </button>
            <button
              onClick={() => window.REACT_APP_NAVIGATE?.('/contact')}
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors flex items-center text-sm"
            >
              Contact
            </button>
            <button
              onClick={() => window.REACT_APP_NAVIGATE?.('/admin')}
              className="text-blue-600 border border-blue-600 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white font-medium cursor-pointer transition-all text-sm"
            >
              Admin
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()}
              className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer whitespace-nowrap"
            >
              Talk to Our AI Assistant
            </button>
            <button
              onClick={() => (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()}
              className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  window.REACT_APP_NAVIGATE?.('/');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium text-left cursor-pointer"
              >
                Home
              </button>

              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => {
                    window.REACT_APP_NAVIGATE?.(service.path);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-blue-600 font-medium text-left pl-4 cursor-pointer"
                >
                  {service.name}
                </button>
              ))}

              <button
                onClick={() => {
                  window.REACT_APP_NAVIGATE?.('/about');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium text-left cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => {
                  window.REACT_APP_NAVIGATE?.('/blog');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium text-left cursor-pointer"
              >
                Blog
              </button>
              <button
                onClick={() => {
                  window.REACT_APP_NAVIGATE?.('/contact');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium text-left cursor-pointer"
              >
                Contact
              </button>
              <div className="pt-4 border-t">
                <button
                  onClick={() => {
                    (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click();
                    setIsMenuOpen(false);
                  }}
                  className="block text-blue-600 font-semibold mb-3 cursor-pointer"
                >
                  Talk to Our AI Assistant
                </button>
                <button
                  onClick={() => {
                    (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click();
                    setIsMenuOpen(false);
                  }}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}