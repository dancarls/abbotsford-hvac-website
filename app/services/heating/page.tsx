import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { getSettings } from '@/lib/getSettings';
import geoData from '@/lib/data/geo-service-data.json';

export const metadata: Metadata = {
  title: "Furnace & Heating Services in Abbotsford, BC",
  description: "Furnace repair, replacement, and heat pump options for Abbotsford and Fraser Valley homes. Real cost ranges, BC rebate info, and 24/7 emergency help.",
  alternates: { canonical: 'https://www.abbotsfordhvac.ca/services/heating' },
  openGraph: {
    title: "Furnace & Heating Services in Abbotsford, BC | Abbotsford HVAC",
    description: "Furnace repair, replacement, and heat pump options for Abbotsford homes. Real costs, BC rebates, 24/7 emergency help.",
    images: ['https://www.abbotsfordhvac.ca/images/hvac-maintenance-abbotsford-hero.png']
  }
};

const faqs = [
  {
    q: 'How much does a new furnace cost in Abbotsford?',
    a: 'Installed furnace prices in the Fraser Valley typically run $3,500–$8,500 for high-efficiency gas units. Factors: AFUE rating (90–96%+), size, brand, and ductwork tie-in. Cheapest quotes often skip permits or use lower-tier equipment — worth comparing 2–3 quotes at similar spec.'
  },
  {
    q: 'How often should I service my furnace in the Fraser Valley?',
    a: 'Once a year, ideally in September or October before heating season. Abbotsford\'s damp climate is harder on burners and heat exchangers than dry-climate cities, so annual inspections catch small issues before they become mid-winter emergencies.'
  },
  {
    q: 'What are the warning signs my furnace needs repair?',
    a: 'Unusual noises (booms on startup, rattling, squealing), yellow or flickering pilot light, uneven heating between rooms, frequent short cycling, rising gas bills without weather changes, and a furnace over 15 years old. Booming sounds and CO alarms should be treated as urgent.'
  },
  {
    q: 'Should I repair or replace my furnace?',
    a: 'General rule: if the furnace is over 15 years old AND the repair quote is more than 50% of a replacement, replacement usually wins on 5-year cost. Also worth costing out a heat pump upgrade at the same time — BC rebates can shift the math significantly.'
  },
  {
    q: 'Is a heat pump a good option in Abbotsford\'s climate?',
    a: 'Yes for most homes. Cold-climate heat pumps work efficiently well below Abbotsford\'s coldest winter temperatures and provide summer cooling in one system. Between BC Hydro CleanBC rebates and Canada Greener Homes credits, $1,000–$6,000+ of the install cost can typically be offset. Ductwork condition matters — worth an on-site assessment.'
  },
  {
    q: 'How long does a furnace typically last?',
    a: 'Modern gas furnaces: 15–20 years with annual maintenance. Older mid-efficiency units (80% AFUE) often push to 25+ years but cost noticeably more to run. Heat pumps: 12–15 years. Warranties commonly cover parts for 10 years and heat exchanger for 20.'
  },
  {
    q: 'What brands of furnace hold up best in the Fraser Valley?',
    a: 'Carrier, Lennox, Trane, Rheem, and Goodman all have solid reputations. Bigger factor than brand: installer quality. A well-installed mid-tier furnace outlasts a poorly installed premium one. Ask about warranty registration and combustion analysis on install.'
  },
  {
    q: 'Do you offer 24/7 emergency heating repair?',
    a: 'Yes — no-heat calls during Fraser Valley cold snaps are treated as urgent. Call any time. If you smell gas, leave the house first and call the emergency line from outside.'
  }
];

const heatingSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Heating Services in Abbotsford, BC",
    "description": "Furnace repair, replacement, heat pump installation, and 24/7 emergency heating service across Abbotsford and the Fraser Valley.",
    "provider": { "@type": "HVACBusiness", "@id": "https://www.abbotsfordhvac.ca/#business" },
    "areaServed": { "@type": "City", "name": "Abbotsford" },
    "serviceType": ["Furnace Installation", "Furnace Repair", "Heat Pump Installation", "Boiler Services", "Emergency Heating Repair"]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.abbotsfordhvac.ca" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.abbotsfordhvac.ca/services/heating" },
      { "@type": "ListItem", "position": 3, "name": "Heating", "item": "https://www.abbotsfordhvac.ca/services/heating" }
    ]
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

export default function HeatingServices() {
  const settings = getSettings();

  const commonProblems = [
    { icon: 'ri-fire-line', title: 'Furnace won\'t start on a cold morning', body: 'Often a thermostat, ignition, or flame-sensor issue. Sometimes a tripped high-limit switch. Usually diagnosable in under 30 minutes.' },
    { icon: 'ri-volume-up-line', title: 'Booming, rattling, or squealing noises', body: 'Different sounds point to different problems — delayed ignition (boom), loose blower (rattle), worn belt (squeal). Some are safety concerns.' },
    { icon: 'ri-thermometer-line', title: 'Cold spots or uneven heating', body: 'Usually ductwork or air balancing rather than the furnace itself. An undersized unit for a renovated/expanded home shows the same symptom.' },
    { icon: 'ri-loader-line', title: 'Short cycling (on/off every few minutes)', body: 'Often oversized furnace, dirty filter, or thermostat placement. Cheap to diagnose, expensive to ignore — short cycling wears out components fast.' },
    { icon: 'ri-money-dollar-circle-line', title: 'Gas bills climbing year over year', body: 'A 15-year-old 80% AFUE furnace burns ~20% more gas than a modern 96% unit for the same heat output. Payback on replacement can be 5–8 years.' },
    { icon: 'ri-error-warning-line', title: 'Pilot light or ignition problems', body: 'Yellow or flickering pilot suggests combustion issues that can produce carbon monoxide. Not a DIY fix.' }
  ];

  const services = [
    { icon: 'ri-fire-line', title: 'Furnace Repair', body: 'Same-day diagnosis for most breakdowns. Common parts (ignitors, flame sensors, blower motors, thermostats) stocked for one-visit repairs when possible.' },
    { icon: 'ri-hammer-line', title: 'Furnace Replacement', body: 'High-efficiency gas furnace installs with permits and inspection handled. Free replacement quotes with 2–3 tier options to compare.' },
    { icon: 'ri-leaf-line', title: 'Heat Pump Installation', body: 'Cold-climate heat pumps that work in Fraser Valley winters. Rebate paperwork help so you don\'t leave BC Hydro / Greener Homes money on the table.' },
    { icon: 'ri-water-percent-line', title: 'Boiler Service', body: 'Hydronic and combi-boiler service and replacement. Common in older Abbotsford homes with radiant floor or radiator heat.' },
    { icon: 'ri-tools-line', title: 'Annual Maintenance', body: 'Pre-winter tune-up: combustion analysis, cleaning, safety checks, filter change. Best-value HVAC decision most homeowners make each year.' },
    { icon: 'ri-alarm-warning-line', title: '24/7 No-Heat Emergency', body: 'Cold snap and no heat? Priority dispatch, honest triage — no upsell during an emergency.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(heatingSchema) }} />
      <Header />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-blue-900">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/heat-pump-vs-furnace-abbotsford-hero.png')` }} />
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Furnace & Heating Help in <span className="text-blue-300">Abbotsford</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-100 leading-relaxed">
              Furnace won&apos;t start? Booming noises on ignition? Heat pump underperforming in damp cold? Get a straight diagnosis and a fair repair-vs-replace conversation from a local Abbotsford HVAC installer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${settings.phoneRaw}`} className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl inline-flex items-center justify-center gap-2">
                <i className="ri-phone-fill text-2xl"></i>
                Call {settings.phoneNumber}
              </a>
              <Link href="#common-heating-problems" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2">
                <i className="ri-question-line"></i>
                Common furnace problems
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section id="common-heating-problems" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Common Furnace & Heating Problems in Abbotsford</h2>
            <p className="text-lg text-gray-600">What people usually call about — and what they usually turn out to be.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {commonProblems.map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${p.icon} text-2xl text-blue-600`} aria-hidden="true"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services covered */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Heating Service Covers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Furnace, boiler, and heat pump work across Abbotsford and the Fraser Valley.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all border border-gray-100">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                  <i className={`${s.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost transparency */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Heating Work Actually Costs in Abbotsford</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real ranges from local quotes — not marketing "starting from" numbers.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Furnace tune-up / maintenance', range: '$150 – $250', note: 'Combustion analysis, cleaning, filter, safety check' },
              { label: 'Common furnace repair (ignitor, flame sensor, capacitor)', range: '$250 – $600', note: 'Diagnosis + part + labour, most single-visit repairs' },
              { label: 'Blower motor or control board replacement', range: '$600 – $1,400', note: 'Bigger parts, still often repairable if unit is under 12 years old' },
              { label: 'New furnace installed (high-efficiency gas)', range: '$3,500 – $8,500', note: 'Depends on AFUE, size, brand, duct tie-in complexity' },
              { label: 'Heat pump installed (air-source, cold-climate)', range: '$8,000 – $18,000', note: 'Before BC + federal rebates, which can offset $1,000–$6,000+' },
              { label: 'Boiler service / replacement', range: '$400 – $12,000', note: 'Wide range — small service to full high-efficiency boiler swap' }
            ].map((c, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-1">{c.label}</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{c.range}</div>
                <div className="text-xs text-gray-500">{c.note}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 italic text-center mt-6">
            Ranges reflect typical Fraser Valley installer quotes in 2026. Actual quote depends on your home. Get 2–3 comparisons for anything over $2,000.
          </p>
        </div>
      </section>

      {/* Heat pump vs furnace decision */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Heat Pump vs. New Furnace — Which Makes Sense?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When it&apos;s time to replace, Abbotsford homeowners now have a real choice — not just a like-for-like furnace swap. Modern cold-climate heat pumps handle Fraser Valley winters, provide summer AC, and stack with BC and federal rebates.
              </p>
              <Link href="/blog/bc-heat-pump-rebates-abbotsford" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md">
                Read the BC Heat Pump Rebate guide <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { title: 'One system for heat + AC', body: 'A heat pump provides both — no separate AC install later.' },
                { title: 'BC rebates shift the math', body: 'CleanBC + Greener Homes can offset $1,000–$6,000+ on qualifying installs.' },
                { title: 'Lower operating cost', body: 'Electric heat pump is often cheaper to run than gas at BC rates.' },
                { title: 'Ductwork condition matters', body: 'Not every home is a fit — old undersized ducts can be a limiter.' },
                { title: 'Backup heat is standard', body: 'Cold-climate heat pumps typically pair with an electric or gas backup for the coldest days.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-white p-4 rounded-xl border border-blue-100">
                  <i className="ri-check-line text-emerald-600 text-xl flex-shrink-0 mt-0.5"></i>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Heating Service Areas</h2>
            <p className="text-lg text-gray-600">Abbotsford neighbourhoods and nearby Fraser Valley communities.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
            {geoData.areas.map((area) => (
              <Link key={area.slug} href={`/locations/${area.slug}`} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all group">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Furnace & Heating FAQ</h2>
            <p className="text-lg text-gray-600">Real questions from Abbotsford homeowners.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{f.q}</h3>
                  <i className="ri-add-line text-2xl text-blue-600 group-open:rotate-45 transition-transform flex-shrink-0"></i>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <i className="ri-alarm-warning-fill text-5xl mb-4 block"></i>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">No Heat in the Middle of a Cold Snap?</h2>
          <p className="text-lg text-red-100 mb-8">
            Furnace failures happen most often on the coldest nights — because that&apos;s when your system is working hardest. Call 24/7 for priority emergency dispatch across Abbotsford and the Fraser Valley.
          </p>
          <a href={`tel:${settings.phoneRaw}`} className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-50 transition-all shadow-xl">
            <i className="ri-phone-fill text-2xl"></i>
            Call {settings.phoneNumber}
          </a>
          <p className="mt-4 text-sm text-red-200">
            Smell gas? Leave the house first, then call from outside.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
