
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Abbotsford</span>
              <span className="text-green-400"> HVAC</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted local HVAC experts serving Abbotsford, BC and surrounding areas with professional heating, cooling, and air quality solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-facebook-fill text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-instagram-line text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-google-fill text-xl"></i>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Services</Link></li>
              <li><Link to="/service-areas" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Service Areas</Link></li>
              <li><Link to="/maintenance-plans" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Maintenance Plans</Link></li>
              <li><Link to="/commercial" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Commercial HVAC</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Furnace Installation & Repair</span></li>
              <li><span className="text-gray-300">Air Conditioning Services</span></li>
              <li><span className="text-gray-300">Heat Pump Solutions</span></li>
              <li><span className="text-gray-300">Ductless Mini-Splits</span></li>
              <li><span className="text-gray-300">Indoor Air Quality</span></li>
              <li><span className="text-gray-300">24/7 Emergency Service</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mt-1 mr-3">
                  <i className="ri-map-pin-line text-blue-400"></i>
                </div>
                <span className="text-gray-300">123 Main Street, Abbotsford, BC V2S 0A3</span>
              </div>
              <div className="text-gray-300">
                <p>Mon-Sun: 24/7 Service Available</p>
                <p className="text-blue-400 font-semibold mt-2">Captured & Managed by AI Assistant</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Abbotsford HVAC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <a
                href="https://readdy.ai/?origin=logo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Website Builder
              </a>
              <span className="text-gray-600">|</span>
              <Link to="/admin" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}