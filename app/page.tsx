import Link from 'next/link';
import Header from '../components/feature/Header';
import Footer from '../components/feature/Footer';
import LeadForm from '../components/feature/LeadForm';
import { getSettings } from '../lib/getSettings';

export default function Home() {
  const settings = getSettings();

  const services = [
    {
      icon: 'ri-temp-hot-line',
      iconColor: 'text-red-600',
      bgColor: 'bg-red-50',
      title: 'Furnace Repair',
      description: 'Furnace repair, replacement, boiler service — including no-heat emergencies during Fraser Valley cold snaps. Real cost ranges and 24/7 dispatch.',
      link: '/services/furnace-repair-abbotsford'
    },
    {
      icon: 'ri-snowflake-line',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      title: 'AC Repair',
      description: 'Central AC repair and installation, ductless mini-split options — same-day dispatch for heat wave breakdowns across Abbotsford and the Fraser Valley.',
      link: '/services/ac-repair-abbotsford'
    },
    {
      icon: 'ri-leaf-line',
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      title: 'Heat Pumps',
      description: "One system for heating and cooling. Cold-climate heat pumps handle Abbotsford's winters, and BC + federal rebates stack to $1,000–$11,000+.",
      link: '/services/heat-pump-abbotsford'
    },
    {
      icon: 'ri-windy-line',
      iconColor: 'text-teal-600',
      bgColor: 'bg-teal-50',
      title: 'Ventilation & Airflow',
      description: 'HRV/ERV systems, duct cleaning, and air-balancing help with the Fraser Valley humidity that many older homes struggle to manage.',
      link: '/services/ventilation'
    },
    {
      icon: 'ri-shield-check-line',
      iconColor: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      title: 'Indoor Air Quality',
      description: 'Filtration upgrades, humidifiers, dehumidifiers, and HRV integration — especially important during wildfire smoke season and allergy season.',
      link: '/services/air-quality'
    },
    {
      icon: 'ri-tools-line',
      iconColor: 'text-slate-600',
      bgColor: 'bg-slate-50',
      title: 'Maintenance & Tune-Ups',
      description: 'Annual furnace and AC service prevents mid-season breakdowns and keeps warranties valid. Best scheduled in early fall and early spring.',
      link: '/services/maintenance'
    },
    {
      icon: 'ri-building-line',
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      title: 'Commercial HVAC',
      description: 'Rooftop units, refrigeration, and building HVAC service for Abbotsford businesses, retail spaces, and light industrial properties.',
      link: '/services/commercial'
    },
    {
      icon: 'ri-drop-line',
      iconColor: 'text-sky-600',
      bgColor: 'bg-sky-50',
      title: 'Plumbing & Water Heaters',
      description: 'Leak repairs, drain cleaning, tank and tankless water heater install, and emergency plumbing — for Abbotsford homes and the Fraser Valley.',
      link: '/services/plumbing'
    },
    {
      icon: 'ri-alarm-warning-line',
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      title: 'Emergency HVAC & Plumbing',
      description: 'No heat, no AC, burst pipe, or active leak — 24/7 emergency dispatch across Abbotsford and the Fraser Valley.',
      link: '/services/emergency'
    }
  ];

  const commonProblems = [
    {
      icon: 'ri-fire-line',
      title: 'Furnace not keeping up',
      body: 'When temperatures drop into the negatives, older furnaces in Abbotsford homes often struggle to maintain setpoint — usually a sign of an aging heat exchanger, dirty burners, or an undersized unit.',
      link: '/services/heating'
    },
    {
      icon: 'ri-snowflake-line',
      title: 'AC can\'t cool during heat waves',
      body: 'Fraser Valley summers have gotten measurably hotter. Systems installed 15+ years ago were often sized for a milder climate and can\'t handle 35°C days.',
      link: '/services/cooling'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Heat pump struggling in damp cold',
      body: 'Older heat pumps sometimes underperform in Abbotsford\'s cold, damp winters. Modern cold-climate models handle down to -25°C — worth checking if yours predates 2015.',
      link: '/services/heating'
    },
    {
      icon: 'ri-thermometer-line',
      title: 'Cold spots or uneven heating',
      body: 'Rooms that never warm up usually point to ductwork issues, poor air balancing, or a system that\'s too small for the layout — not always a broken furnace.',
      link: '/services/ventilation'
    },
    {
      icon: 'ri-water-percent-line',
      title: 'Humidity and indoor air quality',
      body: 'Homes near Mill Lake, Hatzic, or the Sumas Prairie often battle humidity. HRV systems, dehumidifiers, and proper ventilation make a bigger difference than most homeowners expect.',
      link: '/services/air-quality'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Rising utility bills',
      body: 'A furnace or heat pump that\'s 12+ years old can cost 20–30% more to run than a modern equivalent. Sometimes the payback on replacement is faster than a big repair.',
      link: '#repair-vs-replace'
    },
    {
      icon: 'ri-error-warning-line',
      title: 'Unusual furnace noises',
      body: 'Booming, rattling, or squealing sounds each point to specific issues — cracked heat exchanger, loose blower, worn belt. Some are safety concerns and shouldn\'t wait.',
      link: '/services/emergency'
    },
    {
      icon: 'ri-remote-control-line',
      title: 'Thermostat or short cycling',
      body: 'A system that turns on and off constantly is often a thermostat placement, sizing, or airflow issue — usually solvable without a full replacement.',
      link: '/services/heating'
    }
  ];

  const seasonalBlocks = [
    {
      season: 'Winter',
      months: 'Nov – Feb',
      color: 'from-blue-600 to-blue-700',
      icon: 'ri-snowy-line',
      body: 'Cold snaps and heavy wet cold are hardest on furnaces and older heat pumps. If your system was already borderline in fall, expect it to fail in January. Have the emergency number handy.',
      cta: 'Emergency Heating',
      link: '/services/emergency'
    },
    {
      season: 'Spring',
      months: 'Mar – May',
      color: 'from-emerald-600 to-emerald-700',
      icon: 'ri-plant-line',
      body: 'Best time to book AC tune-ups before summer demand, replace HRV filters, and address any air-quality issues before allergy season kicks in.',
      cta: 'AC Tune-Up',
      link: '/services/maintenance'
    },
    {
      season: 'Summer',
      months: 'Jun – Aug',
      color: 'from-amber-500 to-orange-600',
      icon: 'ri-sun-line',
      body: 'Heat waves are now normal in the Fraser Valley. AC installs and ductless mini-splits have long lead times in July — plan in May or June. Wildfire smoke season overlaps.',
      cta: 'Cooling Options',
      link: '/services/cooling'
    },
    {
      season: 'Fall',
      months: 'Sep – Nov',
      color: 'from-orange-600 to-red-600',
      icon: 'ri-leaf-line',
      body: 'Pre-winter furnace tune-up is the single best-value HVAC decision most homeowners can make. Catches issues before the first cold week when techs are booked solid.',
      cta: 'Furnace Tune-Up',
      link: '/services/maintenance'
    }
  ];

  const faqs = [
    {
      q: 'How much does a new furnace cost in Abbotsford?',
      a: 'Installed furnace prices in the Fraser Valley typically run $3,500–$8,500 depending on efficiency rating (AFUE), size, and how complex the ductwork tie-in is. High-efficiency 96% AFUE models cost more upfront but noticeably lower monthly gas bills. Get 2–3 quotes before deciding.'
    },
    {
      q: 'Are heat pumps worth it in Abbotsford\'s climate?',
      a: 'Yes — cold-climate heat pumps work efficiently well below Abbotsford\'s coldest winter temperatures, and they provide summer cooling in one system. Between BC Hydro CleanBC rebates and federal Greener Homes credits, homeowners can offset $1,000–$6,000+ of the install cost. Not every home is a fit (ductwork condition matters) — worth an on-site assessment.'
    },
    {
      q: 'How often should I service my furnace in the Fraser Valley?',
      a: 'Once a year, ideally in September or October before heating season. Abbotsford\'s damp climate is harder on burners and heat exchangers than dry-climate cities, so annual inspections catch small issues before they become mid-winter emergencies.'
    },
    {
      q: 'What rebates are available for heat pumps in BC right now?',
      a: 'BC Hydro CleanBC Better Homes program offers rebates for qualifying heat pump installations, and FortisBC has fuel-switching rebates for gas-to-electric conversions. Federal Canada Greener Homes credits stack on top. Rebate amounts change yearly — a local installer will know the current numbers and eligibility rules.'
    },
    {
      q: 'When should I repair vs. replace my furnace?',
      a: 'General rule: if the furnace is over 15 years old AND the repair quote is more than 50% of a replacement, replacement usually wins. Also consider efficiency — a 15-year-old 80% AFUE furnace costs meaningfully more to run than a modern 96% unit. And if you\'re replacing anyway, a heat pump upgrade is often worth costing out at the same time.'
    },
    {
      q: 'Do you serve areas outside Abbotsford?',
      a: 'Yes — Mission, Hatzic, Dewdney, Glen Valley, Silverhill, and other Fraser Valley communities. The listed service areas cover the main coverage zones; call to confirm for outlying addresses.'
    }
  ];

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "HVACBusiness",
      "name": "Abbotsford HVAC",
      "image": "https://www.abbotsfordhvac.ca/logo.jpg",
      "@id": "https://www.abbotsfordhvac.ca/#business",
      "url": "https://www.abbotsfordhvac.ca",
      "telephone": `+1-${settings.phoneRaw}`,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Abbotsford",
        "addressRegion": "BC",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 49.057186,
        "longitude": -122.308681
      },
      "areaServed": [
        { "@type": "City", "name": "Abbotsford" },
        { "@type": "City", "name": "Mission" },
        { "@type": "AdministrativeArea", "name": "Fraser Valley Regional District" }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "HVAC Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Furnace Installation & Repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Conditioning Installation & Repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heat Pump Systems" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ductless Mini-Split Installation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Indoor Air Quality Solutions" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial HVAC Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Emergency HVAC Service" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HVAC Maintenance Plans" } }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.abbotsfordhvac.ca",
      "name": "Abbotsford HVAC"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Header />

      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.45)), url('/images/hvac-maintenance-abbotsford-hero.png')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              HVAC Help in <span className="text-blue-400">Abbotsford</span> & the Fraser Valley
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-100 leading-relaxed">
              Furnace won&apos;t keep up on a cold morning? AC struggling in July heat? Wondering whether a heat pump makes sense for your home?
              Get straight answers and a fast path to a local Abbotsford HVAC installer — including 24/7 for real emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${settings.phoneRaw}`}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
              >
                <i className="ri-phone-fill text-2xl"></i>
                Call {settings.phoneNumber}
              </a>
              <Link
                href="#common-problems"
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <i className="ri-question-line text-xl"></i>
                Common HVAC Problems
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-300">
              No high-pressure sales. Get info first, then decide whether service or replacement makes sense.
            </p>
          </div>
        </div>
      </section>

      {/* Trust bar + inline lead form */}
      <section id="service-form" className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3 grid sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <i className="ri-map-pin-2-line text-3xl text-blue-600 mb-2"></i>
                <p className="font-semibold text-gray-900">Local to Abbotsford</p>
                <p className="text-sm text-gray-600">Abbotsford, Mission, and Fraser Valley communities</p>
              </div>
              <div className="flex flex-col items-center">
                <i className="ri-timer-flash-line text-3xl text-red-600 mb-2"></i>
                <p className="font-semibold text-gray-900">24/7 Emergency Line</p>
                <p className="text-sm text-gray-600">No heat, no cool, gas smell — call any time</p>
              </div>
              <div className="flex flex-col items-center">
                <i className="ri-hand-heart-line text-3xl text-emerald-600 mb-2"></i>
                <p className="font-semibold text-gray-900">Straight Talk</p>
                <p className="text-sm text-gray-600">Real information about repair-vs-replace, rebates, and options</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <LeadForm source="homepage-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Abbotsford HVAC searches — keyword-anchored quick links */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">Popular in Abbotsford</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <Link href="/services/furnace-repair-abbotsford" className="inline-flex items-center px-4 py-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:text-blue-700 transition-all">
              Furnace repair in Abbotsford
            </Link>
            <Link href="/services/ac-repair-abbotsford" className="inline-flex items-center px-4 py-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:text-blue-700 transition-all">
              AC repair in Abbotsford
            </Link>
            <Link href="/services/ac-repair-abbotsford" className="inline-flex items-center px-4 py-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:text-blue-700 transition-all">
              Air conditioning Abbotsford
            </Link>
            <Link href="/services/heat-pump-abbotsford" className="inline-flex items-center px-4 py-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:text-blue-700 transition-all">
              Heat pump Abbotsford
            </Link>
            <Link href="/services/emergency" className="inline-flex items-center px-4 py-2 bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-full text-sm font-medium text-gray-700 hover:text-red-700 transition-all">
              Emergency HVAC Abbotsford
            </Link>
            <Link href="/services/plumbing" className="inline-flex items-center px-4 py-2 bg-gray-50 hover:bg-sky-50 border border-gray-200 hover:border-sky-200 rounded-full text-sm font-medium text-gray-700 hover:text-sky-700 transition-all">
              Plumber Abbotsford
            </Link>
            <Link href="/services/plumbing" className="inline-flex items-center px-4 py-2 bg-gray-50 hover:bg-sky-50 border border-gray-200 hover:border-sky-200 rounded-full text-sm font-medium text-gray-700 hover:text-sky-700 transition-all">
              Water heater Abbotsford
            </Link>
            <Link href="/blog/bc-heat-pump-rebates-abbotsford" className="inline-flex items-center px-4 py-2 bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 rounded-full text-sm font-medium text-gray-700 hover:text-emerald-700 transition-all">
              BC heat pump rebates
            </Link>
            <Link href="/services/maintenance" className="inline-flex items-center px-4 py-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:text-blue-700 transition-all">
              HVAC maintenance Abbotsford
            </Link>
          </div>
        </div>
      </section>

      {/* Common HVAC Problems */}
      <section id="common-problems" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common HVAC Problems in Abbotsford Homes
            </h2>
            <p className="text-lg text-gray-600">
              People searching for HVAC help in Abbotsford are usually dealing with one of these. Click through for what to check, when to call, and how much a fix typically costs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commonProblems.map((p, i) => (
              <Link
                key={i}
                href={p.link}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <i className={`${p.icon} text-2xl text-blue-600`} aria-hidden="true"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              HVAC Services in Abbotsford
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Heating, cooling, air quality, and emergency HVAC service across Abbotsford and the Fraser Valley.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 group">
                <div className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center mb-5 transform group-hover:scale-105 transition-transform`}>
                  <i className={`${service.icon} text-2xl ${service.iconColor}`} aria-hidden="true"></i>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-5 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                >
                  Learn more <i className="ri-arrow-right-line"></i>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Repair vs Replace */}
      <section id="repair-vs-replace" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Repair or Replace? Here&apos;s How to Think About It
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                When a big HVAC repair bill lands in front of an Abbotsford homeowner, the question is usually the same: is this worth fixing, or is it time to replace? A few honest factors usually decide it.
              </p>
              <a
                href={`tel:${settings.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md"
              >
                <i className="ri-phone-fill"></i>
                Talk it through: {settings.phoneNumber}
              </a>
            </div>
            <div className="space-y-4">
              {[
                { title: 'System age', body: 'Furnaces past 15 years and heat pumps past 12 years are candidates for replacement even if they still run.' },
                { title: 'The 50% rule', body: 'If a repair quote is more than 50% of a new install and the unit is old, replacement usually wins on 5-year cost.' },
                { title: 'Efficiency drift', body: 'Older equipment can cost 20–30% more to run than modern high-efficiency units — that money adds up fast.' },
                { title: 'Comfort issues', body: 'Uneven heating, humidity problems, or short cycling often mean sizing or ductwork issues that a repair won\'t solve.' },
                { title: 'BC rebate window', body: 'Heat pump rebates from BC Hydro and FortisBC can shift the math significantly on replacement. Worth checking current amounts before deciding.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Planning */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              HVAC Planning by Season in the Fraser Valley
            </h2>
            <p className="text-lg text-gray-600">
              The best time to deal with each HVAC concern isn&apos;t always the one that feels urgent. Here&apos;s the rhythm most Abbotsford homeowners benefit from.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalBlocks.map((s, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md group hover:shadow-xl transition-all">
                <div className={`bg-gradient-to-br ${s.color} text-white p-6`}>
                  <i className={`${s.icon} text-4xl mb-3 block`}></i>
                  <h3 className="text-2xl font-bold">{s.season}</h3>
                  <p className="text-sm opacity-90">{s.months}</p>
                </div>
                <div className="bg-white p-6 flex flex-col h-full">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">{s.body}</p>
                  <Link
                    href={s.link}
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors inline-flex items-center gap-1 mt-auto"
                  >
                    {s.cta} <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Abbotsford & Fraser Valley Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Coverage across Abbotsford neighbourhoods and nearby Fraser Valley communities. Local pages for each area have neighbourhood-specific HVAC context.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83325.24904165726!2d-122.38308678476562!3d49.05718584863281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d4c89d72c663%3A0x4a2b36750554ba72!2sAbbotsford%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sus!4v1704835000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="Abbotsford HVAC Service Areas Map"
              ></iframe>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {['Abbotsford West', 'Abbotsford East', 'Clayburn Village', 'McMillan', 'Auguston', 'Eagle Mountain', 'Sandy Hill', 'Clearbrook Centre', 'Townline Hill', 'Mill Lake', 'West Clearbrook', 'South Clearbrook', 'Aberdeen', 'South Poplar', 'Kilgard', 'Gifford', 'Mission', 'Hatzic', 'Dewdney', 'Glen Valley', 'Silverhill'].map((areaName, index) => (
                  <Link
                    key={index}
                    href={`/locations/${areaName.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-center text-left hover:text-blue-600 transition-all cursor-pointer group"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(37,99,235,0.6)] transition-all" aria-hidden="true"></div>
                    <span className="text-gray-700 font-semibold group-hover:translate-x-1 transition-transform text-sm">{areaName}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-600 rounded-2xl shadow-lg">
                <p className="text-blue-100 font-medium mb-1 text-sm uppercase tracking-wider">Don&apos;t see your area?</p>
                <h4 className="text-xl font-bold text-white mb-4 leading-tight">Give us a call — coverage is often broader than the list.</h4>
                <a
                  href={`tel:${settings.phoneRaw}`}
                  className="inline-flex bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <i className="ri-phone-fill"></i>
                  Call {settings.phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              HVAC Questions Abbotsford Homeowners Actually Ask
            </h2>
            <p className="text-lg text-gray-600">
              Straight answers with real Fraser Valley context — not generic marketing copy.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{f.q}</h3>
                  <i className="ri-add-line text-2xl text-blue-600 group-open:rotate-45 transition-transform flex-shrink-0"></i>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Question not covered?</p>
            <a
              href={`tel:${settings.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md"
            >
              <i className="ri-phone-fill"></i>
              Call {settings.phoneNumber}
            </a>
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              HVAC Guides for Fraser Valley Homeowners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Practical guides for Abbotsford homes — from AC tune-up costs to whether a mini-split is right for your suite.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AC Maintenance in Abbotsford: What\'s Included in a Summer Tune-Up',
                excerpt: 'What a proper AC tune-up covers, how it lowers your bills, and why to book before the next heat wave.',
                image: '/images/ac-maintenance-abbotsford-hero.png',
                slug: 'ac-maintenance-abbotsford-summer-tune-up',
                category: 'AC Maintenance'
              },
              {
                title: 'AC Not Cooling in Abbotsford? 7 Checks Before You Call',
                excerpt: 'Seven safe checks to run yourself, common repair causes, typical costs, and when replacement makes more sense.',
                image: '/images/ac-not-cooling-abbotsford-hero.png',
                slug: 'ac-not-cooling-abbotsford-repair',
                category: 'AC Repair'
              },
              {
                title: 'Ductless Mini-Splits in Abbotsford: Hot Rooms, Suites & Additions',
                excerpt: 'When a mini-split beats extending ductwork, real install costs, and how BC rebates offset $1,000–$6,000.',
                image: '/images/ductless-mini-split-abbotsford-hero.png',
                slug: 'ductless-mini-split-cooling-abbotsford',
                category: 'Mini-Splits'
              }
            ].map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div className="relative">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover object-top" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">{post.category}</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors mt-auto inline-flex items-center gap-1"
                  >
                    Read the guide <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Browse all HVAC guides <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need HVAC Help in Abbotsford?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Call for emergency service, book a tune-up, or just get straight answers about repair vs. replacement. No pushy sales — just a fast path to the right decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${settings.phoneRaw}`}
              className="bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all shadow-xl inline-flex items-center justify-center gap-3"
            >
              <i className="ri-phone-fill text-2xl"></i>
              Call {settings.phoneNumber}
            </a>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              <i className="ri-mail-line"></i>
              Contact options
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
