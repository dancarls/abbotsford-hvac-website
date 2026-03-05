'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  { name: 'Heating Services', path: '/services/heating' },
  { name: 'Cooling Services', path: '/services/cooling' },
  { name: 'Ventilation Services', path: '/services/ventilation' },
  { name: 'Indoor Air Quality', path: '/services/air-quality' },
  { name: 'Plumbing & Water Heating', path: '/services/plumbing' },
  { name: 'Maintenance Services', path: '/services/maintenance' },
  { name: 'Emergency Services', path: '/services/emergency' },
];

const serviceAreas = [
  'Abbotsford West', 'Abbotsford East', 'Clayburn Village', 'McMillan',
  'Auguston', 'Eagle Mountain', 'Sandy Hill', 'Clearbrook Centre',
  'Townline Hill', 'Mill Lake', 'West Clearbrook', 'South Clearbrook',
  'Aberdeen', 'South Poplar', 'Kilgard', 'Gifford', 'Mission',
  'Hatzic', 'Dewdney', 'Glen Valley', 'Silverhill',
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
            style={{ fontFamily: '"Pacifico", serif' }}
          >
            Abbotsford HVAC
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-semibold text-sm transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 font-semibold flex items-center text-sm transition-colors py-2">
                Services
                <i className="ri-arrow-down-s-line ml-1"></i>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border z-50 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      href={service.path}
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAreasOpen(true)}
              onMouseLeave={() => setIsAreasOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 font-semibold flex items-center text-sm transition-colors py-2">
                Service Areas
                <i className="ri-arrow-down-s-line ml-1"></i>
              </button>
              {isAreasOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border z-50 py-2 max-h-80 overflow-y-auto">
                  {serviceAreas.map((area) => {
                    const slug = area.toLowerCase().replace(/ /g, '-');
                    return (
                      <Link
                        key={slug}
                        href={`/locations/${slug}`}
                        onClick={() => setIsAreasOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {area}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-semibold text-sm transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-semibold text-sm transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-semibold text-sm transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:6045550123"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 shadow-md hover:shadow-lg transition-all text-sm whitespace-nowrap"
            >
              Call (604) 555-0123
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              {services.map((service) => (
                <Link
                  key={service.path}
                  href={service.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium pl-4 text-sm"
                >
                  {service.name}
                </Link>
              ))}
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
              <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">Blog</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
              <div className="pt-3 border-t">
                <a
                  href="tel:6045550123"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center"
                >
                  Call (604) 555-0123
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}