import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { getSettings } from '@/lib/getSettings';
import geoData from '@/lib/data/geo-service-data.json';

export const metadata: Metadata = {
  title: "Plumber Abbotsford BC — Plumbing Repairs & Water Heater Service",
  description: "Local plumber in Abbotsford — leak repairs, drain cleaning, water heater install (tank & tankless), and emergency plumbing. Real cost ranges. Fraser Valley coverage.",
  alternates: { canonical: 'https://www.abbotsfordhvac.ca/services/plumbing' },
  openGraph: {
    title: "Plumber Abbotsford BC — Plumbing Repairs & Water Heater Service",
    description: "Local plumber in Abbotsford — leaks, drains, water heaters, and emergency plumbing across the Fraser Valley.",
    images: ['https://www.abbotsfordhvac.ca/images/hvac-maintenance-abbotsford-hero.png']
  }
};

const faqs = [
  {
    q: 'How much does a plumber cost in Abbotsford?',
    a: 'Service call minimums typically run $95–$150 in the Fraser Valley. Most common repairs (leaky faucet, running toilet, minor drain unclog) total $150–$400 for the visit. Bigger jobs (main line, water heater, re-piping section) run $500–$5,000+. Emergency after-hours calls carry a higher call-out fee but no surprise pricing after diagnostic.'
  },
  {
    q: 'How much does water heater installation cost in Abbotsford?',
    a: 'Standard tank water heater installed: $1,200–$2,800 depending on size and gas vs electric. Tankless water heater installed: $3,000–$5,500 — higher upfront but 20+ year lifespan and 20–30% lower operating cost vs a tank. Gas conversions and code upgrades (venting, expansion tanks) can add $300–$1,500.'
  },
  {
    q: 'Tankless vs tank water heater — which is better for Abbotsford?',
    a: 'Tankless wins for: households with 3+ people, high hot water demand, limited utility space, or 15+ year planning horizon. Tanks win for: lower upfront cost, simpler install, occasional-use properties. Fraser Valley municipal water is moderately hard, so tankless units need annual descaling — plan for that.'
  },
  {
    q: 'How long does a water heater last?',
    a: 'Standard tank water heater: 8–12 years typical, 15 with careful maintenance. Tankless: 15–20+ years with annual descaling. Warning signs: rusty hot water, popping/rumbling on heat cycle, water pooling around the base, or hot water running out faster than it used to.'
  },
  {
    q: 'Do you handle emergency plumbing in Abbotsford?',
    a: 'Yes — burst pipes, active leaks, sewage backup, and no-hot-water calls are treated as emergencies. Priority dispatch for anything actively damaging the home. Turn off the main water shutoff (usually near where water enters the house) before calling if there\'s an active leak.'
  },
  {
    q: 'What plumbing issues are most common in Abbotsford homes?',
    a: 'Frozen or burst pipes during cold snaps (older homes with poorly insulated crawlspaces), aging galvanized supply lines needing replacement, cast iron drain line problems in pre-1980 homes, hard-water buildup on fixtures and tankless heaters, and root intrusion in older main sewer lines.'
  },
  {
    q: 'Should I repipe my whole house?',
    a: 'Common triggers: multiple leaks in original galvanized or Poly-B pipe (common in 1980s–90s Abbotsford builds), consistently low water pressure, or discoloured water from corroded lines. Full residential repipe in copper or PEX typically runs $4,000–$15,000 depending on home size and access.'
  },
  {
    q: 'Do you serve Mission, Chilliwack, and other Fraser Valley areas?',
    a: 'Yes — coverage across Abbotsford, Mission, and nearby Fraser Valley communities including Chilliwack for larger jobs. Call to confirm for outlying addresses.'
  }
];

const plumbingSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plumbing Services in Abbotsford, BC",
    "description": "Plumbing repairs, drain cleaning, water heater install and service, repipe work, and emergency plumbing across Abbotsford and the Fraser Valley.",
    "provider": { "@type": "HVACBusiness", "@id": "https://www.abbotsfordhvac.ca/#business" },
    "areaServed": { "@type": "City", "name": "Abbotsford" },
    "serviceType": ["Plumbing Repair", "Drain Cleaning", "Water Heater Installation", "Tankless Water Heater", "Emergency Plumbing", "Repipe"]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.abbotsfordhvac.ca" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.abbotsfordhvac.ca/services/plumbing" },
      { "@type": "ListItem", "position": 3, "name": "Plumbing", "item": "https://www.abbotsfordhvac.ca/services/plumbing" }
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

export default function PlumbingServices() {
  const settings = getSettings();

  const commonProblems = [
    { icon: 'ri-drop-line', title: 'Active leak or burst pipe', body: 'Shut off the main water valve first, then call. Most homes have the shutoff near where water enters — often in a basement corner or utility room.' },
    { icon: 'ri-fire-line', title: 'No hot water', body: 'Pilot light out (gas), tripped breaker (electric), failed heating element, or the tank\'s reached end-of-life. Age of unit is the biggest tell.' },
    { icon: 'ri-alarm-warning-line', title: 'Water heater leaking', body: 'Small leaks around fittings may be fixable. Tank leaking from the bottom = usually replacement time. Don\'t ignore — a burst tank floods fast.' },
    { icon: 'ri-loader-line', title: 'Slow drains or backed-up sewer', body: 'Kitchen and bathroom drains often clog from grease and hair. Whole-house backup usually means main line — cameras help pinpoint it.' },
    { icon: 'ri-water-flash-line', title: 'Low water pressure', body: 'Could be a single fixture (aerator, cartridge) or system-wide (galvanized pipe corrosion, pressure regulator, or municipal supply). Different fixes.' },
    { icon: 'ri-water-percent-line', title: 'Hard water buildup', body: 'Fraser Valley water isn\'t extreme but tankless heaters, kettles, and fixtures show it. Water softeners and annual descaling help.' },
    { icon: 'ri-temp-cold-line', title: 'Frozen pipes in cold snap', body: 'Common in older Abbotsford homes with poorly insulated crawlspaces. Never use open flame — heat guns, warm cloths, and a slow drip help.' },
    { icon: 'ri-tools-line', title: 'Running toilet, dripping tap', body: 'Cheap fixes that add up on water bills. Most are 20-minute jobs — worth grouping several into one service call.' }
  ];

  const services = [
    { icon: 'ri-drop-line', title: 'Plumbing Repairs', body: 'Leaks, drips, running toilets, low pressure, fixture replacement — most single-visit repairs handled same-day.' },
    { icon: 'ri-fire-line', title: 'Water Heater Install & Repair', body: 'Tank and tankless. Gas, electric, and hybrid heat pump water heaters. Permit and inspection handled.' },
    { icon: 'ri-loader-line', title: 'Drain Cleaning', body: 'Kitchen, bathroom, and main-line drain unclogs. Camera inspection available for recurring or main-line issues.' },
    { icon: 'ri-alarm-warning-line', title: 'Emergency Plumbing', body: 'Burst pipes, active leaks, sewage backup. Priority dispatch — call any time, don\'t let damage compound.' },
    { icon: 'ri-hammer-line', title: 'Repipe & Pipe Repair', body: 'Section repipes and full-house replacement in copper or PEX. Especially common in Abbotsford homes with original Poly-B (1980s–90s).' },
    { icon: 'ri-tools-line', title: 'Fixture Install & Upgrades', body: 'Faucets, toilets, sinks, garburators. Coordinated with renovation projects or one-off replacements.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(plumbingSchema) }} />
      <Header />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-sky-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('/images/hvac-maintenance-abbotsford-hero.png')` }} />
        <div className="absolute inset-0 bg-sky-900/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Plumber in <span className="text-sky-300">Abbotsford, BC</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-100 leading-relaxed">
              Active leak? No hot water? Old water heater on borrowed time? Get a local Abbotsford plumber for repairs, water heater install (tank or tankless), and emergency plumbing across the Fraser Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${settings.phoneRaw}`} className="bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-sky-700 transition-all shadow-xl inline-flex items-center justify-center gap-2">
                <i className="ri-phone-fill text-2xl"></i>
                Call {settings.phoneNumber}
              </a>
              <Link href="#common-plumbing-problems" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2">
                <i className="ri-question-line"></i>
                Common plumbing problems
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-8 bg-sky-50 border-b border-sky-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-800 leading-relaxed">
            <span className="font-bold">Local Abbotsford plumbers</span> — not a call centre routing your job to whoever answers. Real cost ranges below, no surprise pricing after diagnostic, and emergency dispatch for burst pipes and active leaks.
          </p>
        </div>
      </section>

      {/* Common Problems */}
      <section id="common-plumbing-problems" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Common Plumbing Problems in Abbotsford Homes</h2>
            <p className="text-lg text-gray-600">What people call about — and what tends to cause it.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commonProblems.map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-sky-200 transition-all">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${p.icon} text-2xl text-sky-600`} aria-hidden="true"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's covered */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Plumbing Service Covers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Repairs, water heaters, drains, and emergency plumbing across Abbotsford and nearby Fraser Valley.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all border border-gray-100">
                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-4">
                  <i className={`${s.icon} text-2xl text-sky-600`}></i>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Plumbing Work Actually Costs in Abbotsford</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real ranges from Fraser Valley quotes — not marketing "starting from" pricing.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Service call + diagnostic', range: '$95 – $150', note: 'Standard minimum for a visit; applied against repair total' },
              { label: 'Common repair (leak, running toilet, drain unclog)', range: '$150 – $400', note: 'Most single-visit fixes fall here' },
              { label: 'Tank water heater installed', range: '$1,200 – $2,800', note: '40–60 gal gas or electric; plus code upgrades if needed' },
              { label: 'Tankless water heater installed', range: '$3,000 – $5,500', note: 'Higher upfront, 20+ year lifespan, endless hot water' },
              { label: 'Main sewer / drain camera & clean', range: '$400 – $900', note: 'Camera inspection + hydro-jet for tree roots or heavy blockage' },
              { label: 'Section repipe (part of house)', range: '$1,500 – $5,000', note: 'Common for kitchen/bathroom refresh or Poly-B replacement' },
              { label: 'Full-house repipe (copper or PEX)', range: '$4,000 – $15,000', note: 'Depends on size, access, and pipe material' },
              { label: 'Emergency after-hours callout', range: '+$150 – $300', note: 'Added to normal repair cost; disclosed before work' }
            ].map((c, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-sm text-gray-500 mb-1">{c.label}</div>
                <div className="text-2xl font-bold text-sky-600 mb-2">{c.range}</div>
                <div className="text-xs text-gray-500">{c.note}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 italic text-center mt-6">
            Ranges reflect typical Fraser Valley quotes in 2026. Get 2–3 comparisons for anything over $2,000.
          </p>
        </div>
      </section>

      {/* Water heater decision */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Tankless vs. Tank Water Heater — Which for Your Home?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Water heaters are the plumbing decision most Abbotsford homeowners face at some point — usually right after the old one starts leaking. Tank vs. tankless changes cost, hot water availability, install complexity, and lifespan.
              </p>
              <a href={`tel:${settings.phoneRaw}`} className="inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-700 transition-colors shadow-md">
                <i className="ri-phone-fill"></i>
                Talk it through: {settings.phoneNumber}
              </a>
            </div>
            <div className="space-y-3">
              {[
                { title: 'Household size', body: '1–3 people: tank often makes sense. 4+ or high demand: tankless usually wins.' },
                { title: 'Space', body: 'Tankless mounts on a wall — good for small utility rooms. Tanks need floor + clearance.' },
                { title: 'Time horizon', body: 'Staying 10+ years? Tankless payback works. Selling soon? Tank costs less upfront.' },
                { title: 'Gas vs electric', body: 'Gas tankless is most common in Abbotsford. Heat pump water heaters are the newest option — high efficiency, higher install cost.' },
                { title: 'Fraser Valley hard water', body: 'Tankless units need annual descaling here — add to maintenance planning.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-white p-4 rounded-xl border border-sky-100">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Plumbing Service Areas</h2>
            <p className="text-lg text-gray-600">Abbotsford neighbourhoods and nearby Fraser Valley communities.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {geoData.areas.map((area) => (
              <Link key={area.slug} href={`/locations/${area.slug}`} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-sky-50 hover:text-sky-700 transition-all group">
                <div className="w-1.5 h-1.5 bg-sky-600 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-sky-700">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Plumbing FAQ</h2>
            <p className="text-lg text-gray-600">Real questions Abbotsford homeowners ask about plumbing work.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{f.q}</h3>
                  <i className="ri-add-line text-2xl text-sky-600 group-open:rotate-45 transition-transform flex-shrink-0"></i>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Plumbing Emergency in Abbotsford?</h2>
          <p className="text-lg text-red-100 mb-8">
            Active leak, burst pipe, sewage backup, or no hot water? Turn off the main shutoff if there&apos;s active water, then call. Priority dispatch across Abbotsford and the Fraser Valley.
          </p>
          <a href={`tel:${settings.phoneRaw}`} className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-50 transition-all shadow-xl">
            <i className="ri-phone-fill text-2xl"></i>
            Call {settings.phoneNumber}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
