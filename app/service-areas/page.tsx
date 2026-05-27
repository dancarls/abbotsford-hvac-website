import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import geoData from '../../lib/data/geo-service-data.json';

export const metadata: Metadata = {
  title: "HVAC Service Areas in Abbotsford & Fraser Valley, BC",
  description: "Abbotsford HVAC serves all Abbotsford neighbourhoods plus Mission, Hatzic, Dewdney, Glen Valley and surrounding Fraser Valley communities. Fast response, licensed technicians.",
  alternates: { canonical: 'https://www.abbotsfordhvac.ca/service-areas' },
  openGraph: {
    title: "HVAC Service Areas in Abbotsford & Fraser Valley | Abbotsford HVAC",
    description: "Licensed HVAC technicians serving all Abbotsford neighbourhoods and the broader Fraser Valley. Furnace, AC, heat pump & emergency service available 24/7.",
  }
};

const serviceAreasSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": "https://www.abbotsfordhvac.ca/#business",
  "name": "Abbotsford HVAC",
  "url": "https://www.abbotsfordhvac.ca",
  "areaServed": geoData.areas.map(area => ({
    "@type": "Place",
    "name": area.name
  }))
};

export default function ServiceAreasPage() {
  const abbotsfordAreas = geoData.areas.filter(a =>
    !['mission', 'hatzic', 'dewdney', 'glen-valley', 'silverhill'].includes(a.slug)
  );
  const fraserValleyAreas = geoData.areas.filter(a =>
    ['mission', 'hatzic', 'dewdney', 'glen-valley', 'silverhill'].includes(a.slug)
  );

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreasSchema) }} />
      <Header />

      <section className="relative py-20 overflow-hidden bg-blue-800 text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Abbotsford%20BC%20residential%20neighbourhood%20aerial%20view%2C%20Fraser%20Valley%20suburban%20homes%2C%20community%20landscape%2C%20professional%20HVAC%20service%20area&width=1920&height=600&seq=service-areas-hero-1&orientation=landscape')`
          }}
        />
        <div className="absolute inset-0 bg-blue-800/65" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">HVAC Service Areas</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Serving Abbotsford neighbourhoods and the broader Fraser Valley with licensed heating, cooling, and air quality services.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Abbotsford Neighbourhoods</h2>
            <p className="text-gray-600 mb-8">We cover every neighbourhood in Abbotsford with same-day service and 24/7 emergency response.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {abbotsfordAreas.map(area => (
                <Link
                  key={area.slug}
                  href={`/locations/${area.slug}`}
                  className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-gray-100 transition-all"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform flex-shrink-0"></div>
                  <span className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{area.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Fraser Valley Communities</h2>
            <p className="text-gray-600 mb-8">Our service area extends beyond Abbotsford into Mission and surrounding Fraser Valley communities.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {fraserValleyAreas.map(area => (
                <Link
                  key={area.slug}
                  href={`/locations/${area.slug}`}
                  className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-gray-100 transition-all"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform flex-shrink-0"></div>
                  <span className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{area.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Don't See Your Area?</h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">We may still be able to help. Contact us and we'll let you know if we can dispatch a technician to your location.</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
