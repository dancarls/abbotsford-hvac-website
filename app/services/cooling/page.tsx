import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { getSettings } from '@/lib/getSettings';
import geoData from '@/lib/data/geo-service-data.json';

export const metadata: Metadata = {
  title: "AC & Cooling Services in Abbotsford, BC",
  description: "Air conditioning repair, installation, and ductless mini-splits for Abbotsford. Real costs, heat wave prep, and Fraser Valley-specific cooling advice.",
  alternates: { canonical: 'https://www.abbotsfordhvac.ca/services/cooling' },
  openGraph: {
    title: "AC & Cooling Services in Abbotsford, BC | Abbotsford HVAC",
    description: "Air conditioning repair, installation, and ductless mini-splits for Abbotsford. Real costs, heat wave prep, Fraser Valley context.",
    images: ['https://www.abbotsfordhvac.ca/images/ac-maintenance-abbotsford-hero.png']
  }
};

const faqs = [
  {
    q: 'How much does AC installation cost in Abbotsford?',
    a: 'Central AC installed on an existing furnace: typically $4,500–$8,500. Full central AC install with new ductwork: $8,000–$15,000+. Ductless mini-split: $3,500–$6,500 for a single-zone; $8,000–$18,000 for multi-zone. Wide ranges come from tonnage, brand, SEER2 rating, and electrical work needed.'
  },
  {
    q: 'My AC won\'t cool. What\'s the fastest thing to check?',
    a: 'Three quick checks before calling: (1) thermostat set to Cool, not Fan; (2) breaker for the AC outdoor unit — often trips during heat waves; (3) filter clogged? A dirty filter can freeze the coil and stop cooling entirely. If those check out, it\'s time for a diagnostic.'
  },
  {
    q: 'Is a ductless mini-split worth it in Abbotsford?',
    a: 'Often yes — especially for older homes without ductwork, basement suites, home offices, or hot upstairs rooms. Mini-splits also work as heat pumps in winter. BC Hydro rebates can offset $1,000–$3,000 on qualifying installs. Downside: higher upfront cost per zone than window units.'
  },
  {
    q: 'How often should I service my AC?',
    a: 'Once a year, ideally in spring (April/May) before demand ramps up. A tune-up includes coil cleaning, refrigerant check, capacitor test, and filter — usually catches issues before they become mid-July emergencies when installers are booked out weeks.'
  },
  {
    q: 'What SEER / SEER2 rating should I look for?',
    a: 'SEER2 14 is the current minimum. SEER2 16–18 is the value sweet spot for the Fraser Valley — extra efficiency pays back in 3–5 years. SEER2 20+ is worth it only if you run AC heavily (heat dome country) or plan to stay 10+ years.'
  },
  {
    q: 'Why is my AC freezing up (ice on the outdoor unit)?',
    a: 'Almost always one of: dirty filter, blocked airflow (closed vents), low refrigerant (leak), or a failing blower motor. Turn the unit off and let it thaw before calling — running a frozen unit damages the compressor.'
  },
  {
    q: 'How long does an AC system last?',
    a: 'Central AC: 12–18 years in the Fraser Valley. Ductless mini-splits: 15–20 years with maintenance. Cold-climate heat pumps that provide cooling: 12–15 years. Refrigerant type matters — older R-22 systems are expensive to service now, often faster to replace.'
  },
  {
    q: 'Should I replace my old AC and furnace together?',
    a: 'Usually yes when both are 15+ years old. Modern AC/heat-pump units are engineered to pair with matching efficiency furnaces — a mismatched pair can lose 15–20% efficiency and void some warranties. A heat pump upgrade often makes sense at this crossroads.'
  }
];

const coolingSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Air Conditioning Services in Abbotsford, BC",
    "description": "Central AC installation, ductless mini-split systems, AC repair, and cooling emergency service across Abbotsford and the Fraser Valley.",
    "provider": { "@type": "HVACBusiness", "@id": "https://www.abbotsfordhvac.ca/#business" },
    "areaServed": { "@type": "City", "name": "Abbotsford" },
    "serviceType": ["Air Conditioning Installation", "AC Repair", "Ductless Mini-Split Installation", "AC Maintenance", "Emergency AC Repair"]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.abbotsfordhvac.ca" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.abbotsfordhvac.ca/services/cooling" },
      { "@type": "ListItem", "position": 3, "name": "Cooling", "item": "https://www.abbotsfordhvac.ca/services/cooling" }
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

export default function CoolingServices() {
  const settings = getSettings();

  const commonProblems = [
    { icon: 'ri-snowflake-line', title: 'AC running but not cooling', body: 'Low refrigerant, dirty coil, or failed capacitor are the top three causes. Filter check is the free first step.' },
    { icon: 'ri-flashlight-line', title: 'Outside unit not running at all', body: 'Tripped breaker, blown capacitor, or contactor failure. Common after summer thunderstorms and heat waves.' },
    { icon: 'ri-water-percent-line', title: 'Ice on the AC unit', body: 'Airflow issue or low refrigerant. Turn it off, let it thaw, then diagnose. Running frozen kills compressors.' },
    { icon: 'ri-volume-up-line', title: 'Loud grinding or buzzing', body: 'Motor bearing, contactor, or fan issue. Buzzing without airflow is often the capacitor — small, cheap, urgent fix.' },
    { icon: 'ri-drop-line', title: 'Water leaking indoors', body: 'Clogged condensate drain line — very common in the humid Fraser Valley. Sometimes a DIY vacuum-the-drain fix, sometimes not.' },
    { icon: 'ri-thermometer-line', title: 'Some rooms cool, others hot', body: 'Airflow / duct balancing or an undersized system. A room addition or opened-up floor plan often outgrows the original AC sizing.' }
  ];

  const services = [
    { icon: 'ri-snowflake-line', title: 'AC Repair', body: 'Same-day diagnostic for most breakdowns. Common parts (capacitors, contactors, motors) stocked for one-visit repairs when possible.' },
    { icon: 'ri-hammer-line', title: 'Central AC Installation', body: 'New central AC on existing ductwork or full ducted install. Free replacement quotes with efficiency tier options.' },
    { icon: 'ri-home-wifi-line', title: 'Ductless Mini-Split Install', body: 'Single-zone for a hot room or suite; multi-zone for whole-home cooling without ducts. Rebate paperwork included.' },
    { icon: 'ri-tools-line', title: 'AC Tune-Up', body: 'Pre-summer service: coil clean, refrigerant check, electrical test, filter. Book in April/May to avoid mid-summer backlogs.' },
    { icon: 'ri-leaf-line', title: 'Heat Pump (Cooling + Heating)', body: 'One system for AC and winter heat. Cold-climate models work well in Abbotsford. Rebate-eligible.' },
    { icon: 'ri-alarm-warning-line', title: 'Emergency AC Service', body: 'No cooling during a heat wave? Priority dispatch. Fraser Valley heat can be a real health risk for seniors and young kids.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coolingSchema) }} />
      <Header />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-blue-900">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/ac-maintenance-abbotsford-hero.png')` }} />
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AC & Cooling in <span className="text-blue-300">Abbotsford</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-100 leading-relaxed">
              AC not cooling on a 35°C day? Hot upstairs bedroom nobody sleeps in? Wondering if a ductless mini-split makes sense? Get straight answers and real cost ranges from a local Abbotsford installer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${settings.phoneRaw}`} className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl inline-flex items-center justify-center gap-2">
                <i className="ri-phone-fill text-2xl"></i>
                Call {settings.phoneNumber}
              </a>
              <Link href="#common-cooling-problems" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2">
                <i className="ri-question-line"></i>
                Common AC problems
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fraser Valley reality check */}
      <section className="py-12 bg-orange-50 border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-800 leading-relaxed">
            <span className="font-bold">Fraser Valley summers aren&apos;t what they used to be.</span> Since the 2021 heat dome hit 40°C+ in Abbotsford, AC has shifted from a nice-to-have to something a lot of homes need — and older houses were never sized for it. If your system was installed pre-2015, it may be working harder than it was ever spec&apos;d for.
          </p>
        </div>
      </section>

      {/* Common Problems */}
      <section id="common-cooling-problems" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Common AC Problems in Abbotsford</h2>
            <p className="text-lg text-gray-600">What people call about — and what it usually turns out to be.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {commonProblems.map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${p.icon} text-2xl text-blue-600`}></i>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Cooling Service Covers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Central AC, ductless mini-splits, and heat pumps across Abbotsford and the Fraser Valley.</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What AC Work Actually Costs in Abbotsford</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real ranges from Fraser Valley quotes — not marketing "starting from" numbers.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'AC tune-up / spring service', range: '$150 – $220', note: 'Coil clean, refrigerant check, electrical, filter' },
              { label: 'Common AC repair (capacitor, contactor)', range: '$200 – $500', note: 'Diagnostic + part, most single-visit fixes' },
              { label: 'Refrigerant recharge (if no leak)', range: '$300 – $800', note: 'R-410A cheaper than legacy R-22; leaks add cost' },
              { label: 'Central AC on existing furnace/ducts', range: '$4,500 – $8,500', note: 'Depends on tonnage, SEER2, electrical work' },
              { label: 'Ductless mini-split (single-zone)', range: '$3,500 – $6,500', note: 'Great for suites, home offices, hot rooms' },
              { label: 'Multi-zone ductless (2–4 heads)', range: '$8,000 – $18,000', note: 'Rebate-eligible if it doubles as a heat pump' }
            ].map((c, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-1">{c.label}</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{c.range}</div>
                <div className="text-xs text-gray-500">{c.note}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 italic text-center mt-6">
            Ranges reflect typical Fraser Valley quotes in 2026. Get 2–3 comparisons for anything over $2,000. Rebate stacking can meaningfully lower heat-pump numbers.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Cooling Service Areas</h2>
            <p className="text-lg text-gray-600">Abbotsford neighbourhoods and nearby Fraser Valley communities.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {geoData.areas.map((area) => (
              <Link key={area.slug} href={`/locations/${area.slug}`} className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all border border-gray-100 group">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">AC & Cooling FAQ</h2>
            <p className="text-lg text-gray-600">Real questions Abbotsford homeowners ask about air conditioning.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-gray-50 rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all">
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

      {/* Bottom CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Talk to a Local Cooling Specialist</h2>
          <p className="text-lg text-blue-100 mb-8">
            Whether it&apos;s a same-day AC repair or planning ahead for the next heat wave — call or chat and get connected with a local Abbotsford installer.
          </p>
          <a href={`tel:${settings.phoneRaw}`} className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all shadow-xl">
            <i className="ri-phone-fill text-2xl"></i>
            Call {settings.phoneNumber}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
